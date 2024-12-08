import { Ionicons } from '@expo/vector-icons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Entypo from '@expo/vector-icons/Entypo';
import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ 
      tabBarActiveTintColor: '#4CAF50',
      tabBarInactiveTintColor: 'white',
      tabBarStyle: {
        backgroundColor: '#127234', // Fundo da barra
        height: 70, // Altura da barra
        borderTopLeftRadius: 40, // Bordas arredondadas
        borderTopRightRadius: 40,
        paddingBottom: 10, // Espaço inferior
        paddingTop: 5,
        marginTop: -40
      },
      tabBarLabelStyle: {
        fontSize: 12, // Tamanho da fonte
        fontWeight: '600', // Peso da fonte
      },
      }}
    >
      <Tabs.Screen
        name="simulation"
        options={{
          title: 'Simulações',
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="chart-timeline-variant" size={28} color={color} />,
          headerShown: false
        }}
      />
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <Entypo name="home" size={28} color={color} />,
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="weather"
        options={{
          title: 'Clima',
          tabBarIcon: ({ color }) => <Ionicons size={28} name="cloud" color={color} />,
          headerShown: false
        }}
      />
    </Tabs>
  );
}
