import { StyleSheet, Text, View } from "react-native";
import "./chat.styles";

const ChatPage = () => {
  return (
    <View style={styles.container}>
      <Text>ChatPage</Text>
    </View>
  );
};

export default ChatPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
