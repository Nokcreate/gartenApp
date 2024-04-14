import React, { useState, useEffect } from 'react';
import { View, TextInput, Text, FlatList, StyleSheet, TouchableOpacity, Image, Modal } from 'react-native';
import { TREFLE_API_KEY } from '@env';

const SearchScreen = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  const fetchPlants = async () => {
    if (searchTerm.trim() === '') {
      setResults([]);
      return;
    }
    try {
      const response = await fetch(`https://trefle.io/api/v1/plants/search?token=${TREFLE_API_KEY}&q=${searchTerm}`);
      const data = await response.json();
      setResults(data.data);
    } catch (error) {
      console.error('Fehler beim Abrufen der Pflanzendaten:', error);
      setResults([]);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchPlants();
    }, 500); // Debounce the API call by 500ms
    return () => clearTimeout(timer);
  }, [searchTerm]);

  const openImage = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headline}>Suche nach Pflanzen</Text>
      <TextInput
        style={styles.searchInput}
        placeholder="Suche Pflanzen..."
        value={searchTerm}
        onChangeText={setSearchTerm}
      />
      <FlatList
        data={results}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
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
          <Image source={{ uri: selectedImage }} style={styles.fullImage} />
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: 'lightgreen',
  },
  headline: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#fff',
    textAlign: 'center',
  },
  searchInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
    marginRight: 100,
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
