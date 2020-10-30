const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const config = require('../../helpers/config');

const User = require('../../models/user');


const mockedUser = {
    firstName: "Desmond",
    lastName: "Brown",
    email: "browndesmond",
    password: jwt.sign('Passw0rd!@a1b2c3.com', config.JWT_SECRET)
}


/**
 * Test for User Models.
 * Phases of test cases:
 *      1. Insert User into the db successfully (Test Normal use case)
 *      2. Insert User with invalid field. (Test on Schema)
 *      3. Insert User without required field. (Test on Validation)
 */

describe('User Model Test', ()=> {
    beforeAll(async ()=> {
        await mongoose.connect(config.MONGODB_URI, config.MONGODB_OPTIONS, error=> {
            if (error){
                console.log(error);
                process.exit(1);
            }
        });
    });

    test('TEST CASE 1: Create and Save A User Successfully', async ()=> {
        const validUser = new User(mockedUser);
        const savedUser = await validUser.save();

        //    Expect the following to be defined
        expect(savedUser.id).toBeDefined();
        expect(savedUser.firstName).toBe(mockedUser.firstName);
        expect(savedUser.lastName).toBe(mockedUser.lastName);
        expect(savedUser.email).toBe(mockedUser.email);
        expect(savedUser.password).toBe(mockedUser.password);
        expect(savedUser.active).toBe(false);
        expect(savedUser.dateJoined).toBeDefined();
        expect(savedUser.lastLogin).toBeDefined();

    });
    //      Test Schema is working!!!
    //      You shouldn't be able to add in any field that isn't defined in the schema
    test ('TEST CASE 2: Insert user successfully, but the field not defined in schema should be undefined', async() => {
        const userWithInvalidField = new User({
            firstName: "Desmond",
            lastName: "Some Name",
            email: "email@email.com",
            password: jwt.sign("password", config.JWT_SECRET),
            username: "kali-junior"
        });
        const savedUser = await userWithInvalidField.save();
        expect(savedUser._id).toBeDefined();
        expect(savedUser.username).toBeUndefined();
    });

    test('TEST CASE 3: Create User without required field should field', async ()=> {
        const userWithoutReqField = new User({
            firstName: "Desmond",
            lastName: "Brown",
            password: "hacker"
        })

        let err;
        try {
            err = await userWithoutReqField.save();
        } catch (error) {
            err = error;
        }
        expect(err).toBeInstanceOf(mongoose.Error.ValidationError);
        expect(err.errors.email.value).toBeUndefined();
    });
});