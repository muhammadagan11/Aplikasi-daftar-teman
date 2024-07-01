import React from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';

export default function FriendDetailScreen({ route, navigation }) {
  const { friend } = route.params;

  return (
    <View style={styles.container}>
      <Image source={friend.image} style={styles.profileImage} />
      <Text style={styles.name}>{friend.name}</Text>
      <Text style={styles.description}>{friend.description1}</Text>
      <Text style={styles.description}>{friend.description2}</Text>
      <Button title="Back to Friend List" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center', // Memastikan semua elemen berada di tengah secara vertikal
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center', // Memastikan nama teman berada di tengah
  },
  description: {
    fontSize: 16,
    textAlign: 'center', // Memastikan deskripsi berada di tengah
    marginBottom: 10, // Menambah jarak antar deskripsi
    paddingHorizontal: 10, // Menambah padding horizontal untuk mencegah teks terlalu dekat dengan tepi
  },
});
