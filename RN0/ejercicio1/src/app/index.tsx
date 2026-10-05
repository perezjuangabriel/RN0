import { StyleSheet, Text, View, useColorScheme } from 'react-native';

// Pantalla principal (Primer Tab)
// Muestra el saludo inicial solicitado por la consigna.
export default function HomeScreen() {
  // Detectamos si el dispositivo está en modo oscuro
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  return (
    <View style={[styles.container, isDark ? styles.containerDark : styles.containerLight]}>
      <Text style={[styles.title, isDark ? styles.textDark : styles.textLight]}>
        Hola Mundo
      </Text>
      <Text style={[styles.subtitle, isDark ? styles.textDark : styles.textLight]}>
        Este es mi primer proyecto de React Native utilizando Expo.
      </Text>
    </View>
  );
}

// Estilos separados de la vista para mantener el código ordenado
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  containerLight: {
    backgroundColor: '#F3F4F6',
  },
  containerDark: {
    backgroundColor: '#111827',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
  },
  textLight: {
    color: '#1F2937',
  },
  textDark: {
    color: '#F9FAFB',
  },
});
