import React, { useState } from 'react';
import { 
  StyleSheet, Text, View, Image, TextInput, Button, Pressable, 
  TouchableOpacity, ScrollView, FlatList, SectionList, 
  ActivityIndicator, Modal, Switch, SafeAreaView, 
  KeyboardAvoidingView, StatusBar, useColorScheme, Platform 
} from 'react-native';
import ComponentCard from '../components/ComponentCard';

// Datos de ejemplo para utilizar en FlatList y SectionList
const DATA = [
  { id: '1', title: 'Elemento de lista 1' },
  { id: '2', title: 'Elemento de lista 2' },
  { id: '3', title: 'Elemento de lista 3' },
];

const SECTION_DATA = [
  {
    title: 'Frutas',
    data: ['Manzana', 'Banana'],
  },
  {
    title: 'Verduras',
    data: ['Zanahoria', 'Lechuga'],
  },
];

// Esta pantalla contiene la demostración de los componentes nativos principales de React Native.
// Utilizamos ScrollView para poder desplazarnos por todas las tarjetas sin que el contenido se corte.
export default function App() {
  const isDark = useColorScheme() === 'dark';
  
  // Estados para demostrar interactividad en algunos componentes
  const [textValue, setTextValue] = useState('');
  const [buttonPressed, setButtonPressed] = useState(false);
  const [pressablePressed, setPressablePressed] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [isEnabled, setIsEnabled] = useState(false);

  return (
    // SafeAreaView asegura que el contenido no quede debajo de los bordes o notches del dispositivo
    <SafeAreaView style={[styles.container, isDark ? styles.containerDark : styles.containerLight]}>
      
      {/* StatusBar permite configurar el estilo de la barra de estado superior del teléfono */}
      <StatusBar barStyle={isDark ? 'light-content' : 'dark-content'} />
      
      {/* KeyboardAvoidingView asegura que el teclado no cubra los campos de entrada de texto */}
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
      >
        <ScrollView contentContainerStyle={styles.scrollContent}>
          
          <Text style={[styles.headerTitle, isDark ? styles.textDark : styles.textLight]}>
            Guía de Componentes Nativos
          </Text>
          <Text style={[styles.headerDesc, isDark ? styles.textDark : styles.textLight]}>
            Explora de manera interactiva los componentes fundamentales de React Native.
          </Text>

          {/* Secciones de Componentes Nativos demostrados a través de ComponentCard */}

          <ComponentCard 
            name="View" 
            description="Es el bloque de construcción fundamental de las interfaces, similar a un <div> en HTML. Sirve para contener, estructurar y dar estilo a otros componentes."
          >
            <View style={styles.boxExample}>
              <Text style={styles.whiteText}>Soy un View</Text>
            </View>
          </ComponentCard>

          <ComponentCard 
            name="Text" 
            description="Permite mostrar texto dentro de una aplicación React Native. Soporta anidamiento y estilos."
          >
            <Text style={[styles.textExample, isDark ? styles.textDark : styles.textLight]}>
              Hola desde <Text style={{fontWeight: 'bold', color: '#3B82F6'}}>React Native</Text>
            </Text>
          </ComponentCard>

          <ComponentCard 
            name="Image" 
            description="Se utiliza para mostrar imágenes, ya sea desde la red, archivos locales o base64."
          >
            <Image 
              source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }} 
              style={{ width: 60, height: 60 }} 
            />
          </ComponentCard>

          <ComponentCard 
            name="TextInput" 
            description="Permite al usuario ingresar texto mediante el teclado nativo del dispositivo."
          >
            <TextInput
              style={[styles.input, isDark ? styles.inputDark : styles.inputLight]}
              placeholder="Escribe algo aquí..."
              placeholderTextColor={isDark ? '#9CA3AF' : '#6B7280'}
              value={textValue}
              onChangeText={setTextValue}
            />
            <Text style={[isDark ? styles.textDark : styles.textLight, {marginTop: 10}]}>
              Escribiste: {textValue || '...'}
            </Text>
          </ComponentCard>

          <ComponentCard 
            name="Button" 
            description="Un botón básico proporcionado por el sistema con estilos nativos y limitados."
          >
            <Button 
              title={buttonPressed ? "¡Botón presionado!" : "Presióname"} 
              onPress={() => setButtonPressed(!buttonPressed)} 
            />
          </ComponentCard>

          <ComponentCard 
            name="TouchableOpacity" 
            description="Una envoltura que hace que las vistas respondan a los toques. Reduce su opacidad ligeramente al ser presionado para dar un feedback visual intuitivo."
          >
            <TouchableOpacity style={styles.customButton} onPress={() => {}}>
              <Text style={styles.whiteText}>Tócame suavemente</Text>
            </TouchableOpacity>
          </ComponentCard>

          <ComponentCard 
            name="Pressable" 
            description="Una alternativa más moderna a TouchableOpacity. Ofrece control avanzado sobre los estados de interacción (presionado, enfoque, hover)."
          >
            <Pressable 
              style={({ pressed }) => [
                styles.customButton,
                { backgroundColor: pressed ? '#1E3A8A' : '#3B82F6' }
              ]}
              onPressIn={() => setPressablePressed(true)}
              onPressOut={() => setPressablePressed(false)}
            >
              <Text style={styles.whiteText}>
                {pressablePressed ? '¡Me estás presionando!' : 'Mantén presionado'}
              </Text>
            </Pressable>
          </ComponentCard>

          <ComponentCard 
            name="ActivityIndicator" 
            description="Muestra un indicador circular de carga. Útil para indicar al usuario que hay una operación en progreso."
          >
            <ActivityIndicator size="large" color="#3B82F6" />
          </ComponentCard>

          <ComponentCard 
            name="Switch" 
            description="Un componente visual tipo interruptor, muy común en pantallas de configuración para opciones de encendido/apagado."
          >
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text style={[isDark ? styles.textDark : styles.textLight, {marginRight: 10, fontSize: 16}]}>
                {isEnabled ? 'Activado' : 'Desactivado'}
              </Text>
              <Switch
                trackColor={{ false: '#767577', true: '#BFDBFE' }}
                thumbColor={isEnabled ? '#3B82F6' : '#f4f3f4'}
                onValueChange={() => setIsEnabled(!isEnabled)}
                value={isEnabled}
              />
            </View>
          </ComponentCard>

          <ComponentCard 
            name="Modal" 
            description="Proporciona una forma sencilla de presentar contenido en una ventana flotante por encima de la vista principal."
          >
            <Button title="Abrir Modal" onPress={() => setModalVisible(true)} />
            
            <Modal
              animationType="fade"
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => setModalVisible(false)}
            >
              <View style={styles.modalOverlay}>
                <View style={[styles.modalView, isDark ? styles.modalDark : styles.modalLight]}>
                  <Text style={[styles.modalText, isDark ? styles.textDark : styles.textLight]}>
                    ¡Hola! Soy un componente Modal nativo.
                  </Text>
                  <Button title="Cerrar Modal" onPress={() => setModalVisible(false)} />
                </View>
              </View>
            </Modal>
          </ComponentCard>

          <ComponentCard 
            name="FlatList" 
            description="Un componente altamente optimizado para renderizar listas simples y largas de datos sin afectar el rendimiento."
          >
            <View style={{ height: 130, width: '100%' }}>
              <FlatList
                data={DATA}
                keyExtractor={item => item.id}
                nestedScrollEnabled={true}
                renderItem={({ item }) => (
                  <View style={[styles.listItem, isDark ? styles.listItemDark : styles.listItemLight]}>
                    <Text style={isDark ? styles.textDark : styles.textLight}>{item.title}</Text>
                  </View>
                )}
              />
            </View>
          </ComponentCard>

          <ComponentCard 
            name="SectionList" 
            description="Similar a FlatList, pero especializado en renderizar listas de datos agrupadas en distintas secciones con sus propios encabezados."
          >
            <View style={{ height: 180, width: '100%' }}>
              <SectionList
                sections={SECTION_DATA}
                keyExtractor={(item, index) => item + index}
                nestedScrollEnabled={true}
                renderItem={({ item }) => (
                  <View style={[styles.listItem, isDark ? styles.listItemDark : styles.listItemLight]}>
                    <Text style={isDark ? styles.textDark : styles.textLight}>{item}</Text>
                  </View>
                )}
                renderSectionHeader={({ section: { title } }) => (
                  <Text style={[styles.sectionHeader, isDark ? styles.sectionDark : styles.sectionLight]}>
                    {title}
                  </Text>
                )}
              />
            </View>
          </ComponentCard>

        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

