import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Cookies from 'universal-cookie';
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from '../firebase-config';


const Login = ({ setIsAuth, setUser }) => {
    const cookies = new Cookies()

    const signInWithGoogle = async () => {
        try {
            const result = await signInWithPopup(auth, provider);
            cookies.set("auth-token", result.user.refreshToken);
            setIsAuth(true);
            setUser(auth.currentUser.displayName)
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <Card className="text-center border-0">
            <Card.Body className='d-flex flex-column align-items-center' style={{ marginTop: '9rem' }}>
                <Card.Title>Hello there...</Card.Title>
                <Card.Text>
                    join conversation on community latest trends.
                </Card.Text>
                <Button onClick={signInWithGoogle} variant="primary">Log in</Button>
            </Card.Body>
        </Card>
    );
}

export default Login