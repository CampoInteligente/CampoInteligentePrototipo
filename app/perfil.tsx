import { images } from '@/assets/images';
import React from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';

export default function Perfil() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton}>
        <Text>←</Text>
      </TouchableOpacity>

      <Text style={styles.header}>Meu Perfil</Text>

      <Image 
        source={images.agricultor} // Substitua pela URL da imagem ou importe localmente.
        style={styles.profileImage}
      />

      <View style={styles.fieldContainer}>
        <Text style={styles.label}>Nome:</Text>
        <Text style={styles.value}>Agricultor</Text>
      </View>

      <View style={styles.fieldContainer}>
        <Text style={styles.label}>E-mail:</Text>
        <Text style={styles.value}>campointeligente@gmail.com</Text>
      </View>

      <View style={styles.fieldContainer}>
        <Text style={styles.label}>CPF:</Text>
        <Text style={styles.value}>123.456.789-01</Text>
      </View>

      <TouchableOpacity style={styles.changePasswordButton}>
        <Text style={styles.changePasswordText}>Trocar senha</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EAF5E9',
    alignItems: 'center',
    paddingTop: 50,
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
  fieldContainer: {
    width: '90%',
    backgroundColor: '#FFD966',
    borderRadius: 8,
    padding: 10,
    marginVertical: 5,
    alignItems: 'center',
  },
  label: {
    fontSize: 16,
    color: '#333',
  },
  value: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  changePasswordButton: {
    marginTop: 20,
    borderWidth: 1,
    borderColor: '#333',
    borderRadius: 8,
    padding: 10,
  },
  changePasswordText: {
    color: '#333',
  },
});
