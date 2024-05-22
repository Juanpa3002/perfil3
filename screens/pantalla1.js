import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';

const studentsData = [
  {
    id: 1,
    name: 'Juan Pablo Montes',
    carnet: '20210600',
    photo: require('../img/Jp.png')
  },
  {
    id: 2,
    name: 'Lionel Messi',
    carnet: '20212021',
    photo: require('../img/messi.png')
  },
];

const StudentsScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {studentsData.map(student => (
        <Card key={student.id} style={styles.card}>
          <Card.Content>
            <Title style={styles.name}>{student.name}</Title>
            <Paragraph style={styles.carnet}>Carnet: {student.carnet}</Paragraph>
          </Card.Content>
          <Card.Cover source={student.photo} style={styles.image} />
        </Card>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
    backgroundColor: '#DAD1D0',
  },
  card: {
    width: 300,
    marginVertical: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    backgroundColor: '#DAD1D0',
    overflow: 'hidden',
  },
  image: {
    height: 220,
    resizeMode: 'cover',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 5,
    color: '#333',
  },
  carnet: {
    fontSize: 16,
    textAlign: 'center',
    color: '#555',
    marginBottom: 10,
  },
});

export default StudentsScreen;
