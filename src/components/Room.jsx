import React, { useRef } from 'react'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';

const Room = ({ setRoom }) => {
    const roomRef = useRef()
    return (
        <>
            <InputGroup className="d-flex gap-2 justify-content-center mx-auto" style={{ maxWidth: '300px' }}>
                <div className='d-flex justify-content-center align-items-center gap-1' style={{ marginTop: '9rem' }}>
                    <InputGroup.Text>Enter room name</InputGroup.Text>
                    <Form.Control ref={roomRef} />
                </div>
                <Button onClick={() => setRoom(roomRef.current.value)} className='rounded-3' style={{ width: '40%' }} variant="primary">continue</Button>
            </InputGroup>
        </>
    )
}

export default Room