import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View, Image, Button } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootStackParamList = {
    Bienvenida: undefined;
    Perfil: undefined;
    PerfilAdm: undefined;
};

type perfilNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Perfil'>;

const perfil = ({ navigation }: { navigation: perfilNavigationProp }) => {
  return (
    <SafeAreaView>
      <ScrollView
        contentContainerStyle={styles.svContenedor}
        contentInsetAdjustmentBehavior="automatic">
        <Image
          style={styles.fotoperfil}
          source={require('./imagenes/personal_foto.jpeg')}
        />
        <Text style={styles.encabezado}>DIEGO ERNESTO BURGOS MEZA</Text>
        
        <View style={styles.seccion}>
          <Text style={styles.seccionHeader}>Fecha de nacimiento:</Text>
          <Text style={styles.seccionContent}>01/02/2005</Text>
        </View>
        <View style={styles.seccion}>
          <Text style={styles.seccionHeader}>Pasatiempos:</Text>
          <Text style={styles.seccionContent}>Jugar videojuegos, jugar futbol, Hornear</Text>
        </View>
        <View style={styles.seccion}>
          <Text style={styles.seccionHeader}>Otros:</Text>
          <Text style={styles.seccionContent}>Me gusta ver futbol, soy del Barca, me gusta mucho hacer actividad física</Text>
        </View>
        
        <View style={styles.buttonContainer}>
          <Button
            title="Volver"
            onPress={() => navigation.navigate('Bienvenida')}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  encabezado: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#003708', 
  },
  svContenedor: {
    alignItems: 'center',
  },
  fotoperfil: {
    width: 200,
    height: 220,
  },
  seccion: {
    alignSelf: 'stretch',  
    backgroundColor: '#fff', 
    padding: 10,  
    marginVertical: 5, 
    borderRadius: 10, 
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5, 
  },
  seccionHeader: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#333', 
    marginBottom: 5, 
  },
  seccionContent: {
    fontSize: 16,
    color: '#666', 
  },
  buttonContainer: {
    marginVertical: 10,

  },
});

export default perfil;
