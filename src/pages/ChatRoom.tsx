import React, { useState } from "react";
import ChatBox from "../components/ChatBox";
import MessageForm from "../components/MessageForm";
import { Message } from "../model/Message";
import styles from "../styles/ChatRoom.module.css";

const mockMessages: Message[] = [
  {
    id: "1",
    date: new Date(),
    userId: "1",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: "2",
    date: new Date(),
    userId: "1",
    content: "Lorem ipsum dolor sit amet.",
  },
];

const ChatRoom = () => {
  const [messages, setMessages] = useState<Message[]>(mockMessages);
  const handleOnNewMessage = (newMessage: Message) => {
    setMessages((messages) => {
      return [newMessage, ...messages];
    });
  };
  return (
    <div className={styles.ChatRoomLayout}>
      <ChatBox messages={messages} />
      <MessageForm onNewMessage={handleOnNewMessage} />
    </div>
  );
};

export default ChatRoom;
