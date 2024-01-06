import { CardBackground, Image, TextContainer, Title, Creator } from "./continueLearningCard";

const ContinueLearningnCard = ({ image, course, creator }) => {
  return (
    <CardBackground>
      <Image source={image} />
      <TextContainer>
        <Title>{course}</Title>
        <Creator>{creator}</Creator>
      </TextContainer>
    </CardBackground>
  );
};

export default ContinueLearningnCard;
