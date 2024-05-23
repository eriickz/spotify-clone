import { StyleSheet } from "react-native"

export default StyleSheet.create({
  containers: {
    flex: 1,
    backgroundColor: "#000" //Prevent gray flickering on router replace at ImageBackground
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    paddingTop: 37,
    paddingBottom: 69,
    paddingHorizontal: 30,
  },
  bottomContent: {
    alignItems: "center",
  },
  leading: {
    fontFamily: "Satoshi-Bold",
    fontSize: 25,
    color: "#DADADA",
    marginBottom: 20,
  },
  paragraph: {
    fontFamily: "Satoshi-Regular",
    fontSize: 17,
    fontWeight: "400",
    color: "#797979",
    textAlign: "center",
    marginBottom: 37,
    opacity: 0.7
  },
})
