import React, { useState, useEffect } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import AsyncStorage from "@react-native-async-storage/async-storage";
import LoginPage from "./routes/login/login.component.jsx";
import HomeScreen from "./routes/home/home.component.jsx"; // Assuming this is the main content of your app

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

  const handleLogin = async (email, password) => {
    try {
      // Your actual login logic here
      const response = await login({ email, password });

      if (response && response.token) {
        // Store the token securely using AsyncStorage
        await AsyncStorage.setItem("userToken", response.token);

        // Set the isLoggedIn state to true
        setIsLoggedIn(true);
      } else {
        alert("Login failed. Please check your credentials.");
      }
    } catch (error) {
      console.error("Login error:", error.message);
      alert("An error occurred during login. Please try again.");
    }
  };

  const handleLogout = async () => {
    // Clear the stored token when the user logs out
    await AsyncStorage.removeItem("userToken");
    setIsLoggedIn(false);
  };

  if (!isLoggedIn) {
    return <LoginPage handleLogin={handleLogin} />;
  }

  // If logged in, show the main app content
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <HomeScreen handleLogout={handleLogout} />
    </GestureHandlerRootView>
  );
};

export default App;
