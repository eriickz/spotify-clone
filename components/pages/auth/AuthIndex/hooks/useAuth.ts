import { useEffect, useState } from "react";
import * as WebBrowser from "expo-web-browser"
import { makeRedirectUri, useAuthRequest } from "expo-auth-session";
import { CLIENT_ID } from "@/env";
import { SPOTIFY_BASE_URL } from "@/constants/constants";

WebBrowser.maybeCompleteAuthSession()

const useAuth = () => {
  const [code, setCode] = useState("")
  
  const [request, response, promptAsync] = useAuthRequest(
    {
      clientId: CLIENT_ID,
      scopes: ["user-read-private", "user-read-email"],
      usePKCE: false,
      redirectUri: makeRedirectUri({
        native: "spotify-clone://auth"
      })
    },
    {
      authorizationEndpoint: `${SPOTIFY_BASE_URL}/authorize`
    }
  )
  
  useEffect(() => {
    console.log(response)
    if (response?.type === 'success') {
      const { code } = response.params;
      
      setCode(code)
    }
  }, [response]);
  
  return { promptAsync }
}

export default useAuth;