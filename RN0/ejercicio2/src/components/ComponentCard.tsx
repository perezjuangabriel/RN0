import React, { ReactNode } from 'react';
import { View, Text, StyleSheet, useColorScheme } from 'react-native';

interface ComponentCardProps {
  name: string;
  description: string;
  children: ReactNode; // Contenido interactivo o visual del ejemplo
}

// Este componente representa una tarjeta reutilizable
// utilizada para mostrar información sobre un componente nativo de React Native.
// Se utiliza en la pantalla principal para evitar repetir código.
export default function ComponentCard({ name, description, children }: ComponentCardProps) {
  const isDark = useColorScheme() === 'dark';

  return (
    <View style={[styles.card, isDark ? styles.cardDark : styles.cardLight]}>
      <Text style={[styles.name, isDark ? styles.textDark : styles.textLight]}>{name}</Text>
      
      <Text style={[styles.subtitle, isDark ? styles.textDark : styles.textLight]}>¿Para qué sirve?</Text>
      <Text style={[styles.description, isDark ? styles.textDark : styles.textLight]}>{description}</Text>
      
      <Text style={[styles.subtitle, isDark ? styles.textDark : styles.textLight]}>Ejemplo</Text>
      <View style={[styles.exampleContainer, isDark ? styles.exampleDark : styles.exampleLight]}>
        {children}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 16,
    borderRadius: 12,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardLight: {
    backgroundColor: '#FFFFFF',
  },
  cardDark: {
    backgroundColor: '#1F2937',
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 12,
    marginBottom: 4,
  },
  description: {
    fontSize: 14,
    marginBottom: 8,
    lineHeight: 20,
  },
  textLight: {
    color: '#111827',
  },
  textDark: {
    color: '#F9FAFB',
  },
  exampleContainer: {
    marginTop: 8,
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 100, // Altura mínima para que los ejemplos se vean bien
  },
  exampleLight: {
    backgroundColor: '#F3F4F6',
  },
  exampleDark: {
    backgroundColor: '#374151',
  },
});
