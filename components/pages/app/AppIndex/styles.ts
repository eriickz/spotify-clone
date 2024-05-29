import { StyleSheet } from "react-native";
import { COLORS } from "@/constants/constants";

export default StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  categoriesContainer: {
    gap: 46,
  },
  categoryContainer: {
    flex: 1,
    alignItems: "center",
  },
  categoryText: {
    fontFamily: "Satoshi-Bold",
    fontSize: 20,
    marginBottom: 3,
    color: COLORS.APP_CATEGORY_TEXT,
  },
  categoryTextDisabled: {
    color: COLORS.APP_CATEGORY_DISABLED_TEXT
  },
  selectedCategory: {
    backgroundColor: COLORS.PRIMARY,
    width: 26,
    height: 3,
    borderBottomLeftRadius: 3.5,
    borderBottomRightRadius: 3.5
  },
})