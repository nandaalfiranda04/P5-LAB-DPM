import React, { useState } from 'react';
import { FlatList, Image, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Button, Card, Paragraph, Title } from 'react-native-paper';

export default function CategoryScreen({ route, navigation }) {
  const { categoryName } = route.params;

  // Data pakaian berdasarkan kategori
  const data = {
    Kemeja: [
      {
        id: '1',
        name: 'Kemeja Putih Polos',
        description: 'Kemeja formal dengan bahan berkualitas.',
        image: 'https://1.bp.blogspot.com/-s64hFg_F3pI/Wl60W9zk-jI/AAAAAAAAAbk/I72fWc8YaOUkFP8UG-BbiwQ7XwxSyTDtACLcBGAs/s1600/1.%2BKemeja%2BFormal%2BPutih%2BPolos.jpg',
      },
      {
        id: '2',
        name: 'Kemeja Batik',
        description: 'Kemeja batik modern untuk acara resmi.',
        image: 'https://s1.bukalapak.com/img/17733877761/w-1000/data.jpeg',
      },
    ],
    Kaos: [
      {
        id: '1',
        name: 'Kaos Polos',
        description: 'Kaos polos nyaman untuk sehari-hari.',
        image: 'https://konveksikaosmurahbandung.com/wp-content/uploads/2017/11/584964_e8369581-b26c-483c-8a5f-8e55f4757cd3.jpg',
      },
      {
        id: '2',
        name: 'Kaos Bergambar',
        description: 'Kaos dengan desain gambar unik.',
        image: 'https://down-id.img.susercontent.com/file/id-11134207-7r98r-lm32aohpy9ijdc',
      },
    ],
    Celana: [
      {
        id: '1',
        name: 'Celana Jeans',
        description: 'Celana jeans yang awet dan stylish.',
        image: 'https://cf.shopee.co.id/file/c38ee6475674c4bc7edf98bcc8000a63',
      },
      {
        id: '2',
        name: 'Celana Chinos',
        description: 'Celana chinos cocok untuk semi formal.',
        image: 'https://id-test-11.slatic.net/p/7/celana-chino-panjang-pria-6202-08091576-366d623b21b3f09c2c9842c5368dcfed.jpg',
      },
    ],
    Jaket: [
      {
        id: '1',
        name: 'Jaket Kulit',
        description: 'Jaket kulit premium untuk tampilan elegan.',
        image: 'https://bomberleather.com/wp-content/uploads/2017/05/Jaket-Kulit-Lynch-Vintage-Antique-Brown-Depan.jpg',
      },
      {
        id: '2',
        name: 'Jaket Hoodie',
        description: 'Hoodie nyaman untuk cuaca dingin.',
        image: 'https://s1.bukalapak.com/img/1447968701/w-1000/Jaket_Sweater_Polos_Hoodie_Zipper_Hitam_Unisex.jpg',
      },
    ],
  };

  const categoryItems = data[categoryName] || [];
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <View style={styles.container}>
      <FlatList
        data={categoryItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => setSelectedItem(item)}>
            <Card style={styles.card}>
              <Card.Cover source={{ uri: item.image }} />
              <Card.Content>
                <Title>{item.name}</Title>
                <Paragraph>{item.description}</Paragraph>
              </Card.Content>
            </Card>
          </TouchableOpacity>
        )}
      />
      <Button mode="contained" onPress={() => navigation.goBack()} style={styles.button}>
        Kembali ke Beranda
      </Button>

      {/* Modal for Image Preview */}
      {selectedItem && (
        <Modal
          animationType="slide"
          transparent={true}
          visible={!!selectedItem}
          onRequestClose={() => setSelectedItem(null)}
        >
          <View style={styles.modalContainer}>
            <Image source={{ uri: selectedItem.image }} style={styles.modalImage} />
            <Text style={styles.modalTitle}>{selectedItem.name}</Text>
            <Button mode="contained" onPress={() => setSelectedItem(null)}>
              Tutup
            </Button>
          </View>
        </Modal>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  card: {
    marginBottom: 16,
    elevation: 4,
  },
  button: {
    marginTop: 16,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
  },
  modalImage: {
    width: 300,
    height: 300,
    marginBottom: 16,
  },
  modalTitle: {
    fontSize: 18,
    color: 'white',
    marginBottom: 16,
  },
});