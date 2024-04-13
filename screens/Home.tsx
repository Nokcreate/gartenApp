import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      {/* Umfasse den Text mit einem View, um Flexbox-Eigenschaften zu nutzen */}
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>This is my Home</Text>
      </View>
      <Image
        style={styles.image}
        source={{ uri: 'https://your-image-url.com/image.jpg' }}
      />
      <Text style={styles.smallText}>Keep track of watering schedules and care routines for your plants</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00FF00',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerContainer: {
    flex: 2,
    
    justifyContent: 'center', // Zentriert den Inhalt vertikal
    width: '100%', // Macht den Container so breit wie möglich
    alignItems: 'center', // Zentriert den Inhalt horizontal
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 24,
    color: '#fff',
  },
  image: {
    flex: 4,
    width: 200, // Breite des Bildes anpassen
    height: 200, // Höhe des Bildes anpassen
    marginBottom: 20, // Abstand zum Text
    
  },
  smallText: {
    flex: 1,
    fontSize: 16,
    color: '#fff',
    textAlign: 'left', // Setzt die Textausrichtung auf links
  },
});
