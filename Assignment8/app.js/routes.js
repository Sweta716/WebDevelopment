var App = require('./models/app');
var bcrypt = require('bcrypt');
const { body, validationResult } = require('express-validator');
const saltRounds = 10;
module.exports = function (app) {
    //server routes 

    //get all users
    app.get('/user/getAll', function (req, res) {
        App.find(function (err, samples) {
            if (err)
                res.send(err);
            console.log('samples', samples);
            res.json(samples);
        });
    });

 

// Define validation rules for incoming request data
const insertUserValidationRules = [
  body('full_name').isAlpha().withMessage('Name is in invalid format'),
  body('email').isEmail().normalizeEmail().custom((value) => {
    if (!value.endsWith('@northeastern.edu')) {
      throw new Error('Email is in invalid format, use northeastern.edu format');
    }
    return true;
  }),
  body('password').matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%&*]).{8,}$/)
    .withMessage('Password is in invalid format, follow password rules : 1 Uppercase Character, 1 lower character, 1 special character, 1 digit and minimum 8 characters'),
];

// Handle user insertion POST request
app.post('/user/insert', insertUserValidationRules, (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const email = req.body.email;
  const password = req.body.password;
  const fullName = req.body.full_name;
  const query = { email: email };

  // Check if email already exists in database
  App.count(query, (err, count) => {
    if (err) {
      return res.status(500).send(err);
    }
    if (count > 0) {
      return res.status(400).send('Email Id Exists!');
    }

    // Generate salt and hash for the password
    bcrypt.genSalt(saltRounds, (err, salt) => {
      bcrypt.hash(password, salt, (err, hash) => {
        if (err) {
          return res.status(500).send(err);
        }
        // Save user data to database
        const user = new App({
          full_name: fullName,
          email: email,
          password: hash
        });
        user.save((err, savedUser) => {
          if (err) {
            return res.status(500).send(err);
          }
          console.log('Saved ' + savedUser);
          return res.send('Created User successfully');
        });
      });
    });
  });
});

    //update route
   
    app.put('/user/edit', async function (req, res) {
        try {
          const { email, full_name, password } = req.body;
          const query = { email };
      
          const regexEmail = /[a-z0-9]+@northeastern.edu/;
          const regexPwd = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%&*]).{8,}$/;
          const regExName = /^[a-zA-Z]+$/;
      
          if (!full_name.match(regExName)) {
            return res.send("Name is in invalid format");
          }
          if (!email.match(regexEmail)) {
            return res.send("Email is in invalid format, use northeastern.edu format");
          }
          if (!password.match(regexPwd)) {
            return res.send("Password is in invalid format, follow password rules: 1 Uppercase Character, 1 lower character, 1 special character, 1 digit and minimum 8 characters");
          }
      
          const count = await App.countDocuments(query);
          if (count === 0) {
            return res.send("User does not exist!");
          }
      
          const salt = await bcrypt.genSalt(saltRounds);
          const hash = await bcrypt.hash(password, salt);
      
          const upd = { $set: { full_name, password: hash } };
          await App.updateOne(query, upd);
      
          res.send("Updated user");
        } catch (err) {
          res.send(err);
        }
      });
      
    //delete route

app.delete('/user/delete', async function (req, res) {
    try {
      const email = req.body.email;
      const regexEmail = /[a-z0-9]+@northeastern.edu/;
      
      if (!email.match(regexEmail)) {
        res.status(400).send("Email is in invalid format, use northeastern.edu format");
        return;
      }
  
      const count = await App.count({ email: email });
      
      if (count == 0) {
        res.status(404).send("User does not exist!");
        return;
      }
  
      await App.deleteOne({ email: email });
      res.send("Deleted user successfully");
    } catch (err) {
      res.status(500).send(err);
    }
  });
}  