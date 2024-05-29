//@ts-nocheck
import { ReactNode, FC } from "react"
import ChevronLeft from "@/assets/images/icon/chevron-left.svg"
import authStyles from "./authStyles"
import ThemedButton from "@/components/ThemedButton";
import { useRouter } from "expo-router";
import { View } from "react-native";

const AuthLayout: FC<{ children: ReactNode }> = ({ children }) => {
  const router = useRouter()
  
  return (
    <View style={authStyles.layout}>
      <ThemedButton style={authStyles.backBtn} onPress={router.back}>
        <ChevronLeft />
      </ThemedButton>
      {children}
    </View>
  )
}

export default AuthLayout
