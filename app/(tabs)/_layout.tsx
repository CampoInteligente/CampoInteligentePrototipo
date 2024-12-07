import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ 
      tabBarActiveTintColor: '#004809',
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
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="cog" color={color} />,
          headerShown: false
        }}
      />
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
          headerShown: false
        }}
      />
      <Tabs.Screen
        name="weather"
        options={{
          title: 'Clima',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="cog" color={color} />,
          headerShown: false
        }}
      />
    </Tabs>
  );
}
