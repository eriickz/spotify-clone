import { Text, View, Image } from "react-native"
import AuthLayout from "../AuthLayout"
import SpotifyLogo from "@/components/SpotifyLogo"
import getStyles from "./styles"
import ThemedButton from "@/components/ThemedButton"
import { useMediaQuery } from "react-responsive"
import RadialTop from "@/assets/images/radial-top.svg"
import RadialBottom from "@/assets/images/radial-bottom.svg"
import { useRouter } from "expo-router";

const AuthIndexPage = () => {
  const isSmallDevice = useMediaQuery({ maxDeviceHeight: "812" })
  const styles = getStyles(isSmallDevice)
  const router = useRouter()
  
  return (
    <AuthLayout>
      <RadialTop style={[styles.radial, styles.radialTop]} />
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
          <ThemedButton
            style={styles.button}
            title="Sign In"
            type="transparent"
            onPress={() => router.navigate("/auth/sign-in")}
          />
        </View>
      </View>
      <RadialBottom style={[styles.radial, styles.radialBottom]} />
      <Image style={styles.cornerImg} source={require("@/assets/images/auth-index-corner-img.png")} />
    </AuthLayout>
  )
}

export default AuthIndexPage
