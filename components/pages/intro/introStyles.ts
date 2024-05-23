import { StyleSheet } from "react-native";

export default StyleSheet.create({
  startedModeContainers: {
    flex: 1,
    backgroundColor: "#000"
  },
  startedModeContent: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    paddingTop: 37,
    paddingBottom: 69,
    paddingHorizontal: 30,
  },
  startedModeBottomContent: {
    width: "100%",
    alignItems: "center",
  },
  startedModeLeadingText: {
    fontFamily: "Satoshi-Bold",
    fontSize: 25,
    color: "#DADADA",
    marginBottom: 20,
  },
})
