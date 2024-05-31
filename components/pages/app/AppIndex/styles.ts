import { StyleSheet } from "react-native";
import { COLORS } from "@/constants/constants";

export default StyleSheet.create({
  categoriesContainer: {
    gap: 46,
  },
  categoryContainer: {
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
  imageTracksContainer: {
    gap: 16,
    marginTop: 28,
  },
  artistImageContainer: {
    marginBottom: 13,
  },
  categoryTrackPressable: {
    position: "absolute",
    bottom: -10,
    right: 10,
  },
  categoryArtistImg: {
    borderRadius: 30,
  },
  categoryArtistInfo: {
    marginLeft: 10,
    color: COLORS.APP_CATEGORY_ARTIST_INFO,
  },
  categorySongName: {
    fontFamily: "Satoshi-Bold",
    fontSize: 16,
    marginBottom: 5,
  },
  categoryArtistName: {
    fontFamily: "Satoshi-Regular",
    fontSize: 14,
  },
  playlistContent: {
    paddingVertical: 5,
    marginTop: 24,
    gap: 20,
    marginBottom: 50,
  },
  playlistContainerHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 38,
  },
  playlistSectionHeaderTitle: {
    fontFamily: "Satoshi-Bold",
    fontSize: 20,
    color: COLORS.APP_CATEGORY_TEXT,
  },
  playlistSectionSeeMore: {
    fontFamily: "Satoshi-Regular",
    fontSize: 12,
    color: COLORS.APP_PLAYLIST_SEE_MORE
  },
  playlistTrackContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  playlistTrackIcon: {
    width: 38,
    height: 38,
  },
  playlistTrackContent: {
    flex: 1,
    height: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  playlistTrackTextContainer: {
    marginLeft: 24,
  },
  playlistTrackText: {
    color: COLORS.APP_PLAYLIST_TRACK_TEXT
  },
  trackName: {
    fontFamily: "Satoshi-Bold",
    fontSize: 16,
    marginBottom: 5,
  },
  trackArtist: {
    fontFamily: "Satoshi-Regular",
    fontSize: 12
  },
  trackDuration: {
    fontFamily: "Satoshi-Regular",
    fontSize: 15,
  },
  trackLikeBtn: {
    width: 22,
    height: 22,
  }
})