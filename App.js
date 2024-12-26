import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import CategoryScreen from './screens/CategoryScreen';
import HomeScreen from './screens/HomeScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Toko Baju Berkah' }} />
          <Stack.Screen name="Category" component={CategoryScreen} options={{ title: 'Kategori Pakaian' }} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
