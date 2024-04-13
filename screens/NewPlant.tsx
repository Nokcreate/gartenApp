import React, { useState } from 'react';
import { View, TextInput, Button, Image, Text, StyleSheet, ScrollView, Keyboard, TouchableWithoutFeedback } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { PlantService } from '../services/PlantService';
import { Plant } from '../model/Plant';
import { usePlants } from '../contexts/PlantContext';


const plantService = PlantService.getInstance();

function NewPlant(): React.FC {
  const {addPlant} = usePlants();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [imageUri, setImageUri] = useState('');
  


  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [1, 1], 
      quality: 1,
    });

    console.log(result); 

    if (!result.canceled) {
      setImageUri(result.assets[0].uri);
    }
  };

  const handleSubmit = () => {
    addPlant ({ name, description, imageUri });
    setName('');
    setDescription('');
    setImageUri('');
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <View style={styles.container}>
      <Text style={styles.header}>Add a New Plant</Text>
      <TextInput
        style={styles.input}
        placeholder="Plant Name"
        value={name}
        onChangeText={setName}
        returnKeyType="next"
        onSubmitEditing={Keyboard.dismiss}
      />
      <TextInput
        style={[styles.input, styles.description]}
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
        multiline={true}
        numberOfLines={4}
        returnKeyType="done"
        onSubmitEditing={Keyboard.dismiss}
      />
      <Button title="Select Image" onPress={pickImage} />
      {imageUri && <Image source={{ uri: imageUri }} style={styles.image} />}
      <Button title="Add Plant" onPress={handleSubmit} />
    </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: 'lightgreen'
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#fff',
  },
  input: {
    width: '100%',
    padding: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  description: {
    minHeight: 80,
  },
  image: {
    width: 250,
    height: 250,
    marginVertical: 20,
  }
});

export default NewPlant;
