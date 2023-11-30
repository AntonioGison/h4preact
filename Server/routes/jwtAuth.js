const router = require('express').Router();
const pool = require('../db');
const bcrypt = require('bcrypt');
const jwtGenerator = require('../utils/jwtGenerator');
const validInfo = require('../middleware/validinfo');
const authorization = require('../middleware/authorization');

// //Register
// router.get("/test", async (req, res) => {
//     try {
//         const result = await pool.query("SELECT 1");
//         res.json({ message: "Database connection successful", result: result.rows });
//     } catch (error) {
//         console.error(error.message);
//         res.status(500).json({ error: "Database connection error" });
//     }
// });



router.post("/register",  async (req, res) => {

  
    try {

      console.log("Received registration request");

      const { email, name, password } = req.body;
      
      const user = await pool.query("SELECT * FROM users WHERE user_email = $1", [
        email
      ]);
  
      if (user.rows.length !== 0) {
        return res.status(401).json("User already exist!");
      }


  
      const salt = await bcrypt.genSalt(10);
      const bcryptPassword = await bcrypt.hash(password, salt);
  
      let newUser = await pool.query(
        "INSERT INTO users (user_name, user_email, user_password) VALUES ($1, $2, $3) RETURNING *",
        [name, email, bcryptPassword]
      );
  
     const token = jwtGenerator(newUser.rows[0].user_id);
     res.json({ token });
      return await res.json(newUser.rows[0]);

    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server error");
    }
  });


//   GET htttp://backeennd.com/api/users?userename=jacobbennetet&sortByy=createdDatet
//   POST http://backend.com/api/users
//   body{ username: "jcob"}

router.post("/login", validInfo, async (req, res) => {
    try {
    //destructure req.body
    const {email, password} = req.body

    //check if user doesn't exists (if not throw error)
    const user = await pool.query("SELECT * FROM users WHERE user_email = $1",[email])
    
    if(user.rows.length === 0){
        return res.status(401).json("email is incorrect")
    }
    //check if incoming passsword is the same as database password
    const validPassword = await bcrypt.compare(password, user.rows[0].user_password);

    if(!validPassword){
        return res.status(401).json("password is incorrect");
    }
    console.log(validPassword);
    //give them the jwt token
    
    const token = jwtGenerator(user.rows[0].user_id);

    res.json({token});

    } catch (error) {
        console.error(err.message);
        res.status(500).send("Server error");
    }
})

router.get("/is-verify", authorization, async (req, res) => {
    try {
        res.json(true);
    } catch (error) {
        console.error(err.message);
        res.status(500).send("Server error");
    }
});

module.exports = router;