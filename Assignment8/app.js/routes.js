var Assn8 = require('./models/assn8');
var bcrypt = require('bcrypt');
const saltRounds = 10;
module.exports = function (app) {
    //server routes 

    //get all users
    app.get('/user/getAll', function (req, res) {
        Assn8.find(function (err, samples) {
            if (err)
                res.send(err);
            console.log('samples', samples);
            res.json(samples);
        });
    });

        app.post('/user/insert', function (req, res) {
        console.log(req.body);
        var regexEmail = /[a-z0-9]+@northeastern.edu/;
        var regexPwd = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%&*]).{8,}$/;
        var regExName = /^[a-zA-Z]+$/;
        var em = req.body.email;
        var pass = req.body.password;
        var fname = req.body.full_name;
        var query = { email: req.body.email };
        if (!fname || !fname.match(regExName)) {
            res.send("Name is in invalid format");
        }
        else if (!em || !em.match(regexEmail)) {
            res.send("Email is in invalid format, use northeastern.edu format");
        }
        else if (!pass || !pass.match(regexPwd)) {
            res.send("Password is in invalid format, follow password rules : 1 Uppercase Character, 1 lower character, 1 special character, 1 digit and minimum 8 characters");
        }
        else {
            Assn8.count(query, function (err, count) {
                if (err) {
                    res.send(err);
                }
                if (count == 1) {
                    res.send("Email Id Exists!");
                }
                else {
                    bcrypt.genSalt(saltRounds, function (err, salt) {
                        bcrypt.hash(req.body.password, salt, function (err, hash) {
                            var record = new Assn8({
                                full_name: req.body.full_name,
                                email: req.body.email,
                                password: hash
                            });
                            record.save(function (err, rec) {
                                if (err)
                                    res.send(err);
                                console.log('Saved ' + rec);
                                res.send("Created User successfully");
                            });
                        });
                    });
                }
            });
        }
    });
    
    //update route
    app.put('/user/edit', function (req, res) {
        console.log(req.body);
        var query = { email: req.body.email };
        var regexEmail = /[a-z0-9]+@northeastern.edu/;
        var regexPwd = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%&*]).{8,}$/;
        var regExName = /^[a-zA-Z]+$/;
        var em = req.body.email;
        var pass = req.body.password;
        var fname = req.body.full_name;

        if (!fname.match(regExName)) {
            res.send("Name is in invalid format");
        }
        else if (!em.match(regexEmail)) {
            res.send("Email is in invalid format, use northeastern.edu format");
        }
        else if (!pass.match(regexPwd)) {
            res.send("Password is in invalid format, follow password rules : 1 Uppercase Character, 1 lower character, 1 special character, 1 digit and minimum 8 characters");
        }
        else {
            Assn8.count(query, function (err, count) {
                if (err) {
                    res.send(err);
                }
                if (count == 0) {
                    res.send("User does not exists!");
                }
                else {
                    bcrypt.genSalt(saltRounds, function (err, salt) {
                        bcrypt.hash(req.body.password, salt, function (err, hash) {
                            var upd = { $set: { full_name: req.body.full_name, password: hash } };
                            Assn8.updateOne(query, upd, function (err, dc) {
                                if (err)
                                    res.send(err);
                                else
                                    res.send("Updated user");
                            });
                        });
                    });
                    
                }
            });

        }
    });

    //delete route
    app.delete('/user/delete', function (req, res) {
        console.log(req.body);
        var query = { email: req.body.email };
        var regexEmail = /[a-z0-9]+@northeastern.edu/;
        var em = req.body.email;

        if (!em.match(regexEmail)) {
            res.send("Email is in invalid format, use northeastern.edu format");
        }
        else {
            Assn8.count(query, function (err, count) {
                if (err) {
                    res.send(err);
                }
                if (count == 0) {
                    res.send("User does not exists!");
                }
                else {
                    Assn8.deleteOne(query, function (err, dc) {
                        if (err)
                            res.send(err);
                        else
                            res.send("Deleted User Successfully");
                    });
                }
            });

        }
    });
}