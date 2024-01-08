import React, {useEffect, useState} from 'react';
import {Linking} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {
	Container,
	ContainerTop,
	ContainerBottom,
	TitleContainer,
	Title,
	InputContainer,
	Input,
	ButtonContainer,
	SendRequestButton,
	SendRequestButtonText,
	TermsContainer,
	Terms,
	PrivacyLink,
	LatestRequestText,
	LatestRequestRow,
} from './become-teacher.styles';
import {GetLatestRequest, PostTeachRequest} from '../../requests/teachRequests';
import {useAuth} from '../../context/authContext';

const BecomeTeacherPage = ({navigation}) => {
	const [experience, setExperience] = useState('');
	const [techStack, setTechStack] = useState('');
	const [motivationalReason, setMotivationalReason] = useState('');
	const [latestRequest, setLatestRequest] = useState('');
	const {token} = useAuth();

	const handleBecomeTeacherRequest = async () => {
		const response = await PostTeachRequest(token, {
			experience,
			skills: techStack,
			description: motivationalReason,
		});
		if (response) {
			setLatestRequest(response);
		}
	};

	useEffect(async () => {
		const latest = await GetLatestRequest(token);
		setLatestRequest(latest);
	}, []);

	return (
		<SafeAreaView style={{flex: 1, backgroundColor: '#111313'}}>
			<Container>
				<ContainerTop>
					<TitleContainer>
						<Title>Become a Teacher</Title>
					</TitleContainer>

					{latestRequest && (
						<LatestRequestRow>
							<LatestRequestText>
								Latest Request Status: {latestRequest.status}
							</LatestRequestText>
						</LatestRequestRow>
					)}
					<InputContainer>
						<Input
							placeholder="Years of Experience"
							keyboardType="numeric"
							value={experience}
							onChangeText={(text) => setExperience(text)}
							placeholderTextColor="#808080"
						/>
						<Input
							placeholder="Tech Stack (e.g., Node, TypeScript, MongoDB)"
							value={techStack}
							onChangeText={(text) => setTechStack(text)}
							placeholderTextColor="#808080"
						/>
						<Input
							placeholder="Motivational Reason"
							multiline
							numberOfLines={4}
							value={motivationalReason}
							onChangeText={(text) => setMotivationalReason(text)}
							placeholderTextColor="#808080"
						/>
					</InputContainer>
					<ButtonContainer>
						<SendRequestButton onPress={handleBecomeTeacherRequest}>
							<SendRequestButtonText>Send Request</SendRequestButtonText>
						</SendRequestButton>
					</ButtonContainer>
				</ContainerTop>

				<ContainerBottom>
					<TermsContainer>
						<Terms>
							{`By sending a request, you agree to our `}
							<PrivacyLink
								onPress={() => Linking.openURL('www.killme.com/privacy-policy')}
							>
								privacy policy
							</PrivacyLink>
							{` and `}
							<PrivacyLink
								onPress={() =>
									Linking.openURL('www.killme.com/terms-of-service')
								}
							>
								terms of service
							</PrivacyLink>
						</Terms>
					</TermsContainer>
				</ContainerBottom>
			</Container>
		</SafeAreaView>
	);
};

export default BecomeTeacherPage;
