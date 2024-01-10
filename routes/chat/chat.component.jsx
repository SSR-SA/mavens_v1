import React, {useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {formatDistanceToNow} from 'date-fns';

import {
	Container,
	ContainerTop,
	ContainerBottom,
	TitleContainer,
	Title,
	UserList,
	UserListItem,
	UserProfileImage,
	UserDetails,
	UserName,
	UserRole,
	UserLastLogin,
	UserRoleLoginContainer,
} from './chat.styles';

const initialData = {
	users: [
		{
			id: 1,
			name: 'User 1',
			role: 'user',
			lastLogin: '2022-02-01T12:30:00Z',
			profileImage: 'https://app.acquire.fi/static/image/icons/email.png',
		},
		{
			id: 2,
			name: 'User 2',
			role: 'admin',
			lastLogin: '2022-02-02T14:45:00Z',
			profileImage: 'https://app.acquire.fi/static/image/icons/email.png',
		},
		{
			id: 3,
			name: 'User 3',
			role: 'teacher',
			lastLogin: '2022-02-03T10:15:00Z',
			profileImage: 'https://app.acquire.fi/static/image/icons/email.png',
		},
	],
};

export const formatLastLogin = (lastLogin) => {
	const now = new Date();
	const loginDate = new Date(lastLogin);

	const distanceToNow = formatDistanceToNow(loginDate, {addSuffix: true});

	// If it's more than a day ago, return a specific date format
	if (distanceToNow.includes('ago')) {
		return distanceToNow;
	} else {
		return loginDate.toLocaleDateString();
	}
};

const ChatPage = ({navigation}) => {
	useEffect(() => {
		setData(initialData);
	}, []);

	const [data, setData] = useState(initialData);

	const handleSelectUser = (chatId) => {
		navigation.navigate('ChatScreen', {chatId});
	};

	return (
		<Container>
			<ContainerTop>
				<TitleContainer>
					<Title>Chat with Users</Title>
				</TitleContainer>
			</ContainerTop>
			<ContainerBottom>
				<UserList>
					{data.users.map((chats) => (
						<UserListItem
							key={chats.id}
							onPress={() => handleSelectUser(chats.id)}
						>
							<UserProfileImage source={{uri: chats.profileImage}} />
							<UserDetails>
								<UserName>{chats.name}</UserName>
								<UserRoleLoginContainer>
									<UserRole>{chats.role}</UserRole>
									<UserLastLogin>
										{formatLastLogin(chats.lastLogin)}
									</UserLastLogin>
								</UserRoleLoginContainer>
							</UserDetails>
						</UserListItem>
					))}
				</UserList>
			</ContainerBottom>
		</Container>
	);
};

export default ChatPage;
