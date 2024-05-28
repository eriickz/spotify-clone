//@ts-nocheck
import { Pressable, Text, PressableProps, PressableStateCallbackType } from "react-native"
import { BUTTON_PRESSED_OPACITY } from "@/constants/constants"
import getGlobalStyles from "./globalStyles"
import { FC } from "react"

interface ThemedButtonType extends PressableProps {
  title?: string,
  type?: ButtonTypeOpts 
}

const ThemedButton: FC<ThemedButtonType> = ({ title, onPress, style, type = "primary", children }) => {
  const styles = getGlobalStyles({ buttonType: type })

  const pressableStyles = ({ pressed }: PressableStateCallbackType) => [
    { opacity: pressed ? BUTTON_PRESSED_OPACITY : 1 },
    styles.themedButton,
    style
  ]

  return (
    <Pressable 
      style={pressableStyles}
      onPress={onPress}
    >
      {title && <Text style={styles.themedButtonText}>{title}</Text>}
      {children && children}
    </Pressable>
  )
}

export default ThemedButton
