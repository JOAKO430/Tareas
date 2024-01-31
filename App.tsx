import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator, } from '@react-navigation/native-stack';

import bienvenida from './bienvenida'; 
import perfil from './perfil'; 
import perfiladm from './perfil_adm';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Bienvenida">
        <Stack.Screen name="Bienvenida" component={bienvenida} />
        <Stack.Screen name="perfil" component={perfil} />
        <Stack.Screen name="perfil_adm" component={perfiladm} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

