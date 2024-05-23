import { Text, View, Image, ImageBackground } from "react-native"
import AuthLayout from "../AuthLayout"
import SpotifyLogo from "@/components/SpotifyLogo"
import getStyles from "./styles"
import ThemedButton from "@/components/ThemedButton"
import ThemedBlankButton from "@/components/ThemedBlankButton"

const AuthIndexPage = () => {
  const styles = getStyles()

  return (
    <>
      <AuthLayout>
        <View style={styles.section}>
          <SpotifyLogo style={styles.logo} />
          <View style={styles.content}>
            <Text style={styles.leading}>Enjoy Listening To Music</Text>
            <Text style={styles.paragraph}>
              Spotify is a proprietary Swedish audio streaming and media services provider 
            </Text>
          </View>
          <View style={styles.buttonsContainer}>
            <ThemedButton style={styles.button} title="Register" />
            <ThemedBlankButton style={[{ backgroundColor: "transparent" }, styles.button]} title="Sign In" />
          </View>
        </View> 
        <Image style={styles.cornerImg} source={require("@/assets/images/auth-index-corner-img.png")} />
      </AuthLayout>
    </>
  )
}

export default AuthIndexPage
