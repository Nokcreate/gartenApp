// MyPlants.tsx
import React, { useState } from 'react';
import { View, Text, Image, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { usePlants } from '../contexts/PlantContext';
import PlantDetailsModal from '../components/Modal'; // Stelle sicher, dass der Pfad korrekt ist

const MyPlants = () => {
  const { plants } = usePlants();
  const [selectedPlant, setSelectedPlant] = useState<Plant | null>(null);
  const [modalVisible, setModalVisible] = useState(false);

  const openPlantDetails = (plant) => {
    console.log("Open plant details for:", plant.name);
    setSelectedPlant(plant);
    setModalVisible(true);
  };

  const Separator = () => {
    return <View style={styles.separator} />;
  };

  return (
    <>
      <FlatList
        data={plants}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => openPlantDetails(item)} style={styles.listItemContainer}>
            <Text style={styles.plantName}>{item.name}</Text>
            <Text style={styles.plantDescription}>{item.description}</Text>
            <Image source={{ uri: item.imageUri }} style={styles.image} />
          </TouchableOpacity>
        )}
        ItemSeparatorComponent={Separator}
      />
      {selectedPlant && (
        <PlantDetailsModal
          plant={selectedPlant}
          visible={modalVisible}
          onClose={() => setModalVisible(false)}
        />
      )}
    </>
  );
};

const styles = StyleSheet.create({
  headline: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center'

  },
  listItemContainer: {
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  plantName: {
    fontWeight: 'bold',
    flex: 1
  },
  plantDescription: {
    color: 'grey',
    flex: 3
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    flex: 1
  },
  separator: {
    height: 1,
    width: '100%',
    backgroundColor: '#CED0CE', // Wähle eine Farbe, die gut zu deinem Design passt
  },
});

export default MyPlants;
