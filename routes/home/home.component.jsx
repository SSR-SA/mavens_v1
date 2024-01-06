import Header from "../../components/header/header.component";
import CurrentLearningCard from "../../components/continueLearningSection/continueLearningSection.component";
import SearchContainer from "../../components/searchContainer/searchContainer.component";
import OffersForYouSection from "../../components/offersForYouSection/offersForYouSection.component";
import { ScrollView } from "react-native-gesture-handler";
import { Container } from "../../app.styles";
import { SafeAreaView } from "react-native-safe-area-context";

const HomePage = () => {
  return (
    <Container>
      <SafeAreaView>
        <ScrollView style={{ height: "100%" }}>
          <Header />
          <SearchContainer />
          <CurrentLearningCard />
          <OffersForYouSection />
        </ScrollView>
      </SafeAreaView>
    </Container>
  );
};

export default HomePage;
