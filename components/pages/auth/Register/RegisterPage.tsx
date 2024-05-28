import { Text, View } from "react-native";
import authStyles from "@/components/pages/auth/authStyles";
import SpotifyLogo from "@/components/SpotifyLogo";
import SupportText from "@/components/pages/auth/SupportText";
import AuthInput from "@/components/pages/auth/AuthInput";
import ThemedButton from "@/components/ThemedButton";
import AuthIcons from "@/components/pages/auth/AuthIcons";
import { Link } from "expo-router";
import AuthLayout from "@/components/pages/auth/AuthLayout";
import { useMediaQuery } from "react-responsive";
import getStyle from "./styles";

const RegisterPage = () => {
  const isSmallDevice = useMediaQuery({ maxDeviceHeight: "812" })
  const registerStyles = getStyle(isSmallDevice)
  
  return (
    <AuthLayout>
      <View style={[authStyles.logoContainer, registerStyles.logoContainer]}>
        <SpotifyLogo style={authStyles.formLogo} />
      </View>
      <View style={authStyles.formContainer}>
        <Text style={authStyles.formTitle}>Register</Text>
        <SupportText />
        <View style={authStyles.inputContainer}>
          <AuthInput placeholder="Full Name" />
          <AuthInput placeholder="Enter Email" />
          <AuthInput placeholder="Passsword" type="password" />
        </View>
        <Text style={authStyles.recoveryText}>Recovery Password</Text>
        <ThemedButton style={registerStyles.actionButton} title="Create Account" />
        <AuthIcons iconContainerStyle={registerStyles.iconContainer} />
        <Link style={authStyles.anchorLink} href="/auth/sign-in">
          <Text style={authStyles.anchor}>Do you have an account?
            <Text style={authStyles.anchorSpan}> Sign In</Text>
          </Text>
        </Link>
      </View>
    </AuthLayout>
  )
}

export default RegisterPage;