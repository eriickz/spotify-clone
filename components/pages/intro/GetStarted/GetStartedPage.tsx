import SpotifyLogo from "@/components/SpotifyLogo"
import { View, ImageBackground, Text } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import ThemedButton from "@/components/ThemedButton"
import styles from "./styles"
import introStyles from "../introStyles"
import { router } from "expo-router"

const GetStartedPage = () => {
  return (
    <View style={introStyles.startedModeContainers}>
      <ImageBackground style={introStyles.startedModeContainers} resizeMode="cover" source={require("@/assets/images/get-started.png")}>
        <SafeAreaView style={introStyles.startedModeContent} edges={["right"]}>
          <SpotifyLogo />
          <View style={introStyles.startedModeBottomContent}>
            <Text style={introStyles.startedModeLeadingText}>Enjoy Listening To Music</Text>
            <Text style={styles.paragraph}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sagittis enim purus sed phasellus. Cursus ornare id scelerisque aliquam.
            </Text>
            <ThemedButton title="Get Started" onPress={() => router.navigate("choose-mode")} /> 
          </View>
        </SafeAreaView>
      </ImageBackground>
    </View>
  )
}

export default GetStartedPage
