const colors = require('colors');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const myPlaintextPassword = 'lennyawesome';


bcrypt.hash(myPlaintextPassword, saltRounds, (error, hash) => {
    console.log(`Your password hash for ${myPlaintextPassword} is ${hash}`.green);
});
