import appStyles from "@/components/pages/app/appStyles";
import { Image, Text, View } from "react-native";
import RadialTop from "@/assets/images/radial-top.svg";

const Promo = () => {
  return (
    <View style={appStyles.promoContainer}>
      <View style={appStyles.promoTextContainer}>
        <Text style={[appStyles.promoText, appStyles.promoTextSize(12)]}>New Album</Text>
        <Text style={[appStyles.promoText, appStyles.promoTextSize(20)]}>Happier Than Ever</Text>
        <Text style={[appStyles.promoText, appStyles.promoTextSize(14)]}>Billie Eilish</Text>
      </View>
      <Image style={appStyles.promoImg} source={require("@/assets/images/promo-img.png")} />
      <RadialTop style={appStyles.promoRadial} />
    </View>
  )
}

export default Promo;