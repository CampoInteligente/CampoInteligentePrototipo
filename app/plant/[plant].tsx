import { images } from "@/assets/images";
import { useLocalSearchParams } from "expo-router";
import { Image, StyleSheet, Text, View } from "react-native";

interface Plant {
  id: string;
  name: string;
  image: any;
}

const DATA: Plant[] = [
  { id: '1', name: 'Brócolis', image: images.brocolis },
  { id: '2', name: 'Pepino', image: images.pepino },
  { id: '3', name: 'Batata', image: images.batata },
  { id: '4', name: 'Cebola', image: images.cebola },
  { id: '5', name: 'Alface', image: images.alface },
];

export default function Plant() {
  const { plant } = useLocalSearchParams();

  const plantId = Array.isArray(plant) ? plant[0] : plant;
  
  function getPlantById(id: string): Plant | undefined {
    return DATA.find(plant => plant.id === id);
  }

  const selectedPlant = getPlantById(plantId);
  
  return (
    <View style={styles.container}>
      <Text>
        {selectedPlant!.name}
      </Text>
      <Image source={selectedPlant!.image} />
      <Text>
        {selectedPlant!.id}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EAF5E3',
    padding: 16
  }
});