// app/tabs/simulation.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Header } from '@/components/Header';
import { router } from 'expo-router';

export default function SimulationScreen() {
  const [cultivo, setCultivo] = useState('Milho');
  const [localizacao, setLocalizacao] = useState('Jequié');
  const [fertilizantes, setFertilizantes] = useState('Sim');
  const [defensivos, setDefensivos] = useState('Sim');
  const [areaPlantada, setAreaPlantada] = useState('');
  const [inicio, setInicio] = useState('');
  const [termino, setTermino] = useState('');

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Header />
      <View style={styles.form}>
        <View style={styles.formRow}>
          <View style={styles.formRowContainer}>
            <Text style={styles.labelRow}>Tipo de cultivo:</Text>
            <Picker
              selectedValue={cultivo}
              onValueChange={(itemValue) => setCultivo(itemValue)}
              style={styles.pickerRow}
            >
              <Picker.Item label="Milho" value="Milho" />
              <Picker.Item label="Soja" value="Soja" />
              <Picker.Item label="Arroz" value="Arroz" />
            </Picker>
          </View>

          <View style={styles.formRowContainer}>
            <Text style={styles.labelRow}>Área plantada:</Text>
            <TextInput
              style={styles.inputRow}
              placeholder="Em hectares"
              keyboardType="numeric"
              value={areaPlantada}
              onChangeText={setAreaPlantada}
            />
          </View>
        </View>

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

        <Text style={styles.label}>Início:</Text>
        <TextInput
          style={styles.input}
          placeholder="DD/MM/AAAA"
          value={inicio}
          onChangeText={setInicio}
        />

        <Text style={styles.label}>Término:</Text>
        <TextInput
          style={styles.input}
          placeholder="DD/MM/AAAA"
          value={termino}
          onChangeText={setTermino}
        />

        <Text style={styles.label}>Fertilizantes:</Text>
        <Picker
          selectedValue={fertilizantes}
          onValueChange={(itemValue) => setFertilizantes(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label="Sim" value="Sim" />
          <Picker.Item label="Não" value="Não" />
        </Picker>

        <Text style={styles.label}>Defensivos:</Text>
        <Picker
          selectedValue={defensivos}
          onValueChange={(itemValue) => setDefensivos(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label="Sim" value="Sim" />
          <Picker.Item label="Não" value="Não" />
        </Picker>

        <TouchableOpacity 
          style={styles.button}
          onPress={() => router.push('../resultado')}  
        >
          <Text style={styles.buttonText}>Simular</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#EAF5E9',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  location: {
    fontSize: 14,
    color: '#333',
  },
  locationValue: {
    fontWeight: 'bold',
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  greeting: {
    marginRight: 10,
    fontSize: 16,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  form: {
    marginBottom: 40,
  },
  formRow: {
    flexDirection: "row",
    justifyContent: 'space-between', // Espaço entre os elementos
    alignItems: 'center', // Alinha verticalmente
    marginBottom: 15,
    padding: 0,
    gap: 10
  },
  formRowContainer: {
    width: '48%',
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  labelRow: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
  },
  inputRow: {
    flex: 1, // Cada item pode ocupar o espaço disponível
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 5,
    padding: 10,
  },
  picker: {
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 5,
    marginBottom: 15,
  },
  pickerRow: {
    flex: 1, // Flexibilidade similar ao input
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 5,
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderColor: '#DDD',
  },
  footerButton: {
    alignItems: 'center',
  },
});