// Estilos centrales de la aplicación
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerLight: {
    backgroundColor: '#F3F4F6',
  },
  containerDark: {
    backgroundColor: '#030712',
  },
  scrollContent: {
    padding: 16,
    paddingBottom: 40,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
  },
  headerDesc: {
    fontSize: 16,
    marginBottom: 24,
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  textLight: {
    color: '#111827',
  },
  textDark: {
    color: '#F9FAFB',
  },
  boxExample: {
    width: 120,
    height: 120,
    backgroundColor: '#3B82F6',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
  },
  whiteText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
  textExample: {
    fontSize: 18,
  },
  input: {
    height: 48,
    width: '100%',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    fontSize: 16,
  },
  inputLight: {
    borderColor: '#D1D5DB',
    color: '#111827',
    backgroundColor: '#FFFFFF',
  },
  inputDark: {
    borderColor: '#4B5563',
    color: '#F9FAFB',
    backgroundColor: '#1F2937',
  },
  customButton: {
    backgroundColor: '#3B82F6',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.6)', // Fondo oscurecido semitransparente
  },
  modalView: {
    margin: 20,
    borderRadius: 16,
    padding: 30,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 8,
  },
  modalLight: {
    backgroundColor: '#FFFFFF',
  },
  modalDark: {
    backgroundColor: '#1F2937',
  },
  modalText: {
    marginBottom: 20,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '500',
  },
  listItem: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  listItemLight: {
    backgroundColor: '#FFFFFF',
  },
  listItemDark: {
    backgroundColor: '#374151',
    borderBottomColor: '#4B5563',
  },
  sectionHeader: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    fontSize: 14,
    fontWeight: 'bold',
  },
  sectionLight: {
    backgroundColor: '#E5E7EB',
    color: '#111827',
  },
  sectionDark: {
    backgroundColor: '#111827',
    color: '#D1D5DB',
  },
});
