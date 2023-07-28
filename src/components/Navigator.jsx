import { signOut } from 'firebase/auth';
import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { auth } from '../firebase-config';
import Cookies from 'universal-cookie';
import { NavLink, useNavigate } from 'react-router-dom';

const Navigator = ({ setIsAuth, isAuth, }) => {
    const cookies = new Cookies()
    const navgate = useNavigate()

    const handeleSignOut = async () => {
        await signOut(auth)
        cookies.remove(isAuth)
        console.log(isAuth)
        setIsAuth(false)
        navgate('/');
    }

    return (
        <>
            <Navbar bg='primary' variant='dark'>
                <Container>
                    <Navbar.Brand className='text-white' href="#home">instantChat</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            <NavLink onClick={handeleSignOut} className='text-white' to="/">Logout</NavLink>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Navigator