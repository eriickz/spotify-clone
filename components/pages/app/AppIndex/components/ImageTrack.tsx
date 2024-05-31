import { Image, Text, View } from "react-native";
import ThemedButton from "@/components/ThemedButton";
import appStyles from "../../appStyles";
import PlayIcon from "@/assets/images/icon/play.svg";
import styles from "../styles"

const ImageTrack = () => {
  return (
    <View>
      <View style={styles.artistImageContainer}>
        <Image source={require("@/assets/images/billie-eilish.png")} style={styles.categoryArtistImg} />
        <ThemedButton style={[appStyles.appButton, styles.categoryTrackPressable]} type="secondary">
          <PlayIcon />
        </ThemedButton>
      </View>
      <Text style={[styles.categoryArtistInfo, styles.categorySongName]}>Bad Guy</Text>
      <Text style={[styles.categoryArtistInfo, styles.categoryArtistName]}>Billie Eilish</Text>
    </View>
  )
}

export default ImageTrack;