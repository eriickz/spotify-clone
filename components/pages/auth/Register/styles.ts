import { StyleSheet } from "react-native";

export default (isSmallDevice: boolean) => StyleSheet.create({
  logoContainer: {
    top: isSmallDevice ? -80 : -45
  },
  actionButton: {
    maxHeight: isSmallDevice ? 80 : 92,
  },
  iconContainer: {
    marginBottom: isSmallDevice ? 0 : 20
  }
})