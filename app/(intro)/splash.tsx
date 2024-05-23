import { useEffect } from "react";
import { router } from "expo-router";
import { View } from "react-native";
import { StyleSheet, Appearance } from "react-native";
import Animated, { BounceIn } from "react-native-reanimated";
import SpotifyLogo from "@/components/SpotifyLogo";

const colorScheme = Appearance.getColorScheme()

const Splash = () => {
  useEffect(() => {
    setTimeout(() => {
      router.replace("get-started")
    }, 2500)
  }, [])

  return (
    <View style={styles.container}>
      <Animated.View
        key="splash"
        entering={BounceIn.duration(1000)}
      >
        <SpotifyLogo />
      </Animated.View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colorScheme === "light" ? "#fff" : "#0D0C0C",
  },
})

export default Splash 
