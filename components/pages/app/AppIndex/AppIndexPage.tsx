import AppLayout from "@/components/pages/app/AppLayout";
import { ScrollView } from "react-native";
import styles from "./styles"
import Category from "@/components/pages/app/components/Category";

const AppIndexPage = () => {
  return (
    <AppLayout>
      <ScrollView
        horizontal={true}
        style={styles.scrollView}
        contentContainerStyle={styles.categoriesContainer}
        showsHorizontalScrollIndicator
      >
        <Category title="News" active />
        <Category title="Video" />
        <Category title="Artists" />
        <Category title="Podcasts" />
      </ScrollView>
    </AppLayout>
  )
}

export default AppIndexPage;