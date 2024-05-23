import { Pressable, Text, PressableProps } from "react-native"
import globalStyles from "./globalStyles"

interface ThemedButtonType extends PressableProps {
  title: string,
}

const ThemedButton: React.FC<ThemedButtonType> = ({ title, onPress, style }) => {
 return (
    <Pressable style={[globalStyles.themedButton, style]} onPress={onPress}>
      <Text style={globalStyles.themedButtonText}>{title}</Text>
    </Pressable>
  )
}

export default ThemedButton
