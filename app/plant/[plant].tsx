import { images } from "@/assets/images";
import { Header } from "@/components/Header";
import { useLocalSearchParams } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";

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

export default function Plant() {
  const { plant } = useLocalSearchParams();

  const plantId = Array.isArray(plant) ? plant[0] : plant;

  function getPlantById(id: string): Plant | undefined {
    return DATA.find((plant) => plant.id === id);
  }

  const selectedPlant = getPlantById(plantId);

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <Ionicons name="chevron-back" size={28} color="#004809" />
      </TouchableOpacity>
      <View style={styles.header}>
        <Header leftBar={false} />
      </View>
      <View style={styles.info}>
        <View style={styles.row}>
          <View style={styles.field}>
            <Text style={styles.label}>Nome do Produto:</Text>
            <TextInput
              style={styles.infoResp}
              value={selectedPlant?.name || ""}
              editable={false}
            />
          </View>
          <View style={styles.field}>
            <Text style={styles.label}>Categoria:</Text>
            <TextInput
              style={styles.infoResp}
              placeholder=""
              editable={false}
            />
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.field}>
            <Text style={styles.label}>Preço Atual:</Text>
            <TextInput
              style={styles.infoResp}
              placeholder=""
              editable={false}
            />
          </View>
          <View style={styles.field}>
            <Text style={styles.label}>Variação Diária:</Text>
            <TextInput
              style={styles.infoResp}
              placeholder=""
              editable={false}
            />
          </View>
        </View>
        <View style={styles.fullWidth}>
          <Text style={styles.label}>Histórico de Preços:</Text>
          <TextInput
            style={styles.infoResp}
            placeholder=""
            editable={false}
            multiline
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#E8F5E9",
    flex: 1,
    paddingTop: 100,
    paddingHorizontal: 20,
  },
  header: {
    position: "absolute",
    top: 38,
    right: 20,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "500",
    color: "#004809",
    marginBottom: 25,
  },
  backButton: {
    position: "absolute",
    top: 50,
    left: 20,
    backgroundColor: "white",
    borderRadius: 30,
    padding: 5,
  },
  plantImage: {
    width: 100,
    height: 100,
    resizeMode: "contain",
    marginVertical: 20,
  },
  info: {
    gap: 15,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 10,
  },
  field: {
    flex: 1,
  },
  label: {
    fontSize: 14,
    fontWeight: "500",
    color: "#004809",
    marginBottom: 5,
  },
  fullWidth: {
    width: "100%",
  },
  infoResp: {
    backgroundColor: "white",
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderRadius: 10,
    fontSize: 14,
    color: "#272A23",
  },
});
