import { StyleSheet } from "react-native";
import { COLORS } from "@/constants/constants";

export default StyleSheet.create({
  layout: {
    flex: 1,
    backgroundColor: COLORS.AUTH_BACKGROUND,
    padding: 32
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 5,
  },
  searchIcon: {
    width: "auto",
  },
  logo: {
    maxHeight: 33,
    zIndex: 1,
  },
  promoContainer: {
    width: "100%",
    backgroundColor: COLORS.PRIMARY,
    height: 118,
    borderRadius: 30,
    paddingLeft: 20,
    paddingVertical: 16,
    marginBottom: 40
  },
  promoTextContainer: {
    width: "50%",
    height: "100%",
    justifyContent: "space-between",
  },
  promoText: {
    fontFamily: "Satoshi-Bold",
    color: COLORS.APP_PROMO_TEXT
  },
  promoTextSize: (size: number) => ({
    fontSize: size,
  }),
  promoImg: {
    position: "absolute",
    top: -66,
    right: 10,
    width: 300
  },
  promoRadial: {
    position: "absolute",
    right: 4,
    top: 5,
    zIndex: -1
  },
  tabBarIconContainer: {
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
  },
  tabBarSelectedSegment: {
    height: 4,
    width: 24,
    borderBottomLeftRadius: 3.5,
    borderBottomRightRadius: 3.5,
    backgroundColor: COLORS.PRIMARY,
    position: "absolute",
    top: 0
  }
})