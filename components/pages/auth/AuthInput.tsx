import authStyles from "@/components/pages/auth/authStyles";
import { COLORS } from "@/constants/constants";
import { TextInput, TextInputProps, View } from "react-native";
import { FC, useState } from "react";
import Show from "@/assets/images/icon/show.svg"
import Hide from "@/assets/images/icon/hide.svg"
import ThemedButton from "@/components/ThemedButton";

interface AuthInputProps extends TextInputProps {
  type?: "password" | "text"
}

const AuthInput: FC<AuthInputProps> = ({ type = "text", ...props}) => {
  const [show, setShow] = useState(false)
  
  const displayIcon = () => {
    if (type !== "password") {
      return null
    }
    
    return (
      <ThemedButton style={authStyles.passwordInputIcon} type="icon" onPress={() => setShow(!show)}>
        {show
          ? <Hide />
          : <Show />
        }
      </ThemedButton>
    )
  }
  
  return (
    <View style={{ width: "100%", justifyContent: "center" }}>
      <TextInput
        style={authStyles.input}
        placeholderTextColor={COLORS.AUTH_FORM_INPUT_PLACEHOLDER}
        autoCapitalize="none"
        secureTextEntry={show}
        {...props}
      />
      {displayIcon()}
    </View>
  )
}

export default AuthInput;