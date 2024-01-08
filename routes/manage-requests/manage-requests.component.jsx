import React, {useState, useEffect} from 'react';
import {
	Container,
	ContainerTop,
	ContainerBottom,
	TitleContainer,
	Title,
	RequestRow,
	RequestText,
	ButtonContainer,
	AcceptButton,
	DeclineButton,
	ButtonText,
} from './manage-requests.styles';
import {GetTeachRequests} from '../../requests/teachRequests';
import {useAuth} from '../../context/authContext';

const ManageRequestsPage = () => {
	const [teacherApplications, setTeacherApplications] = useState([]);
	const {token} = useAuth();
	useEffect(() => {
		const fetchApplications = async () => {
			try {
				const applications = await GetTeachRequests(token);
				setTeacherApplications(applications);
			} catch (error) {
				console.error('Error fetching teacher applications:', error);
			}
		};

		fetchApplications();
	}, []);

	const handleAccept = async (applicationId) => {};

	const handleDecline = async (applicationId) => {};

	return (
		<Container>
			<ContainerTop>
				<TitleContainer>
					<Title>Manage Teacher Requests</Title>
				</TitleContainer>
			</ContainerTop>
			<ContainerBottom>
				{teacherApplications.map((application) => (
					<RequestRow key={application._id}>
						<RequestText>
							Years of Experience: {application.yearsOfExperience}
						</RequestText>
						<RequestText>Skills: {application.skills}</RequestText>
						<RequestText>Motivation: {application.description}</RequestText>
						<ButtonContainer>
							<AcceptButton onPress={() => handleAccept(application.id)}>
								<ButtonText>Accept</ButtonText>
							</AcceptButton>
							<DeclineButton onPress={() => handleDecline(application.id)}>
								<ButtonText>Decline</ButtonText>
							</DeclineButton>
						</ButtonContainer>
					</RequestRow>
				))}
			</ContainerBottom>
		</Container>
	);
};

export default ManageRequestsPage;
