import { Tabs } from 'expo-router';
import { useColorScheme } from 'react-native';

// Este es el layout principal de la aplicación.
// Define la navegación basada en pestañas (tabs) utilizando expo-router.
export default function TabLayout() {
  // Obtenemos el esquema de color del sistema para aplicar modo claro u oscuro
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  return (
    <Tabs
      screenOptions={{
        // Configuramos los colores de la barra de navegación según el modo
        tabBarActiveTintColor: isDark ? '#60A5FA' : '#2563EB',
        tabBarInactiveTintColor: isDark ? '#9CA3AF' : '#6B7280',
        tabBarStyle: {
          backgroundColor: isDark ? '#1F2937' : '#FFFFFF',
        },
        headerStyle: {
          backgroundColor: isDark ? '#1F2937' : '#FFFFFF',
        },
        headerTintColor: isDark ? '#F9FAFB' : '#111827',
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Inicio',
          tabBarLabel: 'Inicio',
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Explorar',
          tabBarLabel: 'Explorar',
        }}
      />
    </Tabs>
  );
}
