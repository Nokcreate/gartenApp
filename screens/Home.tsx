import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';


export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>This is my Home</Text>
      </View>
      <Image
        style={styles.image}
        source={{ uri: 'https://mikepultz.com/wp-content/uploads/2012/03/cat_300.jpg' }}
      />
      <Text style={styles.smallText}>Keep track of watering schedules and care routines for your plants</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#90EE90',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerContainer: {
    flex: 1,
    justifyContent: 'center',
    textAlign: 'center',
    marginBottom: -20,
    width: '100%', 
    alignItems: 'center', 
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 24,
    color: '#fff',
  },
  image: {
    flex: 4,
    width: '100%',
    height: '80%',
    marginBottom:  30,
    
  },
  smallText: {
    flex: 1,
    fontSize: 16,
    color: '#fff',
    textAlign: 'left',
    padding: 10, 
  },
});
