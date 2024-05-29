import { View } from "react-native";
import { FC } from "react";
import appStyles from "@/components/pages/app/appStyles";
import { TabBarIconProps } from "@/components/pages/app/types";
import TabBarIconRenderer from "@/components/pages/app/components/TabBarIconRenderer";

const TabBarIcon: FC<TabBarIconProps> = ({ focused, type }) => {
  return (
    <View style={appStyles.tabBarIconContainer}>
      {focused && <View style={appStyles.tabBarSelectedSegment} />}
      <TabBarIconRenderer focused={focused} type={type} />
    </View>
  )
}

export default TabBarIcon