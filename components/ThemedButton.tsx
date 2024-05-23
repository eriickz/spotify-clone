import { Pressable, Text } from "react-native"
import globalStyles from "./globalStyles"

type ThemedButtonType = {
  title: string
}

const ThemedButton: React.FC<ThemedButtonType> = ({ title }) => {
 return (
    <Pressable style={globalStyles.themedButton}>
      <Text style={globalStyles.themedButtonText}>{title}</Text>
    </Pressable>
  )
}

export default ThemedButton
