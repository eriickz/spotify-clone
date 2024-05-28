import AuthLayout from "@/components/pages/auth/AuthLayout";
import SpotifyLogo from "@/components/SpotifyLogo";
import { Text, View } from "react-native";
import authStyles from "@/components/pages/auth/authStyles";
import ThemedButton from "@/components/ThemedButton";
import AuthIcons from "@/components/pages/auth/AuthIcons";
import AuthInput from "@/components/pages/auth/AuthInput";
import SupportText from "@/components/pages/auth/SupportText";
import { Link } from "expo-router";

const SignInPage = () => {
  return (
    <AuthLayout>
      <View style={authStyles.logoContainer}>
        <SpotifyLogo style={authStyles.formLogo} />
      </View>
      <View style={authStyles.formContainer}>
        <Text style={authStyles.formTitle}>Sign In</Text>
        <SupportText />
        <View style={authStyles.inputContainer}>
          <AuthInput placeholder="Enter user or email" />
          <AuthInput placeholder="Passsword" type="password" />
        </View>
        <Text style={authStyles.recoveryText}>Recovery Password</Text>
        <ThemedButton title="Sign In" />
        <AuthIcons />
        <Link style={authStyles.anchorLink} href="/auth/register">
          <Text style={authStyles.anchor}>Not a member?
            <Text style={authStyles.anchorSpan}> register now</Text>
          </Text>
        </Link>
      </View>
    </AuthLayout>
  )
}

export default SignInPage;