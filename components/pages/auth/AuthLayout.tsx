//@ts-nocheck
import { SafeAreaView } from "react-native-safe-area-context"
import { ReactNode, FC } from "react"
import { Pressable } from "react-native"
import ChevronLeft from "@/assets/images/icon/chevron-left.svg"
import authStyles from "./authStyles"

const AuthLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <SafeAreaView style={authStyles.layout}>
      <Pressable style={evt => authStyles.backBtn(evt)}>
        <ChevronLeft />
      </Pressable> 
      {children}
    </SafeAreaView>
  )
}

export default AuthLayout
