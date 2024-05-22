import { StyleSheet, Appearance } from "react-native";

const colorScheme = Appearance.getColorScheme()

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colorScheme === "light" ? "#fff" : "#0D0C0C",
  }
})
