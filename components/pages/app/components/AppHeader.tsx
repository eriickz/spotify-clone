import appStyles from "../appStyles";
import ThemedButton from "@/components/ThemedButton";
import SearchIcon from "@/assets/images/icon/search.svg";
import SpotifyLogo from "@/components/SpotifyLogo";
import MenuIcon from "@/assets/images/icon/menu.svg";
import { View } from "react-native";

const AppHeader = () => {
  return (
    <View style={appStyles.header}>
      <ThemedButton style={appStyles.searchIcon} type="icon">
        <SearchIcon />
      </ThemedButton>
      <SpotifyLogo style={appStyles.logo} />
      <ThemedButton style={appStyles.searchIcon} type="icon">
        <MenuIcon />
      </ThemedButton>
    </View>
  )
}

export default AppHeader;