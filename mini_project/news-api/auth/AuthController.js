const express = require('express');
const router = express.Router();
const LocalStorage = require('node-localstorage').LocalStorage;
localStorage = new LocalStorage('./scratch');
const app = express();
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const config = require('config')
const User = require('../models/User');

app.use(express.static(__dirname));
app.set('view engine', 'ejs');

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

// Register User
router.post('/register', function(req, res) {
  
    const hashedPassword = bcrypt.hashSync(req.body.password, 8);
    
    User.create({
      name : req.body.name,
      email : req.body.email,
      password : hashedPassword
    },
    function (err, user) {
      if (err) return res.status(500).send("There was a problem registering the user.")
      // var token = jwt.sign({ id: user._id }, config.secret, {
      //   expiresIn: 86400
      // });
      const string = encodeURIComponent('Success Fully Register Please Login');
      res.redirect('/api/admin?msg=' + string);
    }); 
  });

// Login User
router.post('/index', function(req, res) {
    User.findOne({ email: req.body.email }, function (err, user) {
      if (err) return res.status(500).send('Error on the server.');
      const string = encodeURIComponent('! Please enter valid value');
      if (!user) { res.redirect('/?valid=' + string);}
      else{
        const passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
        if (!passwordIsValid) return res.status(401).send({ auth: false, token: null });
        // var token = jwt.sign({ id: user._id }, config.secret, {
        //     expiresIn: 86400 // expires in 24 hours
        // });
        // localStorage.setItem('authtoken', token)
        res.redirect('/api/admin/newsForm');
      }
    });
});

module.exports = router;