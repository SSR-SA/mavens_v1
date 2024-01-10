// ChatScreen.js
import React, {useState} from 'react';
import {
	Container,
	ChatHeader,
	ChatMessagesContainer,
	ChatMessageContainer,
	ChatMessageBubble,
	ChatMessageText,
	ChatInputContainer,
	ChatTextInput,
	SendButton,
	SendButtonText,
} from './chat-screen.styles';

const ChatScreen = () => {
	const [messages, setMessages] = useState([
		{id: 1, text: 'Hello!', sender: 'user'},
		{id: 2, text: 'Hi there!', sender: 'otherUser'},
		{id: 3, text: 'How are you?', sender: 'user'},
		{id: 4, text: "I'm good, thanks!", sender: 'otherUser'},
		{id: 5, text: "I'm good, thanks!", sender: 'otherUser'},
		{id: 6, text: "I'm good, thanks!", sender: 'otherUser'},
		{id: 7, text: "I'm good, thanks!", sender: 'otherUser'},
		{id: 8, text: "I'm good, thanks!", sender: 'otherUser'},
		{id: 9, text: "I'm good, thanks!", sender: 'otherUser'},
		{id: 10, text: "I'm good, thanks!", sender: 'otherUser'},
		{id: 11, text: "I'm good, thanks!", sender: 'otherUser'},
		{id: 12, text: "I'm good, thanks!", sender: 'otherUser'},
		{id: 13, text: "I'm good, thanks!", sender: 'otherUser'},
		{id: 14, text: "I'm good, thanks!", sender: 'otherUser'},
		{id: 15, text: 'How are you?', sender: 'user'},
		{id: 16, text: 'How are you?', sender: 'user'},
		{id: 17, text: 'How are you?', sender: 'user'},
		{id: 18, text: 'How are you?', sender: 'user'},
		{id: 19, text: 'How are you?', sender: 'user'},
	]);
	const [newMessage, setNewMessage] = useState('');

	const handleSend = () => {
		if (newMessage.trim() !== '') {
			setMessages([
				...messages,
				{id: messages.length + 1, text: newMessage, sender: 'user'},
			]);
			setNewMessage('');
		}
	};

	return (
		<Container>
			<ChatHeader>Chatting with {'Baydete'}</ChatHeader>
			<ChatMessagesContainer>
				{messages.map((message) => (
					<ChatMessageContainer key={message.id} sender={message.sender}>
						<ChatMessageBubble sender={message.sender}>
							<ChatMessageText>{message.text}</ChatMessageText>
						</ChatMessageBubble>
					</ChatMessageContainer>
				))}
			</ChatMessagesContainer>
			<ChatInputContainer>
				<ChatTextInput
					placeholder="Type a message..."
					value={newMessage}
					onChangeText={(text) => setNewMessage(text)}
				/>
				<SendButton onPress={handleSend}>
					<SendButtonText>Send</SendButtonText>
				</SendButton>
			</ChatInputContainer>
		</Container>
	);
};

export default ChatScreen;
