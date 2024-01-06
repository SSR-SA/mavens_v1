import ContinueLearningCardContainerData from "./ContinueLearningCardContainerData";
import ContinueLearningnCard from "../continueLearningCard/continueLearningCard.component";
import {
  ContinueLearningSectionContainer,
  Header,
  Title,
  SeeAll,
  ContinueLearningCardContainer,
} from "./continueLearningSection.styles";

const ContinueLearningSection = () => {
  return (
    <ContinueLearningSectionContainer>
      <Header>
        <Title>Continue Learning</Title>
        <SeeAll>See All</SeeAll>
      </Header>
      <ContinueLearningCardContainer>
        {ContinueLearningCardContainerData.map((item) => (
          <ContinueLearningnCard
            key={item.id}
            image={item.image}
            course={item.course}
            creator={item.creator}
          />
        ))}
      </ContinueLearningCardContainer>
    </ContinueLearningSectionContainer>
  );
};

export default ContinueLearningSection;
