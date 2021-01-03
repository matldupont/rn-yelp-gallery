import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SearchScreen } from './src/screens/search-screen'
import { GalleryScreen } from './src/screens/gallery-screen'


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Search"
        screenOptions={{ title: 'Business Search' }}
      >
        <Stack.Screen
          name="Search"
          component={SearchScreen}
        />
        <Stack.Screen
          name="Gallery"
          component={GalleryScreen}
        />
      </Stack.Navigator>  
    </NavigationContainer>
  );
}
