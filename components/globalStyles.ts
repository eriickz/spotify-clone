import { StyleSheet } from "react-native";

export const COLORS: any = {
  PRIMARY: "#42C83C",
  TEXTGRAY: "#DADADA",
  AUTHBACKGROUND: "#1C1B1B"
}

const globalStyles = StyleSheet.create({
  themedButton: {
    width: "100%",
    height: 92,
    backgroundColor: COLORS.PRIMARY,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  themedButtonText: {
    fontFamily: "Satoshi-Bold",
    fontSize: 22,
    color: "#F6F6F6"
  },
  themedBlankButton: {
    width: "100%",
    height: 92,
    backgroundColor: "transparent",
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  blurPressable: ({ pressed }) => ({
    alignItems: "center",
    opacity: pressed ? 0.9 : 1
  }),
  blurPressableContainer: {
    maxWidth: 73,
    minHeight: 73,
    maxHeight: 73,
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    padding: 20,
    borderRadius: 100,
    marginBottom: 20,
    overflow: "hidden"
  },
  selectedGlow: {
    position: "absolute",
    zIndex: -1,
    top: 50,
  },
  blurPressableText: {
    color: COLORS.TEXTGRAY,
    fontFamily: "Satoshi-Medium",
    fontSize: 18
  }
})

export default globalStyles
