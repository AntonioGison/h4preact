const router = require('express').Router();
const pool = require("../db");
const authorization = require('../middleware/authorization');
//dashboard route

router.get('/', authorization , async (req, res) => {
    try {
        
        //res.json(req.user);
        const user = await pool.query("SELECT * FROM users WHERE user_id = $1", [req.user.id] );

        res.json(user.rows[0]);
        
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server error");
    }
})


module.exports = router;