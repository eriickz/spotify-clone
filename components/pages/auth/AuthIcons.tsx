import authStyles from "./authStyles";
import { LinearGradient } from "expo-linear-gradient";
import { COLORS } from "@/constants/constants";
import { Text, View, ViewStyle } from "react-native";
import ThemedButton from "@/components/ThemedButton";
import GoogleIcon from "@/assets/images/icon/google.svg";
import AppleIcon from "@/assets/images/icon/apple.svg";
import { FC } from "react";

interface AuthIconsProps {
  iconContainerStyle?: ViewStyle
}

const AuthIcons: FC<AuthIconsProps> = ({ iconContainerStyle }) => {
  return (
    <>
      <View style={authStyles.separatorsContainer}>
        <LinearGradient
          style={authStyles.gradientLeft}
          colors={[COLORS.AUTH_LINEAR_GRADIENT0, COLORS.AUTH_LINEAR_GRADIENT100]}
          start={[0, 1]}
        />
        <Text style={authStyles.separatorText}>Or</Text>
        <LinearGradient
          style={authStyles.gradientLeft}
          colors={[COLORS.AUTH_LINEAR_GRADIENT100, COLORS.AUTH_LINEAR_GRADIENT0]}
          start={[0.4, 0]}
          end={[1.2, 0]}
        />
      </View>
      <View style={[authStyles.iconContainer, iconContainerStyle]}>
        <ThemedButton style={authStyles.iconButton} type="icon">
          <GoogleIcon style={authStyles.icon} />
        </ThemedButton>
        <ThemedButton style={authStyles.iconButton} type="icon">
          <AppleIcon style={authStyles.icon} />
        </ThemedButton>
      </View>
    </>
  )
}

export default AuthIcons