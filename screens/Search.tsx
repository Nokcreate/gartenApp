import { TREFLE_API_KEY } from '@env';
import React from 'react';
import { View, Text } from 'react-native';

const SearchScreen = () => {
  // Beispiel für eine Funktion, die Daten von Trefle.io abruft
  const fetchPlants = async () => {
    try {
      const response = await fetch(`https://trefle.io/api/v1/plants?token=${TREFLE_API_KEY}`);
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Fehler beim Abrufen der Pflanzendaten:', error);
    }
  };

  return (
    <View>
      <Text onPress={fetchPlants}>Lade Pflanzendaten</Text>
    </View>
  );
};


export default SearchScreen;