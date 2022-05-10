import React, { useState } from 'react';
import './Login.css'
import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { Link, useNavigate } from 'react-router-dom';


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [signInWithGoogle, googleuser, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();

    const [signInWithEmailAndPassword, user
    ] = useSignInWithEmailAndPassword(auth);

    if (googleuser) {
        navigate('/home');
    }
    if (user) {
        navigate('/home');
    }
    if (loading) {
        return <p>Loading...</p>;
    }

    const hangleLogin = (event) => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password);
        console.log(email);

    }


    return (
        <div className='loginForm w-50 mx-auto p-3'>
            <h3 className='text-warning'>Please Login</h3>
            <Form onSubmit={hangleLogin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onChange={(e) => setEmail(e.target.value)} name='email' type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onChange={(e) => setPassword(e.target.value)} name='password' type="password" placeholder="Password" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Login
                </Button>
                <p>NO account? <Link to="/signup">Sign Up</Link></p>
            </Form>
            <hr />

            <Button onClick={() => signInWithGoogle()} className='' variant="success" type="submit">
                Google SignIn
            </Button>
        </div>
    );
};

export default Login;