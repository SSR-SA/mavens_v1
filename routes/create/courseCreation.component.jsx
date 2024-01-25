// CourseCreationPage.jsx
import React, {useState} from 'react';
import {
	SafeAreaView,
	ScrollView,
	Image,
	Text,
	TouchableOpacity,
} from 'react-native';
import ImagePicker from 'react-native-image-picker';

import {
	Container,
	TitleContainer,
	MLogo,
	Title,
	InputContainer,
	Input,
	ButtonContainer,
	CreateButton,
	CreateButtonText,
} from './courseCreation.styles';

const CourseCreationPage = () => {
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [image, setImage] = useState(null); // Store the selected image URI
	const [price, setPrice] = useState('');

	const handleCreateCourse = async () => {
		try {
			if (!title || !description || !image || !price) {
				alert('Please fill all fields');
				return;
			}
			// const response = await createCourse({
			// 	title,
			// 	description,
			// 	image,
			// 	price: parseFloat(price),
			// });
			// if (response) {
			// 	alert('Course created successfully!');
			// 	// You can add navigation logic here if needed
			// } else {
			// 	alert('Failed to create course. Please try again.');
			// }
		} catch (error) {
			console.error('Course creation error:', error.message);
			alert('An error occurred during course creation. Please try again.');
		}
	};

	const pickImage = async () => {
		try {
			const result = await ImagePicker.launchImageLibrary({mediaType: 'photo'});

			if (!result.cancelled) {
				setImage(result.uri);
			}
		} catch (error) {
			console.error('Image picking error:', error.message);
			alert('An error occurred while picking an image. Please try again.');
		}
	};

	return (
		<SafeAreaView style={{flex: 1, backgroundColor: '#111313'}}>
			<ScrollView contentContainerStyle={Container}>
				<TitleContainer>
					<MLogo source={require('../../assets/MLogo/MLogo.svg')} />
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
					<TouchableOpacity onPress={pickImage}>
						<Text style={{color: '#ffffff', marginBottom: 10}}>
							Pick an Image
						</Text>
					</TouchableOpacity>
					{image && (
						<Image
							source={{uri: image}}
							style={{width: 200, height: 200, marginBottom: 10}}
						/>
					)}
					<Input
						placeholder="Price"
						keyboardType="numeric"
						value={price}
						onChangeText={(text) => setPrice(text)}
						placeholderTextColor="#808080"
					/>
				</InputContainer>
				<ButtonContainer>
					<CreateButton onPress={handleCreateCourse}>
						<CreateButtonText>Create Course</CreateButtonText>
					</CreateButton>
				</ButtonContainer>
			</ScrollView>
		</SafeAreaView>
	);
};

export default CourseCreationPage;
