// app/tabs/weather.tsx
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { Header } from '@/components/Header';
import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';

type IoniconsName =
  | 'sunny'
  | 'cloud'
  | 'rainy'
  | 'partly-sunny'
  | 'thunderstorm'
  | 'snow'
  | 'moon';

interface Weather {
  day: string;
  tempMax: number;
  tempMin: number;
  icon: IoniconsName;
}

const forecastData: Weather[] = [
  { day: 'Hoje', tempMax: 28, tempMin: 22, icon: 'rainy' },
  { day: 'Domingo', tempMax: 30, tempMin: 22, icon: 'rainy' },
  { day: 'Segunda-feira', tempMax: 31, tempMin: 21, icon: 'cloud' },
  { day: 'Terça-feira', tempMax: 30, tempMin: 21, icon: 'rainy' },
  { day: 'Quarta-feira', tempMax: 29, tempMin: 21, icon: 'cloud' },
  { day: 'Quinta-feira', tempMax: 29, tempMin: 20, icon: 'cloud' },
  { day: 'Sexta-feira', tempMax: 29, tempMin: 20, icon: 'rainy' },
];

export default function WeatherScreen() {

  const renderForecastItem = ({ item }: {item: Weather }) => (
    <View style={styles.forecastItem}>
      <Text style={styles.day}>{item.day}</Text>
      <View style={{flexDirection: 'row', gap: 10}}>
        <Ionicons name={item.icon} size={24} color="#555" />
        <Text style={styles.temperatureMin}>{item.tempMin}°</Text>
        <Text style={styles.temperature}>{item.tempMax}°</Text>
      </View>
    </View>
  );
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style='dark' />
      <Header />
      {/* Weather Overview */}
      <View style={styles.weatherOverview}>
        <View>
          <Text style={styles.temperatureOverview}>26°C</Text>
        </View>
        <View style={styles.weatherInfo}>
          <Text style={styles.date}>Sab, 06 Novembro</Text>
          <Text style={styles.location}>🇧🇷  Jequié</Text>
          <Text style={styles.weatherStatus}>☁️  Overcast Clouds</Text>
        </View>
      </View>

      {/* Forecast */}
      <FlatList
        data={forecastData}
        renderItem={renderForecastItem}
        keyExtractor={(item) => item.day}
        style={styles.forecastList}
      />

      {/* Air Quality Index */}
      <View style={styles.aqiContainer}>
        <Text style={styles.aqiText}>IQAR</Text>
        <Text style={styles.aqiValue}>Boa (44)</Text>
      </View>

      {/* Footer Stats */}
      <View style={styles.footer}>
        <View style={styles.footerBox}>
          <Text style={styles.footerTitle}>Índice UV</Text>
          <Text style={styles.footerValue}>Baixo</Text>
        </View>
        <View style={styles.footerBox}>
          <Text style={styles.footerTitle}>Umidade</Text>
          <Text style={styles.footerValue}>81%</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EAF5E3',
    padding: 20,
  },
  location: {
    fontSize: 14,
    color: 'white',
    fontWeight: 'bold'
  },
  weatherOverview: {
    backgroundColor: '#3A7BD5',
    borderRadius: 10,
    padding: 31,
    alignItems: 'center',
    flexDirection: 'row',
    gap: 15,
  },
  weatherInfo: {
    flexDirection: 'column',

  },
  temperatureOverview: {
    fontSize: 60,
    fontWeight: 'bold',
    letterSpacing: -2,
    color: '#fff',
  },
  date: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  weatherStatus: {
    fontSize: 14,
    color: '#fff',
    fontWeight: '200',
  },
  forecastList: {
    marginTop: 20,
  },
  forecastItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 10,
  },
  day: {
    fontSize: 16,
    color: '#000',
  },
  temperature: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  temperatureMin: {
    fontSize: 16,
    color: '#555',
  },
  aqiContainer: {
    marginTop: 20,
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    alignItems: 'center',
  },
  aqiText: {
    fontSize: 14,
    color: '#555',
  },
  aqiValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2f6d2f',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    marginBottom: 80
  },
  footerBox: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginHorizontal: 5,
  },
  footerTitle: {
    fontSize: 14,
    color: '#555',
  },
  footerValue: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2f6d2f',
  },
});
