import { Image, Text, View } from "react-native";
import logoImg from '../../assets/logo.png';

import { styles } from "./styles";

export function Home() {
  return (
    <View style={styles.container}>
      <Image source={logoImg} />

      <View>
        <Text>Hi!! I'm Mateus</Text>
      </View>
    </View>
  );
}