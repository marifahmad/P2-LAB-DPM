import React from 'react';
import { StyleSheet, View } from 'react-native';
import Content from './Content'; // Import komponen Content

export default function App() {
  return (
    <View style={styles.container}>
      <Content /> {/* Menggunakan komponen Content */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d3d3d3', // Latar belakang abu-abu terang
  },
});
