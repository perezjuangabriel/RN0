import { Stack } from 'expo-router';
import { useColorScheme } from 'react-native';

// Layout principal para el ejercicio 2.
// Utiliza un Stack simple ya que solo necesitamos una pantalla para mostrar los componentes.
export default function Layout() {
  const isDark = useColorScheme() === 'dark';

  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: isDark ? '#111827' : '#FFFFFF',
        },
        headerTintColor: isDark ? '#F9FAFB' : '#111827',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen 
        name="index" 
        options={{ 
          title: 'Componentes Nativos',
        }} 
      />
    </Stack>
  );
}
