import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootStackParamList = {
  bienvenida: undefined;
  perfil: undefined;
  perfil_adm: undefined;
};

type BienvenidaScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'bienvenida'>;
};

const bienvenida = ({ navigation }: BienvenidaScreenProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Presione un botón</Text>
      <View style={styles.buttonContainer}>
        <Button
          title="Perfil personal"
          onPress={() => navigation.navigate('perfil')}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Persona de admirar"
          onPress={() => navigation.navigate('perfil_adm')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,

  },
  buttonContainer: {
    marginVertical: 10, 
  },
});

export default bienvenida;
