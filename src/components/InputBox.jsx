import React from 'react'
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { BsFillSendFill } from 'react-icons/bs'

const InputBox = ({ handleSubmit, setNewMessage, newMessage }) => {
    return (
        <>
            <form onSubmit={(e) => handleSubmit(e)} className='inputBox d-flex justify-content-center align-items-center mx-auto' style={{ maxWidth: '700px' }}>
                <Form.Control placeholder='Message' onChange={(e) => setNewMessage(e.target.value)} value={newMessage} />
                <Button type='submit' className='sendButton' variant='bg-light'><BsFillSendFill className='sendIcon' /></Button>

            </form>
        </>
    )
}

export default InputBox