import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Content() {
  return (
    <View style={styles.contentContainer}>
      <Text style={styles.text}>P2-LAB-DPM</Text>
      <View style={styles.boxContainer}>
        <View style={styles.box1}></View>
        <View style={styles.box2}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 24,
    color: 'blue',
    fontWeight: 'bold', // Gaya teks tebal
    marginBottom: 20,
  },
  boxContainer: {
    flexDirection: 'row', // Menyusun secara horizontal
    justifyContent: 'space-between', // Memberi jarak merata di antara kotak
    width: '80%', // Lebar kotak kontainer
  },
  box1: {
    width: 100,
    height: 100,
    backgroundColor: 'red', // Warna kotak pertama
  },
  box2: {
    width: 100,
    height: 100,
    backgroundColor: 'green', // Warna kotak kedua
  },
});
