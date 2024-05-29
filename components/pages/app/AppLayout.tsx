import { ReactNode } from "react";
import { View } from "react-native";
import appStyles from "@/components/pages/app/appStyles";
import AppHeader from "./components/AppHeader";
import Promo from "./components/Promo"

const AppLayout = ({ children }: { children: ReactNode }) => {
  return (
    <View style={appStyles.layout}>
      <AppHeader />
      <Promo />
      {children}
    </View>
  )
}

export default AppLayout