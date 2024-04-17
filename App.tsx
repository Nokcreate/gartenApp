import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'; 
import Home from './screens/Home';
import NewPlant from './screens/NewPlant';
import MyPlants from './screens/MyPlants';
import Search from './screens/Search';
import { PlantProvider } from './contexts/PlantContext';


const Tab = createBottomTabNavigator();

const App: React.FC = () => {
  return (
    <PlantProvider>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Home"
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName: string;
              switch (route.name) {
                case 'Home':
                  iconName = focused ? 'home' : 'home-outline';
                  break;
                case 'New Plant':
                  iconName = focused ? 'leaf' : 'leaf-outline';
                  break;
                case 'My Plants':
                  iconName = focused ? 'list' : 'list-outline';
                  break;
                case 'Search':
                  iconName = focused ? 'search' : 'search-outline';
                  break;
                default:
                  iconName = 'alert-circle';
              }

             
              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: 'green',
            tabBarInactiveTintColor: 'gray',
          })}
        >
          <Tab.Screen name="Home" component={Home} options={{ tabBarLabel: 'Home' }} />
          <Tab.Screen name="New Plant" component={NewPlant} options={{ tabBarLabel: 'New Plant' }} />
          <Tab.Screen name="My Plants" component={MyPlants} options={{ tabBarLabel: 'My Plants' }} />
          <Tab.Screen name="Search" component={Search} options={{ tabBarLabel: 'Search' }} />
        </Tab.Navigator>
      </NavigationContainer>
    </PlantProvider>
  );
};
export default App;
