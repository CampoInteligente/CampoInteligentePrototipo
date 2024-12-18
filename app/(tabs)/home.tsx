// app/tabs/home.tsx
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TextInput,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from "react-native";
import { images } from "../../assets/images";
import { Ionicons } from "@expo/vector-icons";
import { Header } from "@/components/Header";
import { StatusBar } from "expo-status-bar";
import { router } from "expo-router";

interface Plant {
  id: string;
  name: string;
  image: any;
}

const DATA: Plant[] = [
  { id: "1", name: "Brócolis", image: images.brocolis },
  { id: "2", name: "Pepino", image: images.pepino },
  { id: "3", name: "Batata", image: images.batata },
  { id: "4", name: "Cebola", image: images.cebola },
  { id: "5", name: "Alface", image: images.alface },
];

export default function HomeScreen() {
  const renderItem = ({ item }: { item: Plant }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => router.push(`../plant/${item.id}`)}
    >
      <Image source={item.image} style={styles.image} />
      <Text style={styles.text}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      <Header />
      <View style={styles.inputContainer}>
        <Ionicons name="search" size={20} color="#004809" style={styles.icon} />
        <TextInput style={styles.searchInput} placeholder="Pesquisar" />
      </View>
      <Text style={styles.sectionTitle}>Minhas Plantações</Text>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        style={styles.listContainer}
        scrollEnabled
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EAF5E3",
    padding: 16,
  },
  location: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  greeting: {
    fontSize: 14,
    color: "#555",
  },
  inputContainer: {
    flexDirection: "row", // Alinha o ícone e o campo lado a lado
    alignItems: "center", // Centraliza verticalmente
    backgroundColor: "#FFF",
    borderRadius: 10, // Bordas arredondadas
    paddingHorizontal: 10, // Espaço interno
    marginBottom: 15,
  },
  icon: {
    marginRight: 8, // Espaçamento entre o ícone e o campo
  },
  searchInput: {
    flex: 1, // Permite que o campo de entrada ocupe o espaço restante
    fontSize: 16,
    paddingVertical: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 12,
    color: "#004809",
  },
  listContainer: {
    backgroundColor: "white",
    paddingHorizontal: 17,
    paddingVertical: 18,
    flex: 1,
    borderRadius: 12,
  },
  list: {
    paddingBottom: 16,
  },
  card: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#E8F5E9",
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
    borderWidth: 0,
  },
  image: {
    marginRight: 16,
  },
  text: {
    fontSize: 32,
    fontWeight: "regular",
    color: "#004809",
  },
});
