// CourseCreationPage.jsx
import React, {useState} from 'react';
import {
	SafeAreaView,
	ScrollView,
	Image,
	Text,
	TouchableOpacity,
} from 'react-native';
import * as DocumentPicker from 'expo-document-picker';
import Ionicons from '@expo/vector-icons/Ionicons';

import {
	Container,
	TitleContainer,
	MLogo,
	Title,
	InputContainer,
	Input,
	ButtonContainer,
	CreateButton,
	CustomButton,
	CreateButtonText,
	CreateChapter,
	CreateChapterText,
} from './courseCreation.styles';
import {useAuth} from '../../context/authContext';
import {createCourse} from '../../requests/courses';

const CourseCreationPage = ({navigation}) => {
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [image, setImage] = useState(null);
	const [price, setPrice] = useState('');
	const [category, setCategory] = useState('');
	const {token} = useAuth();

	const handleCreateCourse = async () => {
		try {
			if (!title || !description || !image || !price || !image) {
				alert('Please fill all fields');
				return;
			}
			const formData = new FormData();
			formData.append('file', image);
			formData.append('title', title);
			formData.append('description', description);
			formData.append('price', price);
			formData.append('category', category);
			const response = await createCourse(token, formData);
			if (response) {
				setTitle('');
				setPrice('');
				setCategory('');
				setImage(null);
				alert('Course created successfully!');
			} else {
				alert('Failed to create course. Please try again.');
			}
		} catch (error) {
			console.error('Course creation error:', error.message);
			alert('An error occurred during course creation. Please try again.');
		}
	};

	const pickImage = async () => {
		try {
			const result = await DocumentPicker.getDocumentAsync();
			if (result.canceled == false) {
				setImage(result.assets[0]);
			} else {
				console.log('Document picking cancelled.');
			}
		} catch (error) {
			console.error('Error picking document:', error);
		}
	};

	return (
		<SafeAreaView style={{flex: 1, backgroundColor: '#111313'}}>
			<ScrollView contentContainerStyle={Container}>
				<TitleContainer>
					<Title>Create Your Course</Title>
				</TitleContainer>
				<InputContainer>
					<Input
						placeholder="Course Title"
						autoCapitalize="none"
						value={title}
						onChangeText={(text) => setTitle(text)}
						placeholderTextColor="#808080"
					/>
					<Input
						placeholder="Course Description"
						autoCapitalize="none"
						value={description}
						onChangeText={(text) => setDescription(text)}
						placeholderTextColor="#808080"
						multiline
						numberOfLines={4}
					/>
					<Input
						placeholder="Category"
						value={category}
						onChangeText={(text) => setCategory(text)}
						placeholderTextColor="#808080"
					/>
					<Input
						placeholder="Price"
						keyboardType="numeric"
						value={price}
						onChangeText={(text) => setPrice(text)}
						placeholderTextColor="#808080"
					/>
					<CustomButton onPress={pickImage}>
						<Ionicons
							name="image"
							size={24}
							color="#ffffff"
							style={{marginRight: 10}}
						/>
						<Text style={{color: '#ffffff'}}>Pick an Image</Text>
					</CustomButton>
					{image && (
						<Image
							source={{uri: image.uri}}
							style={{width: 200, height: 200, marginBottom: 10}}
						/>
					)}
				</InputContainer>
				<ButtonContainer>
					<CreateButton onPress={handleCreateCourse}>
						<CreateButtonText>Create Course</CreateButtonText>
					</CreateButton>
					<CreateChapter
						onPress={() => {
							navigation.navigate('CreateChapter');
						}}
					>
						<CreateChapterText>Create Chapter for a course</CreateChapterText>
					</CreateChapter>
				</ButtonContainer>
			</ScrollView>
		</SafeAreaView>
	);
};

export default CourseCreationPage;
