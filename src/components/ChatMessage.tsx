import React, { useEffect, useState, useContext } from "react";
import { Message } from "../model/Message";
import styles from "../styles/ChatMessage.module.css";
import firebase from "firebase/app";
import { User } from "../model/User";
import UserContext from "../context/UserContext";
import formatDistance from "date-fns/formatDistance";

interface MessageProps {
  message: Message;
}

const ChatMessage = ({ message }: MessageProps) => {
  const userContext = useContext(UserContext);
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    firebase
      .firestore()
      .collection("users")
      .doc(message.userId)
      .get()
      .then((result) => {
        const user = result.data() as User;
        setUser(user);
        setLoading(false);
      });
  }, [message.userId]);
  const isCurrentUser =
    userContext.currentUser && user && userContext.currentUser.id === user.id;
  if (loading) {
    return <div></div>
  }
  return (
    <div className={styles.ChatMessage}>
      <div className={styles.MessageDate}>{formatDistance(new Date(), message.date)}</div>
      <div
        className={
          isCurrentUser
            ? styles.ChatMessageContentFlipped
            : styles.ChatMessageContent
        }
      >
        <div className={styles.UserImageHolder}>
          <img
            src={user ? user.imageURL : ""}
            alt={user ? user.displayName : ""}
          />
        </div>
        <div className={styles.MessageBubble}>{message.content}</div>
      </div>
    </div>
  );
};

export default ChatMessage;
