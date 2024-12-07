import { images } from '@/assets/images';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import React from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';

export default function Perfil() {
  return (
    <View style={styles.container}>
      <TouchableOpacity 
        style={styles.backButton}
        onPress={() => router.back()}  
      >
        <Ionicons name='chevron-back' size={28} color={'#004809'} />
      </TouchableOpacity>

      <Text style={styles.header}>Meu Perfil</Text>

      <Image 
        source={images.agricultorBig} // Substitua pela URL da imagem ou importe localmente.
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
    paddingTop: 80,
  },
  backButton: {
    position: 'absolute',
    top: 50,
    left: 20,
    backgroundColor: 'white',
    borderRadius: 30,
    padding: 5
  },
  header: {
    fontSize: 20,
    fontWeight: '500',
    color: '#004809',
    marginBottom: 25,
  },
  profileImage: {
    width: 130,
    height: 130,
    borderRadius: 130,
    marginBottom: 22,
  },
  fieldContainer: {
    width: '90%',
    borderRadius: 8,
    padding: 10,
    marginVertical: 5,
    alignItems: 'center',
  },
  label: {
    fontSize: 28,
    color: '#004809',
    marginBottom: 8
  },
  value: {
    fontSize: 20,
    fontWeight: 'regular',
    paddingVertical: 10,
    borderRadius: 12,
    color: 'white',
    backgroundColor: '#FFD966',
    width: '100%',
    textAlign: 'center'
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
