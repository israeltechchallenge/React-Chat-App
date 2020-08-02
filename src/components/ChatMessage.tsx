import React from "react";
import { Message } from "../model/Message";
import styles from "../styles/ChatMessage.module.css";

interface MessageProps {
  message: Message;
}

const ChatMessage = ({ message }: MessageProps) => {
  return (
    <div className={styles.ChatMessage}>
      <div className={styles.MessageDate}>Monday・11:11AM</div>
      <div className={styles.ChatMessageContent}>
        <div className={styles.UserImageHolder}>
          <img
            src="https://uifaces.co/our-content/donated/XdLjsJX_.jpg"
            alt="user"
          />
        </div>
        <div className={styles.MessageBubble}>{message.content}</div>
      </div>
    </div>
  );
};

export default ChatMessage;
