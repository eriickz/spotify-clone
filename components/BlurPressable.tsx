import { FC, ReactNode } from "react";
import { Pressable, Text, View, PressableStateCallbackType } from "react-native";
import SelectedGlow from "@/assets/images/selected-mode-glow.svg"
import getGlobalStyles from "./globalStyles";
import GLOBAL_CONSTANTS from "@/constants/constants";

interface BlurPressableProps {
  children: ReactNode
  showGlow?: boolean,
  title: string
}

const BlurPressable: FC<BlurPressableProps> = ({ children, showGlow, title }) => {
  const styles = getGlobalStyles()

  const pressableStyles = ({ pressed }: PressableStateCallbackType) => [
    { opacity: pressed ? GLOBAL_CONSTANTS.BUTTON_PRESSED_OPACITY : 1 },
    styles.blurPressable,
  ]

  return (
    <View>
      <Pressable style={pressableStyles}>
        <View style={styles.blurPressableContainer}>
          {children}
        </View>
        {showGlow && (
          <SelectedGlow style={styles.selectedGlow} />
        )}
      </Pressable>
      <Text style={styles.blurPressableText}>{title}</Text>
    </View>
  )
}

export default BlurPressable
