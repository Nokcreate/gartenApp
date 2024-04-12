import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import  * as React from 'react';
import Home from './screens/Home';
import NewPlant from './screens/NewPlant';
import MyPlants from './screens/MyPlants';
import Search from './screens/Search';



const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <View style={{ flex: 1}}>
    <NavigationContainer>
      
      <Tab.Navigator 
            initialRouteName='Home'
            screenOptions={{
            headerStyle: {
            backgroundColor: '#fff',
              },
            headerTintColor: '#000',
            headerTitleStyle: {
            fontWeight: 'bold',
              },
            tabBarActiveTintColor: '#6495ed',

      }}>
        <Tab.Screen name="Home" component={Home} options={{ tabBarLabel: 'Home' }} />
        <Tab.Screen name="NewPlant" component={NewPlant}/>
        <Tab.Screen name="MyPlants" component={MyPlants} />
        <Tab.Screen name="Search" component={Search} />


      </Tab.Navigator>
  </NavigationContainer>
  <StatusBar style="auto" />

    </View>
  );
}


