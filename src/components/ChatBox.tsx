import React from "react";
import { Message } from "../model/Message";
import ChatMessage from "./ChatMessage";
import styles from "../styles/ChatBox.module.css";
interface ChatBoxProps {
  messages: Message[];
}

const ChatBox = ({ messages }: ChatBoxProps) => {
  return (
    <div className={styles.ChatBox}>
      {messages.map((message) => (
        <ChatMessage key={message.id} message={message} />
      ))}
    </div>
  );
};

export default ChatBox;
