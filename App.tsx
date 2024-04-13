import { StatusBar, } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import  * as React from 'react';
import Home from './screens/Home';
import NewPlant from './screens/NewPlant';
import MyPlants from './screens/MyPlants';
import Search from './screens/Search';
import { PlantProvider } from './contexts/PlantContext';



// Setup für die Navigation
const Tab = createBottomTabNavigator();

// Hauptkomponente der App
const App: React.FC = () => {
  return (
    <View style={{ flex: 1 }}>
    <PlantProvider>

      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerStyle: { backgroundColor: '#fff' },
            headerTintColor: '#000',
            headerTitleStyle: { fontWeight: 'bold' },
            tabBarActiveTintColor: '#6495ed',
          }}
        >
          <Tab.Screen name="Home" component={Home} options={{ tabBarLabel: 'Home' }} />
          <Tab.Screen name="New Plant" component={NewPlant} options={{ tabBarLabel: 'New Plant' }} />
          <Tab.Screen name="My Plants" component={MyPlants} options={{ tabBarLabel: 'My Plants' }} />
          <Tab.Screen name="Search" component={Search} options={{ tabBarLabel: 'Search' }} />
        </Tab.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
      </PlantProvider>
    </View>
  );
}

export default App;