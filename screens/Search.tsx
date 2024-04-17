import React, { useState, useEffect, ReactElement } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image, Modal, ListRenderItemInfo, Button, Keyboard } from 'react-native';
import { TREFLE_API_KEY } from '@env';
import InputField from '../components/InputField';
import CustomButton from '../components/customButton';

interface Plant {
  id: number;
  common_name: string;
  scientific_name: string;
  image_url: string;
}

const SearchScreen = (): ReactElement => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [results, setResults] = useState<Plant[]>([]);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);


  const fetchPlants = async (): Promise<void> => {
    if (searchTerm.trim() === '') {
      setResults([]);
      Keyboard.dismiss();
      return;
    }
    try {
      const response = await fetch(`https://trefle.io/api/v1/plants/search?token=${TREFLE_API_KEY}&q=${searchTerm}`);
      const data = await response.json();
      setResults(data.data || []);
    } catch (error) {
      console.error('Fehler beim Abrufen der Pflanzendaten:', error);
      setResults([]);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchPlants();
    }, 500); 
    return () => clearTimeout(timer);
  }, [searchTerm]);

  const openImage = (imageUrl: string): void => {
    setSelectedImage(imageUrl);
  };

  const closeImage = (): void => {
    setSelectedImage(null);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headline}>Suche nach Pflanzen</Text>
      <View style={styles.searchContainer}>
        <InputField
          style={styles.searchInput}
          placeholder="Suche Pflanzen..."
          value={searchTerm}
          onChangeText={setSearchTerm}
        />
        <CustomButton
          title="Suchen"
          onPress={fetchPlants} // Trigger search when the button is pressed

        />
      </View>
      <FlatList
        data={results}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }: ListRenderItemInfo<Plant>) => (
          <View style={styles.item}>
            <Text style={styles.plantName}>{item.common_name}</Text>
            <Text style={styles.scientificName}>{item.scientific_name}</Text>
            <TouchableOpacity onPress={() => openImage(item.image_url)} style={styles.imageContainer}>
              <Image source={{ uri: item.image_url }} style={styles.image} />
            </TouchableOpacity>
          </View>
        )}
      />
      <Modal visible={!!selectedImage} transparent={true} animationType="fade">
        <TouchableOpacity style={styles.modal} onPress={closeImage}>
          <Image source={{ uri: selectedImage! }} style={styles.fullImage} />
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#90EE90',
  },
  headline: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#fff',
    textAlign: 'center',
  },
  searchContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  searchInput: {
    flex: 1,
    height: 40,
    borderColor: 'gray',
    padding: 10,
    marginRight: 10,
    backgroundColor: '#fff',
  },
  item: {
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    backgroundColor: '#fff',
  },
  plantName: {
    fontSize: 18,
    fontWeight: 'bold',
    flex: 1, // Adjust this flex value to change the space allocation
  },
  scientificName: {
    fontSize: 16,
    flex: 2, // Adjust this flex value to change the space allocation
    marginLeft: 40,

  },
  imageContainer: {
    flex: 1, // Adjust this flex value to change the space allocation
  },
  image: {
    width: 50,
    height: 50,
    marginLeft: 10,
  },
  fullImage: {
    width: '100%',
    height: '100%',
  },
  modal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.8)',
  },
});

export default SearchScreen;
