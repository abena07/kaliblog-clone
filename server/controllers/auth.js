const authRouter = require('express').Router();
const User = require('../models/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const cookie = require('cookie-parser');
const config = require('../helpers/config')


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
                token: jwt.sign(toToken, config.JWT_SECRET),
                email: user.email,
                firstName: user.firstName,
                lastName: user.lastName
            }
            response.cookie(
                'Authorization', `Bearer ${jwt.sign(toToken, config.JWT_SECRET)}`,
                {httpOnly: true, maxAge: 86_400_000})
            response.cookie(
                'authenticated', true,
                {maxAge: 86_400_000}
            )
            response.status(200).send({})
            // response.status(200).send(toSend);
        } else {
            response.status(401).send({password: "Password does not match the email you entered"});
        }
    });
});


authRouter.post('/get-user', async(request, response)=> {
    request.isAuthenticated ? response.status(200).send(request.user) : response.status(404).send({"error": "No user found"})
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