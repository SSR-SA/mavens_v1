import { Ionicons } from "@expo/vector-icons";
import {
  TitleBar,
  TitleBarLeft,
  BackgroundContainer,
  Avatar,
  TitleContainer,
  Title,
  Name,
} from "./header.styles";

const Header = () => {
  return (
    <TitleBar>
      <TitleBarLeft>
        <BackgroundContainer>
          <Avatar source={require("../../assets/faces/avicii.jpeg")} />
        </BackgroundContainer>
        <TitleContainer>
          <Title>Welcome back,</Title>
          <Name>Louis Lardeux</Name>
        </TitleContainer>
      </TitleBarLeft>
      <BackgroundContainer>
        <Ionicons name="notifications-outline" size={20} color={"#E19C97"} />
      </BackgroundContainer>
    </TitleBar>
  );
};

export default Header;
