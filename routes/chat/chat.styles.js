// Add these imports at the beginning of your styled-components file
import styled from 'styled-components/native';

export const UserList = styled.ScrollView`
	flex: 1;
	width: 100%;
	padding: 20px;
`;

export const ChatContainer = styled.ScrollView`
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
	align-self: flex-end; /* Aligns to the right */
`;

export const UserRoleLoginContainer = styled.View`
	flex: 1;
	flex-direction: row;
	justify-content: space-between;
`;
