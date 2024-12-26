import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Card, Paragraph, Title } from 'react-native-paper';

export default function HomeScreen({ navigation }) {
  const categories = [
    { name: 'Kemeja', description: 'Koleksi kemeja stylish untuk pria dan wanita.' },
    { name: 'Kaos', description: 'Pilihan kaos santai dan trendy.' },
    { name: 'Celana', description: 'Celana jeans, chinos, dan lainnya.' },
    { name: 'Jaket', description: 'Jaket hangat dan modis untuk semua musim.' },
  ];

  return (
    <View style={styles.container}>
      {categories.map((category, index) => (
        <Card key={index} style={styles.card}>
          <Card.Content>
            <Title>{category.name}</Title>
            <Paragraph>{category.description}</Paragraph>
          </Card.Content>
          <Card.Actions>
            <Button onPress={() => navigation.navigate('Category', { categoryName: category.name })}>
              Lihat {category.name}
            </Button>
          </Card.Actions>
        </Card>
      ))}
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
});
