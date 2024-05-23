import { router, Redirect } from "expo-router"
import { useRootNavigationState } from "expo-router"

export default function Index() {
  const rootNavigationState = useRootNavigationState()
  
  if (!rootNavigationState?.key) {
    return null
  } 

  return <Redirect href="splash" />
}
