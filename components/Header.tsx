import { Ionicons } from "@expo/vector-icons";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { images } from "../assets/images/index"
import { router } from "expo-router";

export function Header({ leftBar = true }) {
  return (
    <View style={styles.header}>
      {/* Localização */}
      {leftBar && 
      <View style={styles.locationContainer}>
        <Text style={styles.locationLabel}>Sua localização</Text>
        <View style={styles.locationRow}>
          <Text style={styles.locationText}>Jequié, Brasil</Text>
          <Ionicons name="chevron-down" size={16} color="#4CAF50" style={styles.icon} />
        </View>
      </View>
      }
      

      {/* Saudação e imagem do agricultor */}
      <View style={styles.userContainer}>
        <Text style={styles.greetingText}>Olá, Agricultor</Text>
        <TouchableOpacity
          onPress={() => router.push('/perfil')}
        >
          <Image
            style={styles.profileImage}
            source={images.agricultorBig}
          />
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    marginBottom: 20,
    width: '100%'
  },
  locationContainer: {
    flexDirection: 'column',
  },
  locationLabel: {
    color: '#4CAF50', // Verde suave
    fontSize: 14,
    fontWeight: '500',
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationText: {
    fontSize: 16,
    color: '#2E7D32',
    fontWeight: '600',
  },
  icon: {
    marginLeft: 5,
  },
  userContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  greetingText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2E7D32',
    marginRight: 10,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20, // Faz com que a imagem fique redonda
    borderWidth: 3, // Largura da borda
    borderColor: "#FFFFFF", // Cor da borda (branca)
  },
})