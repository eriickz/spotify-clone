import SpotifyLogo from "@/components/SpotifyLogo"
import { View, ImageBackground, Text } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import ThemedButton from "@/components/ThemedButton"
import Moon from "@/assets/images/icon/moon.svg"
import Sun from "@/assets/images/icon/sun.svg"
import styles from "./styles"
import introStyles from "../introStyles"
import BlurPressable from "@/components/BlurPressable"
import { router } from "expo-router"

const ChooseModePage = () => {
  return (
    <View style={introStyles.startedModeContainers}>
      <ImageBackground style={[introStyles.startedModeContainers, styles.backgroundContainer]} resizeMode="cover" source={require("@/assets/images/choose-theme.png")}>
        <SafeAreaView style={introStyles.startedModeContent} edges={["left", "right"]}>
          <SpotifyLogo />
          <View style={introStyles.startedModeBottomContent}>
            <Text style={[introStyles.startedModeLeadingText, styles.leading]}>Choose Mode</Text>
            <View style={styles.iconsContainer}>
              <BlurPressable title="Dark Mode" showGlow>
                <Moon />
              </BlurPressable>
              <BlurPressable title="Light Mode">
                <Sun />
              </BlurPressable>
            </View>
            <ThemedButton title="Continue" onPress={() => router.replace("/auth")} /> 
          </View>
        </SafeAreaView>
      </ImageBackground>
    </View>
  )
}

export default ChooseModePage 
