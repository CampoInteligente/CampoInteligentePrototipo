import { useRouter } from "expo-router";
import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { images } from '../assets/images';

export default function Index() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <ImageBackground
        source={images.background}
        style={styles.background}
      >
        <View style={styles.logoContainer}>
          <Image 
            source={images.logo}
          />
        </View>
        <Text style={styles.description}>Inovação transformando a agricultura.</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push('/(tabs)/home')}
        >
          <Text style={styles.buttonText}>Entrar →</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  background: { flex: 1, justifyContent: 'space-between', alignItems: 'center' },
  logoContainer: { marginTop: 100, alignItems: 'center' },
  logoText: { fontSize: 32, fontWeight: 'bold', color: '#fff' },
  description: { fontSize: 20, color: '#fff', textAlign: 'center', marginHorizontal: 20, width: '80%' },
  button: { backgroundColor: '#fff', borderRadius: 30, paddingVertical: 15, paddingHorizontal: 40, marginBottom: 50 },
  buttonText: { color: '#228B22', fontSize: 18, fontWeight: 'bold' },
});

