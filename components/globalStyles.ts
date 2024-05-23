import { StyleSheet } from "react-native";

export const COLORS = {
  primary: "#42C83C",
}

const globalStyles = StyleSheet.create({
  themedButton: {
    width: 329,
    height: 92,
    backgroundColor: COLORS.primary,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center"
  },
  themedButtonText: {
    fontFamily: "Satoshi-Bold",
    fontSize: 22,
    color: "#F6F6F6"
  }
})

export default globalStyles
