import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { SafeAreaProvider } from "react-native-safe-area-context";

import React, { useState, useEffect } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthProvider } from "./context/authContext";
import LoginPage from "./routes/login/login.component.jsx";
import MainScreen from "./routes/main/main.component.jsx"; // Assuming this is the main content of your app
import SignUpPage from "./routes/signUp/signUp.component.jsx";

const Stack = createStackNavigator();

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    checkLoginStatus();
  }, []);

  const checkLoginStatus = async () => {
    // Check if the user is already logged in by retrieving the token from AsyncStorage
    const userToken = await AsyncStorage.getItem("userToken");

    if (userToken) {
      // If a token is found, set isLoggedIn to true
      setIsLoggedIn(true);
    }
  };

  if (!isLoggedIn) {
    return (
      <GestureHandlerRootView style={{ flex: 1 }}>
        <SafeAreaProvider>
          <AuthProvider>
            <NavigationContainer>
              {/* <StatusBar backgroundColor="#111313" barStyle="light-content" /> */}
              <Stack.Navigator
                initialRouteName="Login"
                screenOptions={{
                  headerShown: false,
                }}
              >
                <Stack.Screen name="Login" component={LoginPage} />
                <Stack.Screen name="SignUp" component={SignUpPage} />
                <Stack.Screen name="Main" component={MainScreen} />
                {/* <Stack.Screen name="ForgetPassword" component={ForgotPasswordPage} />
              <Stack.Screen name="ResetPassword" component={ResetPasswordPage} />
              <Stack.Screen name="ProfileMenu" component={ProfileMenuPage} /> */}
              </Stack.Navigator>
            </NavigationContainer>
          </AuthProvider>
        </SafeAreaProvider>
      </GestureHandlerRootView>
    );
  }

  // If logged in, show the main app content
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <AuthProvider>
          <NavigationContainer>
            <Stack.Navigator
              initialRouteName="Main"
              screenOptions={{
                headerShown: false,
              }}
            >
              <Stack.Screen name="Login" component={LoginPage} />
              <Stack.Screen name="SignUp" component={SignUpPage} />
              <Stack.Screen name="Main" component={MainScreen} />
              {/* <Stack.Screen name="ForgetPassword" component={ForgotPasswordPage} />
              <Stack.Screen name="ResetPassword" component={ResetPasswordPage} />
              <Stack.Screen name="ProfileMenu" component={ProfileMenuPage} /> */}
            </Stack.Navigator>
          </NavigationContainer>
        </AuthProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
};

export default App;
