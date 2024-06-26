// MyPlants.tsx
import React, { useState } from 'react';
import { View, Text, Image, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { usePlants } from '../contexts/PlantContext';
import PlantDetailsModal from '../components/Modal'; 

interface Plant {
  id: number;
  name: string;
  description: string;
  imageUri: string;
}


const MyPlants = () => {
  const { plants } = usePlants();
  const [selectedPlant, setSelectedPlant] = useState<Plant | null>(null);
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  const openPlantDetails = (plant : Plant) => {
    console.log("Open plant details for:", plant.name);
    setSelectedPlant(plant);
    setModalVisible(true);
  };

  const Separator = () => {
    return <View style={styles.separator} />;
  };

  return (
    <>
    <View style={styles.container}>
    <Text style={styles.headline}>My Plants</Text>
      <FlatList
        data={plants}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => openPlantDetails(item as Plant)} style={styles.listItemContainer}>
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
    </View>
    </>
  );
};

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#90EE90',
    padding: 10,
    justifyContent: 'center',
  },
  headline: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 10,
    textAlign: 'center',
    color: '#fff'

  },
  listItemContainer: {
    flex: 1,
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderBottomEndRadius: 10,
    borderTopStartRadius: 10,
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
    backgroundColor: '#CED0CE', 
  },
});

export default MyPlants;
