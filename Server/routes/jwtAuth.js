const router = require('express').Router();
const pool = require('../db');
const bcrypt = require('bcrypt');
const jwtGenerator = require('../utils/jwtGenerator');
const validInfo = require('../middleware/validinfo');
const authorization = require('../middleware/authorization');

router.post("/register", validInfo,  async (req, res) => {

  
    try {

      console.log("Received registration request");


      // 1 descructure req.body
      const { email, name, password } = req.body;
      
      //2 check if the user is already registered
      const user = await pool.query("SELECT * FROM users WHERE user_email = $1", [
        email
      ]);
  
      if (user.rows.length !== 0) {
        return res.status(401).json("User already exist!");
      }


      //3 bycrypt the user password
      const salt = await bcrypt.genSalt(10);
      const bcryptPassword = await bcrypt.hash(password, salt);
  
      //4 insert the user into the database
      let newUser = await pool.query(
        "INSERT INTO users (user_name, user_email, user_password) VALUES ($1, $2, $3) RETURNING *",
        [name, email, bcryptPassword]
      );
  
      //5 generate jwtoken
     const token = jwtGenerator(newUser.rows[0].user_id);
     res.json({ token });

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