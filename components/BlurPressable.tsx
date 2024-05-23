import { ReactNode } from "react";
import { Pressable, PressableProps, Text, View } from "react-native";
import { BlurView } from "expo-blur";
import SelectedGlow from "@/assets/images/selected-mode-glow.svg"
import globalStyles from "./globalStyles";

interface BlurPressableProps extends PressableProps {
  children: ReactNode,
  showGlow?: boolean,
  title: string
}

const BlurPressable: React.FC<BlurPressableProps> = ({ children, showGlow, title }) => {
  return (
    <View>
      <Pressable style={evt => globalStyles.blurPressable(evt)}>
        <BlurView intensity={87} tint="dark" experimentalBlurMethod="dimezisBlurView" style={globalStyles.blurPressableContainer}>
          {children}
        </BlurView>
        {showGlow && (
          <SelectedGlow style={globalStyles.selectedGlow} />
        )}
      </Pressable>
      <Text style={globalStyles.blurPressableText}>{title}</Text>
    </View>
  )
}

export default BlurPressable
