import { ReactNode } from "react";
import { ScrollView, View } from "react-native";
import appStyles from "@/components/pages/app/appStyles";
import AppHeader from "./components/AppHeader";
import Promo from "./components/Promo"

const AppLayout = ({ children }: { children: ReactNode }) => {
  return (
    <ScrollView style={appStyles.layout}>
      <AppHeader />
      <Promo />
      {children}
    </ScrollView>
  )
}

export default AppLayout