import React from 'react';
import { Modal, View, Text, StyleSheet, Button, Image } from 'react-native';

interface Plant {
  name: string;
  description: string;
  imageUri: string;
}

interface PlantDetailsModalProps {
  plant: Plant | null;
  visible: boolean;
  onClose: () => void;
}

const PlantDetailsModal: React.FC<PlantDetailsModalProps> = ({ plant, visible, onClose }) => {
  if (!plant || !plant.name || !plant.imageUri || !plant.description) return null;

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>{plant.name}</Text>
          <Image source={{ uri: plant.imageUri }} style={styles.image} />
          <Text>{plant.description}</Text>
          <Button onPress={onClose} title="Close" />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',  
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20
  },
  image: {
    width: 250,
    height: 250,
    marginBottom: 15
  },
});

export default PlantDetailsModal;
