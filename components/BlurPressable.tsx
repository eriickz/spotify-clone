import { FC, ReactNode } from "react";
import { Text, View } from "react-native";
import SelectedGlow from "@/assets/images/selected-mode-glow.svg"
import getGlobalStyles from "./globalStyles";
import ThemedButton from "@/components/ThemedButton";

interface BlurPressableProps {
  children: ReactNode
  showGlow?: boolean,
  title: string
}

const BlurPressable: FC<BlurPressableProps> = ({ children, showGlow, title }) => {
  const styles = getGlobalStyles()

  return (
    <View>
      <ThemedButton style={styles.blurPressable}>
        <View style={styles.blurPressableContainer}>
          {children}
        </View>
        {showGlow && (
          <SelectedGlow style={styles.selectedGlow} />
        )}
      </ThemedButton>
      <Text style={styles.blurPressableText}>{title}</Text>
    </View>
  )
}

export default BlurPressable
