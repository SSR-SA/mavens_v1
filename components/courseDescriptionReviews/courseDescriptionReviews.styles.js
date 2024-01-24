// CourseDescriptionReviewsStyles.js
import styled from 'styled-components/native';
import Ionicons from '@expo/vector-icons/Ionicons';

export const Container = styled.View`
	margin-vertical: 10px;
`;

export const ReviewContainer = styled.View`
	flex-direction: row;
	margin-bottom: 15px;
	align-items: center;
`;

export const UserContainer = styled.View`
	flex-direction: row;
	align-items: center;
`;

export const ProfileImage = styled.Image`
	width: 50px;
	height: 50px;
	border-radius: 25px;
`;

export const UserInfo = styled.View`
	margin-left: 10px;
`;

export const UserName = styled.Text`
	color: #808080; /* Grey color */
`;

export const RatingContainer = styled.View`
	flex-direction: row;
	align-items: center;
	margin-left: auto; /* Move stars to the right */
`;

export const StarIcon = styled(Ionicons)`
	color: #e19c97;
	margin-right: 2px;
`;

export const ReviewContent = styled.View`
	flex: 1;
	margin-top: 5px;
`;

export const ReviewText = styled.Text`
	color: #808080;
`;
