import {
  CardBackground,
  Image,
  TextContainer,
  Title,
  Creator,
  ButtonContainer,
} from "./continueLearningCard";

const ContinueLearningnCard = ({ id, image, course, creator, navigation }) => {
  return (
    <CardBackground
      onPress={() => {
        navigation.navigate("CourseDescriptionPage", { id });
      }}
    >
      <Image source={{ uri: `${process.env.BASE_URL}/uploads/${image}` }} />
      <TextContainer>
        <Title>{course}</Title>
        <Creator>{creator}</Creator>
      </TextContainer>
    </CardBackground>
  );
};

export default ContinueLearningnCard;
