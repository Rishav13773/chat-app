import React, { useState, useEffect } from "react";
import { db, auth } from "../firebase-config";
import Navigator from './Navigator'
import {
    collection,
    addDoc,
    where,
    serverTimestamp,
    onSnapshot,
    query,
    orderBy,
} from "firebase/firestore";
import InputBox from "./InputBox";
import Messages from "./Messages";


export const Chat = ({ room, user }) => {
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState("");
    const messagesRef = collection(db, "messages");

    useEffect(() => {
        const queryMessages = query(
            messagesRef,
            where("room", "==", room),
            orderBy("createdAt")
        );
        const unsuscribe = onSnapshot(queryMessages, (snapshot) => {
            let messages = [];
            snapshot.forEach((doc) => {
                messages.push({ ...doc.data(), id: doc.id });
            });
            console.log(messages);
            setMessages(messages);
        });

        return () => unsuscribe();
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (newMessage === "") return;
        await addDoc(messagesRef, {
            text: newMessage,
            createdAt: serverTimestamp(),
            user: auth.currentUser.displayName,
            room,
        });

        setNewMessage("");
    };

    return (
        <>
            <Navigator />
            <Messages messages={messages} room={room} user={user} />
            <InputBox handleSubmit={handleSubmit} setNewMessage={setNewMessage} newMessage={newMessage} />
        </>
    )
}

export default Chat