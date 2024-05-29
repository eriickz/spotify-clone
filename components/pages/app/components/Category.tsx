import styles from "@/components/pages/app/AppIndex/styles";
import { Text, View } from "react-native";
import { FC } from "react";
import { CategoryProps } from "@/components/pages/app/types";

const Category: FC<CategoryProps> = ({ title, active = false }) => {
  return (
    <View style={styles.categoryContainer}>
      <Text style={
        [
          styles.categoryText,
          !active ? styles.categoryTextDisabled : null
        ]
      }>
        {title}
      </Text>
      {active && <View style={styles.selectedCategory} />}
    </View>
  )
}

export default Category;