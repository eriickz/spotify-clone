import SpotifyLogo from "@/components/SpotifyLogo"
import { View, ImageBackground, Text } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import ThemedButton from "@/components/ThemedButton"
import styles from "./styles"

const GetStartedPage = () => {
  return (
    <View style={styles.containers}>
      <ImageBackground style={styles.containers} resizeMode="cover" source={require("@/assets/images/getstarted.png")}>
        <SafeAreaView style={styles.content}>
          <SpotifyLogo />
          <View style={styles.bottomContent}>
            <Text style={styles.leading}>Enjoy Listening To Music</Text>
            <Text style={styles.paragraph}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sagittis enim purus sed phasellus. Cursus ornare id scelerisque aliquam.
            </Text>
            <ThemedButton title="Get Started" /> 
          </View>
        </SafeAreaView>
      </ImageBackground>
    </View>
  )
}

export default GetStartedPage
