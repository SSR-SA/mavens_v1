// CourseChapterCreationPage.jsx
import React, {useState, useEffect} from 'react';
import {SafeAreaView, ScrollView, Text} from 'react-native';
import {
	Container,
	TitleContainer,
	Title,
	InputContainer,
	Input,
	ButtonContainer,
	CreateButton,
	CreateButtonText,
	DropdownContainer,
} from './createChapter.styles';
import {useAuth} from '../../context/authContext';
import {getUserCourses} from '../../requests/courses';
import {Picker} from '@react-native-picker/picker';
import {useFocusEffect} from '@react-navigation/native';

const CreateChapterPage = ({navigation}) => {
	const data = [
		{
			_id: '1',
			title: 'title1',
		},
		{
			_id: '2',
			title: 'title2',
		},
		{
			_id: '3',
			title: 'title3',
		},
		{
			_id: '4',
			title: 'title4',
		},
		{
			_id: '5',
			title: 'title5',
		},
	];
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [videoUrl, setVideoUrl] = useState('');
	const [studyTime, setStudyTime] = useState('');
	const [selectedCourse, setSelectedCourse] = useState('');
	const [userCourses, setUserCourses] = useState([]);
	const {token} = useAuth();

	useEffect(() => {
		const fetchData = async () => {
			try {
				setUserCourses(data);

				// if (token) {
				// 	const result = await GetUserCourses(token);
				// 	setData(result);
				// }
			} catch (error) {
				console.error('Error fetching courses:', error.message);
			}
		};

		fetchData();
	}, [token]);

	const handleCreateChapter = () => {
		// Implement chapter creation logic
		// You can use the provided state variables (title, description, videoUrl, studyTime, selectedCourse)
	};

	return (
		<SafeAreaView style={{flex: 1, backgroundColor: '#111313'}}>
			<ScrollView contentContainerStyle={Container}>
				<TitleContainer>
					<Title>Create Your Chapter</Title>
				</TitleContainer>
				<InputContainer>
					<Input
						placeholder="Chapter Title"
						autoCapitalize="none"
						value={title}
						onChangeText={(text) => setTitle(text)}
						placeholderTextColor="#808080"
					/>
					<Input
						placeholder="Chapter Description"
						autoCapitalize="none"
						value={description}
						onChangeText={(text) => setDescription(text)}
						placeholderTextColor="#808080"
						multiline
						numberOfLines={4}
					/>
					<Input
						placeholder="Video URL"
						value={videoUrl}
						onChangeText={(text) => setVideoUrl(text)}
						placeholderTextColor="#808080"
					/>
					<Input
						placeholder="Study Time (in minutes)"
						keyboardType="numeric"
						value={studyTime}
						onChangeText={(text) => setStudyTime(text)}
						placeholderTextColor="#808080"
					/>
					<DropdownContainer>
						<Text style={{color: '#fcf9ff'}}>Select Course:</Text>
						<Picker
							selectedValue={selectedCourse}
							onValueChange={(itemValue) => setSelectedCourse(itemValue)}
							style={{width: '100%', color: '#a0a0a0'}}
						>
							<Picker.Item label="Select a Course" value="" />
							{userCourses.map((course) => (
								<Picker.Item
									key={course._id}
									label={course.title}
									value={course._id}
								/>
							))}
						</Picker>
					</DropdownContainer>
				</InputContainer>
				<ButtonContainer>
					<CreateButton onPress={handleCreateChapter}>
						<CreateButtonText>Create Chapter</CreateButtonText>
					</CreateButton>
				</ButtonContainer>
			</ScrollView>
		</SafeAreaView>
	);
};

export default CreateChapterPage;
