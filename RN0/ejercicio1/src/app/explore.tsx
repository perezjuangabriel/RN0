import { StyleSheet, Text, View, useColorScheme, TouchableOpacity } from 'react-native';
import { useState } from 'react';

// Pantalla secundaria (Segundo Tab)
// Demuestra contenido diferente y estilos propios aplicados a una tarjeta.
export default function ExploreScreen() {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';
  
  // Estado simple para demostrar funcionalidad interactiva
  const [count, setCount] = useState(0);

  // Esta función incrementa un contador al presionar el botón
  const handlePress = () => {
    setCount(count + 1);
  };

  return (
    <View style={[styles.container, isDark ? styles.containerDark : styles.containerLight]}>
      {/* Tarjeta con estilos diferentes al primer tab */}
      <View style={[styles.card, isDark ? styles.cardDark : styles.cardLight]}>
        <Text style={[styles.title, isDark ? styles.textDark : styles.textLight]}>
          ¡Bienvenido al segundo Tab!
        </Text>
        <Text style={[styles.description, isDark ? styles.textDark : styles.textLight]}>
          Este tab tiene contenido diferente y muestra una tarjeta con estilos propios y algo de interactividad.
        </Text>
        
        {/* Botón interactivo */}
        <TouchableOpacity 
          style={[styles.button, isDark ? styles.buttonDark : styles.buttonLight]}
          onPress={handlePress}
        >
          <Text style={styles.buttonText}>Presionado {count} veces</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  containerLight: {
    backgroundColor: '#FFFFFF', // Fondo diferente al primer tab
  },
  containerDark: {
    backgroundColor: '#030712',
  },
  card: {
    padding: 24,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4, // Sombra para Android
    alignItems: 'center',
  },
  cardLight: {
    backgroundColor: '#F3F4F6',
  },
  cardDark: {
    backgroundColor: '#1F2937',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 12,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 24,
  },
  textLight: {
    color: '#111827',
  },
  textDark: {
    color: '#F9FAFB',
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 8,
  },
  buttonLight: {
    backgroundColor: '#2563EB',
  },
  buttonDark: {
    backgroundColor: '#3B82F6',
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
