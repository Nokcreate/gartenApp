// MyPlants.tsx
import React from 'react';
import { usePlants } from '../contexts/PlantContext';
import { View, Text, Image, ScrollView } from 'react-native';
import { StyleSheet } from 'react-native';

export const MyPlants = () => {
  const { plants } = usePlants();

  return (
    <ScrollView style={styles.container}>
      {plants.map((plant, index) => (
        <View key={index}>
          <Text style={styles.name}>{plant.name}</Text>
          <Text>{plant.description}</Text>
          <Image source={{ uri: plant.imageUri }} style={{ width: 100, height: 100 }} />
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'lightgreen',
    flexDirection: 'row',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#000',
  },
});

export default MyPlants;
