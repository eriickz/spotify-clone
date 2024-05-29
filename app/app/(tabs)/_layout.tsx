import { Tabs } from "expo-router";
import { StyleSheet } from "react-native";
import { COLORS } from "@/constants/constants";
import TabBarIcon from "@/components/pages/app/components/TabBarIcon";

const Layout = () => {
  return (
    <Tabs screenOptions={{ headerShown: false, tabBarShowLabel: false }}>
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: props => <TabBarIcon {...props} type="home" />,
          tabBarStyle: styles.tabBar
        }}
      />
      <Tabs.Screen
        name="artist"
        options={{
          tabBarIcon: props => <TabBarIcon {...props} type="discovery" />,
          tabBarStyle: styles.tabBar
        }}
      />
      <Tabs.Screen
        name="playlists"
        options={{
          tabBarIcon: props => <TabBarIcon {...props} type="heart" />,
          tabBarStyle: styles.tabBar
        }}
      />
      <Tabs.Screen
        name="player"
        options={{
          tabBarIcon: props => <TabBarIcon {...props} type="profile" />,
          tabBarStyle: styles.tabBar
        }}
      />
    </Tabs>
  )
}

const styles = StyleSheet.create({
  tabBar: {
    height: 80,
    backgroundColor: COLORS.APP_TAB_BAR_BACKGROUND,
    justifyContent: "flex-start",
    borderTopWidth: 0,
  }
})

export default Layout;