import Spotify from "@/assets/images/spotify.svg"
import { ImageProps } from "react-native-svg"

interface SpotifyLogoProps extends ImageProps {
  style: any
}

const SpotifyLogo: React.FC<SpotifyLogoProps> = ({ style }) => {
  return <Spotify style={style} width={196} height={59} />
}

export default SpotifyLogo
