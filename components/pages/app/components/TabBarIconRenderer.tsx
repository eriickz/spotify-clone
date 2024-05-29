import { FC } from "react"
import Home from "@/assets/images/icon/tab/home.svg";
import HomeSelected from "@/assets/images/icon/tab/home-selected.svg";
import Discovery from "@/assets/images/icon/tab/discovery.svg";
import DiscoverySelected from "@/assets/images/icon/tab/discovery-selected.svg";
import Profile from "@/assets/images/icon/tab/profile.svg";
import ProfileSelected from "@/assets/images/icon/tab/profile-selected.svg";
import Heart from "@/assets/images/icon/tab/heart.svg";
import HeartSelected from "@/assets/images/icon/tab/heart-selected.svg";
import { TabBarIconType } from "@/components/pages/app/types";

const TabBarIconRenderer: FC<{ focused: boolean, type: TabBarIconType }> = ({ focused, type }) => {
  switch (true) {
    case type == "home" && !focused:
      return <Home />
    case type == "home" && focused:
      return <HomeSelected />
    case type == "discovery" && !focused:
      return <Discovery />
    case type == "discovery" && focused:
      return <DiscoverySelected />
    case type == "profile" && !focused:
      return <Profile />
    case type == "profile" && focused:
      return <ProfileSelected />
    case type == "heart" && !focused:
      return <Heart />
    case type == "heart" && focused:
      return <HeartSelected />
    default:
      return null
  }
}

export default TabBarIconRenderer