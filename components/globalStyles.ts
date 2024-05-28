import { StyleSheet } from "react-native";
import { COLORS } from "@/constants/constants";

const getGlobalStyles = ({ buttonType, pressed }: GlobalStyleArgs = {}) => StyleSheet.create({
  themedButton: {
    width: "100%",
    height: 92,
    backgroundColor: COLORS[buttonType?.toUpperCase() as "PRIMARY"],
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  themedButtonText: {
    fontFamily: "Satoshi-Bold",
    fontSize: 22,
    color: "#F6F6F6"
  },
  blurPressable: {
    alignItems: "center",
    opacity: pressed ? 0.9 : 1,
    backgroundColor: "transparent"
  },
  blurPressableContainer: {
    maxWidth: 73,
    minHeight: 73,
    maxHeight: 73,
    backgroundColor: "rgba(0, 0, 0, 0.70)",
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
    color: COLORS.TEXT_GRAY,
    fontFamily: "Satoshi-Medium",
    fontSize: 18
  }
})

export default getGlobalStyles
