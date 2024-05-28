import authStyles from "./authStyles";
import { Text } from "react-native";

const SupportText = () => {
  return (
    <Text style={authStyles.supportText}>If you need any support
      <Text style={authStyles.supportSpan}> click here</Text>
    </Text>
  )
}

export default SupportText;