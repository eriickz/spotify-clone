import { useEffect, useState } from "react";
import { Platform } from "react-native";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import * as NavigationBar from "expo-navigation-bar"
import * as SystemUI from "expo-system-ui"
import { SafeAreaProvider } from "react-native-safe-area-context";

SystemUI.setBackgroundColorAsync("black"); //Prevent white flickering on navigation
SplashScreen.preventAutoHideAsync()

if (Platform.OS === "android") {
  NavigationBar.setVisibilityAsync("hidden")
}

export default function RootLayout() {
  const [_, setReady] = useState(false)

  const [fontsLoaded, fontError] = useFonts({
    "Satoshi-Regular": require('../assets/fonts/Satoshi-Regular.otf'),
    "Satoshi-Medium": require('../assets/fonts/Satoshi-Medium.otf'),
    "Satoshi-Bold": require('../assets/fonts/Satoshi-Bold.otf'),
  });

  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hideAsync();
      setReady(true);
    }, 1000);
  }, [])

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <>
        {fontsLoaded && (
          <Stack screenOptions={{ 
            headerShown: false,
            animation: "fade",
          }}>
            <Stack.Screen name="index" />
          </Stack>
        )}
        <StatusBar hidden={true} />
      </>
    </SafeAreaProvider>
  );
}
