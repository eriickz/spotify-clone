//@ts-nocheck
import { Pressable, Text, PressableProps, PressableStateCallbackType } from "react-native"
import GLOBAL_CONSTANTS from "@/constants/constants"
import getGlobalStyles from "./globalStyles"

interface ThemedButtonType extends PressableProps {
  title: string,
  type?: ButtonTypeOpts 
}

const ThemedButton: React.FC<ThemedButtonType> = ({ title, onPress, style, type = "primary" }) => {
  const styles = getGlobalStyles({ buttonType: type })

  const pressableStyles = ({ pressed }: PressableStateCallbackType) => [
    { opacity: pressed ? GLOBAL_CONSTANTS.BUTTON_PRESSED_OPACITY : 1 },
    styles.themedButton,
    style
  ]

  return (
    <Pressable 
      style={pressableStyles}
      onPress={onPress}
    >
      <Text style={styles.themedButtonText}>{title}</Text>
    </Pressable>
  )
}

export default ThemedButton
