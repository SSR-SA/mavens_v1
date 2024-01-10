// chat.styles.js
import styled from 'styled-components/native';

export const UserList = styled.ScrollView`
	flex: 1;
	width: 100%;
	padding: 20px;
`;

export const ChatContainer = styled.View`
	flex: 1;
	width: 100%;
	padding: 20px;
`;

export const Container = styled.View`
	flex: 1;
	background-color: #111313;
	padding: 0 30px;
	padding-top: 140px;
	align-items: center;
	justify-content: flex-start;
`;

export const ContainerTop = styled.View`
	align-items: center;
	width: 100%;
	justify-content: center;
	margin-bottom: 20px;
`;

export const ContainerBottom = styled.View`
	align-items: center;
	width: 100%;
	flex: 1;
`;

export const TitleContainer = styled.View`
	align-items: center;
	width: 80%;
	margin-bottom: 10px;
`;

export const Title = styled.Text`
	font-size: 30px;
	color: #fcf9ff;
	text-align: center;
`;

export const UserListItem = styled.TouchableOpacity`
	flex-direction: row;
	align-items: center;
	background-color: #292929;
	padding: 10px;
	margin-bottom: 10px;
	border-radius: 5px;
`;

export const UserProfileImage = styled.Image`
	width: 50px;
	height: 50px;
	border-radius: 25px;
	margin-right: 10px;
`;

export const UserDetails = styled.View`
	flex: 1;
	flex-direction: column;
`;

export const UserName = styled.Text`
	font-size: 18px;
	font-weight: bold;
	color: #fcf9ff;
	margin-bottom: 5px;
`;

export const UserRoleAndLastLogin = styled.View`
	flex-direction: row;
	justify-content: space-between;
`;

export const UserRole = styled.Text`
	font-size: 16px;
	color: #fcf9ff;
`;

export const UserLastLogin = styled.Text`
	font-size: 14px;
	color: #fcf9ff;
	align-self: flex-end;
`;

export const UserRoleLoginContainer = styled.View`
	flex: 1;
	flex-direction: row;
	justify-content: space-between;
`;

// Additional styled components for ChatScreen
export const ChatHeader = styled.Text`
	font-size: 20px;
	font-weight: bold;
	margin-bottom: 16px;
`;
export const ChatMessagesContainer = styled.ScrollView`
	flex: 1;
	width: 100%;
	height: 90%;
	margin-bottom: 16px;
	padding: 0 16px;
`;

export const ChatMessageContainer = styled.View`
	flex-direction: ${({sender}) => (sender === 'user' ? 'row-reverse' : 'row')};
	margin-bottom: 8px;
`;

export const ChatMessageBubble = styled.View`
	background-color: ${({sender}) =>
		sender === 'user' ? '#388e3c' : '#1976D2'};
	padding: 8px;
	border-radius: 8px;
	max-width: 70%; /* Added to limit message bubble width */
`;

export const ChatMessageText = styled.Text`
	color: white;
`;

export const ChatInputContainer = styled.View`
	flex-direction: row;
	margin-top: 16px;
	align-items: center; /* Centering items horizontally */
`;

export const ChatTextInput = styled.TextInput`
	flex: 1;
	border-width: 1px;
	padding: 8px;
	margin-right: 8px;
	border-radius: 8px;
	background-color: #fcf9ff;
`;

export const SendButton = styled.TouchableOpacity`
	background-color: #1976d2;
	padding: 8px;
	border-radius: 8px;
	justify-content: center;
`;

export const SendButtonText = styled.Text`
	color: white;
`;
