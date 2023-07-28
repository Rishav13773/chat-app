import React, { useEffect, useRef } from 'react'
import { Container } from 'react-bootstrap'

const Messages = ({ messages, room, user }) => {
    const bottomRef = useRef(null)

    useEffect(() => {
        // scroll to bottom every time messages change
        bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);


    return (
        <>
            <Container>
                <div className='d-flex justify-content-center'>
                    <h4>{room.toUpperCase()}</h4>
                </div>
                <div className='messageWrap'>
                    {messages.map((data) => (
                        <div key={data.id}>
                            {user === data.user ?
                                <div ref={bottomRef}>
                                    <div className='user-name d-flex flex-row-reverse'>
                                        <span style={{ fontSize: '13px', color: 'gray' }}>{data.user}</span>
                                    </div>
                                    <div>
                                        <div className='talkWrap'>
                                            <div className='talkBubble'>
                                                <p className='talkText'>{data.text}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                :
                                <div>
                                    <div className='d-flex user-name2'>
                                        <span style={{ fontSize: '13px', color: 'gray' }}>{data.user}</span>
                                    </div>
                                    <div>
                                        <div className='talkWrap2'>
                                            <div className='talkBubble2'>
                                                <p className='talkText2'>{data.text}</p>
                                            </div>
                                        </div>

                                    </div>
                                </div>}
                        </div>
                    ))}
                </div>
            </Container>

        </>
    )
}

export default Messages