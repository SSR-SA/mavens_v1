import { ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import searchData from "./searchData";
import {
  SearchArea,
  SearchBoxContainer,
  SearchBox,
  BackgroundContainer,
  TopicContainer,
  Topic,
} from "./searchContainer.styles";

const SearchContainer = () => {
  return (
    <SearchArea>
      <SearchBoxContainer>
        <SearchBox>
          <Ionicons name="search-outline" size={25} color={"#E19C97"} />
        </SearchBox>
        <BackgroundContainer>
          <Ionicons name="options-outline" size={20} color={"#E19C97"} />
        </BackgroundContainer>
      </SearchBoxContainer>
      <TopicContainer horizontal={true} showsHorizontalScrollIndicator={false}>
        {searchData.map(({ id, name }) => (
          <Topic key={id}>{name}</Topic>
        ))}
      </TopicContainer>
    </SearchArea>
  );
};

export default SearchContainer;
