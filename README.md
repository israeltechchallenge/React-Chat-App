# ITC Chat App

Single chat room, with login and sign up

## Design

[UI Design](https://www.figma.com/file/gpn2lcHTwd5viQvuP4ASii/Android-Messaging-App---Free-Resource-(Copy)?node-id=0%3A1)

## Pages

- Chat Room
- Login/Sign up
- Profile (maybe)

## Models

```JavaScript
Message {
  id: string
  date: string
  userId: string
  content: string
}
```

```JavaScript
User {
  id: string
  displayName: string
  imageURL: string
}
```


## Components

- ChatRoom - where the messages will be
- ChatMessage - Holds a single message
- MessageForm - form that sends a new message
- Navbar - with app title and user image
- UserActions - user image, with dropdown of sign out
- Login/Signup - page using Firebase auth

## Context

UserContext that holds current logged in user

## Backend

Firebase - Firestore

## 3rd Party Libs

[React Bootstarp](https://react-bootstrap.github.io/)
[date-fns](https://date-fns.org/)