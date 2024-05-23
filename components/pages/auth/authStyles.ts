import { COLORS } from "@/components/globalStyles"
import { StyleSheet } from "react-native"

export default StyleSheet.create({
  layout: {
    flex: 1,
    backgroundColor: COLORS.AUTHBACKGROUND,
    paddingHorizontal: 30,
    paddingVertical: 36,
  },
  backBtn: ({ pressed }) => ({
    width: 32,
    height: 32,
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    padding: 4,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    opacity: pressed ? 0.8 : 1
  })
})
