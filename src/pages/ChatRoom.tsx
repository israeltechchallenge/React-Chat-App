import React, { useState, useEffect } from "react";
import ChatBox from "../components/ChatBox";
import MessageForm from "../components/MessageForm";
import { Message } from "../model/Message";
import styles from "../styles/ChatRoom.module.css";
import firebase from "firebase";
// const mockMessages: Message[] = [
//   {
//     id: "1",
//     date: new Date(),
//     userId: "1",
//     content: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
//   },
//   {
//     id: "2",
//     date: new Date(),
//     userId: "1",
//     content: "Lorem ipsum dolor sit amet.",
//   },
// ];

const ChatRoom = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const handleOnNewMessage = (newMessage: Message) => {
    setMessages((messages) => {
      return [newMessage, ...messages];
    });
  };
  useEffect(() => {
    firebase
      .firestore()
      .collection("messages")
      .onSnapshot((snap) => {
        const messages = snap.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
            date: new Date(doc.data().date.seconds * 1000)
          } as Message;
        });
        setMessages(messages);
      });
  }, []);
  return (
    <div className={styles.ChatRoomLayout}>
      <ChatBox messages={messages} />
      <MessageForm onNewMessage={handleOnNewMessage} />
    </div>
  );
};

export default ChatRoom;
