import { StyleSheet } from "react-native"

const textColor = "#DADADA"

export default StyleSheet.create({
  backgroundContainer: {
    backgroundColor: "#F2F2F2"
  },
  leading: {
    marginBottom: 30,
    fontSize: 22,
    color: textColor
  },
  iconsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 70,
    alignItems: "center",
    marginBottom: 68
  },
})
