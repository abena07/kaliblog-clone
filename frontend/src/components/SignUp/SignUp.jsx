import React, { useState } from 'react';


const SignUp = (props) => {
    
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');

    const getUsername = (e) => {
        setUsername(e.target.value);
    }
    
    const getPassword = (e) => {
        setPassword(e.target.value);
    }

    const getPassword2 = (e) => {
        setPassword2(e.target.value);
    }

    const validate = () => {
        if (username !== ""){
            return username === password === password2;
        }
    }

    const SignUp = (e) => {
        e.preventDefault();
        const user = {username: username, password: password};
        console.log(props.users)
        validate ? props.setUser(props.users.push(user)) : props.setUser(props.users);
        // props.render = false;
        props.setIsAuthenticated(true);
    }
       
    return (
        props.render ? (
            <div className="container">
                <form method="post" onSubmit={SignUp} className="auth-container">
                    <input name="username" onChange={getUsername} type="text" placeholder="someone@email.com"/>
                    <input name="password" onChange={getPassword} type="password" placeholder="your password"/>
                    <input type="password" name="password2" placeholder="Confirm password" onChange={getPassword2}/>
                    <button type="submit">SIGNUP</button>
                    <a href="#login">Already have an account? Login.</a>
                </form>
            </div>
        ) : null
    )
}

export default SignUp;