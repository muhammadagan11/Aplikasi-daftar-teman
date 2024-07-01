import React from 'react';
import { View, Text, Button, FlatList, StyleSheet, Image } from 'react-native';

// Daftar data teman
const friends = [
  { id: '1', name: 'Muhamad Haikal Lukman', description1: '2130511040', description2: 'Teknik Informatika 6A', image: require('../assets/haikal.png') },
  { id: '2', name: 'Agung Prayoga', description1: '2130511044', description2: 'Teknik Informatika 6A', image: require('../assets/agung.png') },
  { id: '3', name: 'Candra Kususma Hidayat', description1: '2130511049', description2: 'Teknik Informatika 6A', image: require('../assets/candra.png') },
  { id: '4', name: 'Aldy Ramdani', description1: '2130511002', description2: 'Teknik Informatika 6A', image: require('../assets/aldy.png') },
  { id: '5', name: 'Muhamad Insan Fadilah', description1: '2130511031', description2: 'Teknik Informatika 6A', image: require('../assets/ican.png') },
];

// Komponen utama untuk menampilkan daftar teman
export default function FriendListScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <FlatList
        data={friends} // Data yang akan ditampilkan dalam daftar
        keyExtractor={(item) => item.id} // Menentukan key untuk setiap item
        renderItem={({ item }) => ( // Render setiap item dari data
          <View style={styles.friendItem}>
            <Image source={item.image} style={styles.profileImage} />
            <View style={styles.textContainer}>
              <Text style={styles.friendName}>{item.name}</Text>
              <Button
                title="View Details" // Judul tombol
                onPress={() => navigation.navigate('FriendDetail', { friend: item })} // Aksi saat tombol ditekan
              />
            </View>
          </View>
        )}
      />
    </View>
  );
}

// Gaya komponen
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  friendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 20,
  },
  textContainer: {
    flex: 1,
  },
  friendName: {
    fontSize: 18,
    marginBottom: 5,
  },
});
