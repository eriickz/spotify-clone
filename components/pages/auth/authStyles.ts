import { COLORS } from "@/constants/constants"
import { StyleSheet } from "react-native"

export default StyleSheet.create({
  layout: {
    flex: 1,
    backgroundColor: COLORS.AUTH_BACKGROUND,
    paddingHorizontal: 30,
    paddingVertical: 36,
  },
  backBtn: ({ pressed }: { pressed: boolean }) => ({
    width: 32,
    height: 32,
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    padding: 4,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    opacity: pressed ? 0.8 : 1
  }),
  formContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  logoContainer: {
    position: "relative",
    top: -45,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  formLogo: {
    maxWidth: 108,
    maxHeight: 33,
  },
  formTitle: {
    fontFamily: "Satoshi-Bold",
    fontSize: 30,
    color: COLORS.AUTH_FORM_TITLE
  },
  supportText: {
    fontFamily: "Satoshi-Regular",
    fontSize: 12,
    color: COLORS.AUTH_FORM_HELP,
    textTransform: "capitalize",
    marginBottom: 38,
    marginTop: 22,
  },
  supportSpan: {
    color: COLORS.AUTH_FORM_HELP_SPAN
  },
  inputContainer: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    gap: 16
  },
  input: {
    borderWidth: 1,
    borderColor: COLORS.AUTH_FORM_INPUT_BORDER,
    paddingHorizontal: 27,
    paddingVertical: 29,
    borderRadius: 30,
    width: "100%",
    color: COLORS.AUTH_FORM_INPUT_TEXT,
    textTransform: "capitalize",
  },
  passwordInputIcon: {
    position: "absolute",
    right: 30,
    width: "auto",
    zIndex: 1,
    maxWidth: 22,
  },
  recoveryText: {
    alignSelf: "flex-start",
    paddingLeft: 18,
    marginTop: 20,
    color: COLORS.AUTH_FORM_RECOVERY_TEXT,
    fontFamily: "Satoshi-Bold",
    fontSize: 14,
    marginBottom: 22,
  },
  separatorsContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 21,
  },
  gradientLeft: {
    flex: 1,
    height: 2
  },
  separatorText: {
    paddingHorizontal: 8,
    fontFamily: "Satoshi-Regular",
    fontSize: 12,
    color: COLORS.AUTH_SEPARATOR_TEXT
  },
  iconContainer: {
    flexDirection: "row",
    gap: 58,
    marginBottom: 20,
  },
  iconButton: {
    width: "auto",
  },
  icon: {
    maxHeight: 30,
  },
  anchorLink: {
    height: 60,
  },
  anchor: {
    fontFamily: "Satoshi-Bold",
    fontSize: 14,
    color: COLORS.AUTH_FORM_ANCHOR,
    textTransform: "capitalize"
  },
  anchorSpan: {
    color: COLORS.AUTH_FORM_ANCHOR_SPAN
  },
})
