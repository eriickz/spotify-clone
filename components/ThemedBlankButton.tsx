import { Pressable, Text, PressableProps } from "react-native"
import globalStyles from "./globalStyles"

interface ThemedBlankButtonProps extends PressableProps {
  title: string,
}

const ThemedBlankButton: React.FC<ThemedBlankButtonProps> = ({ style, title, onPress }) => {
  return (
    <Pressable style={[globalStyles.themedBlankButton, style]} onPress={onPress}>
      <Text style={globalStyles.themedButtonText}>{title}</Text>
    </Pressable>
  )
}

export default ThemedBlankButton 
