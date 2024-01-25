import {StyleSheet, Text, View} from 'react-native';
import './createChapter.styles';

const CreateChapterPage = () => {
	return (
		<View style={styles.container}>
			<Text>CreateChapterPage</Text>
		</View>
	);
};

export default CreateChapterPage;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
