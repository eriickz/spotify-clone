//@ts-nocheck
import { SafeAreaView } from "react-native-safe-area-context"
import { ReactNode, FC } from "react"
import ChevronLeft from "@/assets/images/icon/chevron-left.svg"
import authStyles from "./authStyles"
import ThemedButton from "@/components/ThemedButton";
import { useRouter } from "expo-router";

const AuthLayout: FC<{ children: ReactNode }> = ({ children }) => {
  const router = useRouter()
  
  return (
    <SafeAreaView style={authStyles.layout}>
      <ThemedButton style={authStyles.backBtn} onPress={router.back}>
        <ChevronLeft />
      </ThemedButton>
      {children}
    </SafeAreaView>
  )
}

export default AuthLayout
