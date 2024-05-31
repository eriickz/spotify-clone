import AppLayout from "@/components/pages/app/AppLayout";
import { ScrollView, Text, View } from "react-native";
import styles from "./styles"
import Category from "@/components/pages/app/components/Category";
import PlayIcon from "@/assets/images/icon/play.svg"
import ThemedButton from "@/components/ThemedButton";
import ImageTrack from "./components/ImageTrack";
import HeartFullIcon from "@/assets/images/icon/heart-full.svg"

const AppIndexPage = () => {
  return (
    <AppLayout>
      <ScrollView
        horizontal={true}
        contentContainerStyle={styles.categoriesContainer}
        showsHorizontalScrollIndicator
      >
        <Category title="News" active />
        <Category title="Video" />
        <Category title="Artists" />
        <Category title="Podcasts" />
      </ScrollView>
      <ScrollView
        horizontal={true}
        contentContainerStyle={styles.imageTracksContainer}
        showsHorizontalScrollIndicator={false}
      >
        <ImageTrack />
        <ImageTrack />
        <ImageTrack />
        <ImageTrack />
      </ScrollView>
      <View style={styles.playlistContainerHeader}>
        <Text style={styles.playlistSectionHeaderTitle}>PlayList</Text>
        <Text style={styles.playlistSectionSeeMore}>See More</Text>
      </View>
      <View style={styles.playlistContent}>
        <View style={styles.playlistTrackContainer}>
          <ThemedButton type="secondary" style={styles.playlistTrackIcon}>
            <PlayIcon />
          </ThemedButton>
          <View style={styles.playlistTrackContent}>
            <View style={styles.playlistTrackTextContainer}>
              <Text style={[styles.playlistTrackText, styles.trackName]}>As It Was</Text>
              <Text style={[styles.playlistTrackText, styles.trackArtist]}>Harry Styles</Text>
            </View>
            <Text style={[styles.playlistTrackText, styles.trackDuration]}>5:33</Text>
            <ThemedButton type="icon" style={styles.trackLikeBtn}>
              <HeartFullIcon />
            </ThemedButton>
          </View>
        </View>
        <View style={styles.playlistTrackContainer}>
          <ThemedButton type="secondary" style={styles.playlistTrackIcon}>
            <PlayIcon />
          </ThemedButton>
          <View style={styles.playlistTrackContent}>
            <View style={styles.playlistTrackTextContainer}>
              <Text style={[styles.playlistTrackText, styles.trackName]}>As It Was</Text>
              <Text style={[styles.playlistTrackText, styles.trackArtist]}>Harry Styles</Text>
            </View>
            <Text style={[styles.playlistTrackText, styles.trackDuration]}>5:33</Text>
            <ThemedButton type="icon" style={styles.trackLikeBtn}>
              <HeartFullIcon />
            </ThemedButton>
          </View>
        </View>
        <View style={styles.playlistTrackContainer}>
          <ThemedButton type="secondary" style={styles.playlistTrackIcon}>
            <PlayIcon />
          </ThemedButton>
          <View style={styles.playlistTrackContent}>
            <View style={styles.playlistTrackTextContainer}>
              <Text style={[styles.playlistTrackText, styles.trackName]}>As It Was</Text>
              <Text style={[styles.playlistTrackText, styles.trackArtist]}>Harry Styles</Text>
            </View>
            <Text style={[styles.playlistTrackText, styles.trackDuration]}>5:33</Text>
            <ThemedButton type="icon" style={styles.trackLikeBtn}>
              <HeartFullIcon />
            </ThemedButton>
          </View>
        </View>
        <View style={styles.playlistTrackContainer}>
          <ThemedButton type="secondary" style={styles.playlistTrackIcon}>
            <PlayIcon />
          </ThemedButton>
          <View style={styles.playlistTrackContent}>
            <View style={styles.playlistTrackTextContainer}>
              <Text style={[styles.playlistTrackText, styles.trackName]}>As It Was</Text>
              <Text style={[styles.playlistTrackText, styles.trackArtist]}>Harry Styles</Text>
            </View>
            <Text style={[styles.playlistTrackText, styles.trackDuration]}>5:33</Text>
            <ThemedButton type="icon" style={styles.trackLikeBtn}>
              <HeartFullIcon />
            </ThemedButton>
          </View>
        </View>
      </View>
    </AppLayout>
  )
}

export default AppIndexPage;