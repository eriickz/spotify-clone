import { StyleSheet } from "react-native";

export default (isSmallDevice: boolean) =>  StyleSheet.create({
  section: {
    marginTop: 110, 
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    marginBottom: 55
  },
  content: {
    alignItems: "center",
    marginBottom: 30,
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
    color: "#A0A0A0",
    textAlign: "center",
    marginBottom: 20,
    opacity: 0.7
  },
  buttonsContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    zIndex: 2,
  },
  button: {
    width: "5%",
  },
  cornerImg: {
    top: isSmallDevice ? -170 : -70,
    left: -35,
    zIndex: -1
  },
  radial: {
    position: "absolute",
    opacity: 0.5
  },
  radialTop: {
    top: isSmallDevice ? -30 :-60,
    right: isSmallDevice ? -10 : -10,
    zIndex: -1,
    minHeight: 300,
  },
  radialBottom: {
    minHeight: 390,
    bottom: isSmallDevice ? -50 : 0,
    right: isSmallDevice ? -20 : 0,
  }
})
