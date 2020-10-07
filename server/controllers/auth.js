const authRouter = require('express').Router();
const User = require('../models/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');


const isEmpty = require('../helpers/utils').isEmpty;
const getToken = require('../helpers/utils').getToken;
const errorMessages = require('../helpers/utils').errorMessages;


authRouter.post('/login', async (request, response) => {
    await User.findOne({email: request.body.email}, (error, user)=>{
        if (error) {
            console.log(error);
            return response.status(500).send({error: "Internal Server Error"});
        }
        if (!user) return response.status(401).json(
            {
                email: "No user with that email exists"
            });
        const valid = bcrypt.compareSync(request.body.password, user.password);
        if (valid) {
            const toToken = {email: user.email, id: user.id}
            const toSend = {
                token: jwt.sign(toToken, process.env.JWT_SECRET),
                email: user.email,
                firstName: user.firstName,
                lastName: user.lastName
            }
            response.status(200).send(toSend);
        } else {
            response.status(401).send({password: "Password does not match the email you entered"});
        }
    });
});


authRouter.post('/get-user', async(request, response)=> {
    const token = getToken(request);
    try{
        const decryptedData = jwt.verify(token, process.env.JWT_SECRET);
        (!token && !decryptedData.id) ? response.status(401).json({error: errorMessages.NOT_AUTHORIZED_401}) : {};
        const user = await User.findById(decryptedData.id);
        response.status(200).send({
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email
        });
    } catch(exception) {
        response.status(500).send({error: exception});
        console.log(exception)
        console.log(token);
    }
})


authRouter.post('/signup', async (request, response) => {
    const userData = [
        request.body.firstName,
        request.body.lastName,
        request.body.email,
        request.body.password
    ]

    if (!isEmpty(userData)){
        const user = new User(request.body)
        user.password = bcrypt.hashSync(user.password, 10);

        try {
            await user.save();
            response.status(201).send({status: "User Created"});
        } catch (error) {
            response.status(500).send({status: "Internal Server Error"});
        }
    }else {
        response.status(400).json({error: "All fields are required"});
    }
})


module.exports = authRouter;