import { View } from "react-native";
import Spotify from "@/assets/images/spotify.svg"
import styles from "./_styles";

export default function Index() {
  return (
    <View style={styles.container}>
      <Spotify width={196} height={59} />
    </View>
  );
}
