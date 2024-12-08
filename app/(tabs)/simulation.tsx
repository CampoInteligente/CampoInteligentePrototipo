import React, { useState } from "react";
import { router } from "expo-router";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { Header } from "@/components/Header";
import { StatusBar } from "expo-status-bar";

export default function SimulationScreen() {
  const [cultivo, setCultivo] = useState("Milho");
  const [areaPlantada, setAreaPlantada] = useState("");
  const [localizacao, setLocalizacao] = useState("Jequié");
  const [inicio, setInicio] = useState("");
  const [termino, setTermino] = useState("");
  const [quantidadeAgua, setQuantidadeAgua] = useState("");
  const [medidaAgua, setMedidaAgua] = useState("L");
  const [fertilizantes, setFertilizantes] = useState("Sim");
  const [defensivos, setDefensivos] = useState("Sim");
  const [maoDeObra, setMaoDeObra] = useState("");

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <StatusBar style="dark" />
      <Header />
      <View style={styles.form}>
        <View style={styles.row}>
          <View style={styles.field}>
            <Text style={styles.label}>Tipo de cultivo:</Text>
            <Picker
              selectedValue={cultivo}
              onValueChange={(itemValue) => setCultivo(itemValue)}
              style={styles.picker}
            >
              <Picker.Item label="Milho" value="Milho" />
              <Picker.Item label="Soja" value="Soja" />
              <Picker.Item label="Arroz" value="Arroz" />
            </Picker>
          </View>
          <View style={styles.field}>
            <Text style={styles.label}>Área plantada:</Text>
            <TextInput
              style={styles.input}
              placeholder="Em hectares"
              keyboardType="numeric"
              value={areaPlantada}
              onChangeText={setAreaPlantada}
            />
          </View>
        </View>

        <View style={styles.field2}>
          <Text style={styles.label}>Localização:</Text>
          <Picker
            selectedValue={localizacao}
            onValueChange={(itemValue) => setLocalizacao(itemValue)}
            style={styles.picker}
          >
            <Picker.Item label="Jequié" value="Jequié" />
            <Picker.Item label="Salvador" value="Salvador" />
            <Picker.Item label="Ilhéus" value="Ilhéus" />
          </Picker>
        </View>

        <View style={styles.row}>
          <View style={styles.field}>
            <Text style={styles.label}>Início:</Text>
            <TextInput
              style={styles.input}
              placeholder="DD/MM/AAAA"
              value={inicio}
              onChangeText={setInicio}
            />
          </View>
          <View style={styles.field}>
            <Text style={styles.label}>Término:</Text>
            <TextInput
              style={styles.input}
              placeholder="DD/MM/AAAA"
              value={termino}
              onChangeText={setTermino}
            />
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.field}>
            <Text style={styles.label}>Quantidade de água:</Text>
            <TextInput
              style={styles.input}
              placeholder="Quantidade"
              keyboardType="numeric"
              value={quantidadeAgua}
              onChangeText={setQuantidadeAgua}
            />
          </View>
          <View style={styles.field}>
            <Text style={styles.label}>Medida:</Text>
            <Picker
              selectedValue={medidaAgua}
              onValueChange={(itemValue) => setMedidaAgua(itemValue)}
              style={styles.picker}
            >
              <Picker.Item label="L" value="L" />
              <Picker.Item label="m³" value="m³" />
            </Picker>
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.field}>
            <Text style={styles.label}>Fertilizantes:</Text>
            <Picker
              selectedValue={fertilizantes}
              onValueChange={(itemValue) => setFertilizantes(itemValue)}
              style={styles.picker}
            >
              <Picker.Item label="Sim" value="Sim" />
              <Picker.Item label="Não" value="Não" />
            </Picker>
          </View>
          <View style={styles.field}>
            <Text style={styles.label}>Defensivos:</Text>
            <Picker
              selectedValue={defensivos}
              onValueChange={(itemValue) => setDefensivos(itemValue)}
              style={styles.picker}
            >
              <Picker.Item label="Sim" value="Sim" />
              <Picker.Item label="Não" value="Não" />
            </Picker>
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.field}>
            {" "}
            <Text style={styles.label}>Mão de obra:</Text>
            <TextInput
              style={styles.input}
              placeholder="Quantidade"
              keyboardType="numeric"
              value={maoDeObra}
              onChangeText={setMaoDeObra}
            />
          </View>
          <View style={styles.field}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => router.push("../resultado")}
            >
              <Text style={styles.buttonText}>Simular</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#EAF5E9",
    padding: 16,
  },
  form: {
    marginTop: 20,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
  },
  field: {
    flex: 1,
    marginHorizontal: 5,
  },
  field2: {
    flex: 1,
    marginHorizontal: 5,
    marginBottom: 15,
  },
  label: {
    fontSize: 14,
    fontWeight: "500",
    color: "#004809",
    marginBottom: 5,
  },
  input: {
    backgroundColor: "white",
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderRadius: 10,
    fontSize: 14,
    color: "#272A23",
  },
  picker: {
    backgroundColor: "#FFF",
    borderWidth: 1,
    borderColor: "#DDD",
    borderRadius: 10,
  },
  button: {
    backgroundColor: "#127234",
    padding: 15,
    borderRadius: 15, // Bordas arredondadas
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "#FFF",
    fontWeight: "bold",
  },
});
