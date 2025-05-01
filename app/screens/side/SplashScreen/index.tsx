import { View } from "react-native";
import { Animation } from "@components";
import styles from "./styles";
import { useEffect } from "react";
import { useRouter } from "expo-router";

const  SplashScreen = () => {
  const router = useRouter()

  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace("/screens/auth/Login")
    }
    , 2000)
    return () => clearTimeout(timer)
  },[])

  return (
    <View style={styles.container}>
      <Animation
        src="https://lottie.host/20cd7804-fe4a-4ff5-ba25-423450fcb958/DdxtYZe9xS.lottie"
        contentStyle={styles.loading}
      />
    </View>
  )
}
export default SplashScreen