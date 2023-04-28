import { signOut } from 'firebase/auth';
import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { auth } from '../firebase-config';


const Navigator = () => {

    const handeleSignOut = async () => {
        await signOut(auth)
    }

    return (
        <>
            <Navbar bg='primary' variant='dark'>
                <Container>
                    <Navbar.Brand className='text-white' href="#home">instantChat</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            <a onClick={handeleSignOut} className='text-white' href="#login">Logout</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Navigator