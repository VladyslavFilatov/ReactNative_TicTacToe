import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

export default function History({route}) {
  return (
    <View style={styles.body}>
      <Text style={styles.txt}>History</Text>
      <Text style={styles.history}>Player X won {route.params.playerxParams} times</Text>
      <Text style={styles.history}>Player O won {route.params.playeroParams} times</Text>
      <Image
        style={styles.imgTrophy}
        source={require('../assets/img/trophy.png')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#F500CB',
  },
  txt: {
    fontWeight: '700',
    fontSize: 21,
    textAlign: 'center',
    margin: 20,
  },
  history: {
    fontWeight: '300',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 20,
    borderWidth: 3,
    borderRadius: 5,
  },
  imgTrophy: {
    height: 250,
    width: 250,
    alignSelf: 'center',
    marginTop: 100,
    //marginVertical: 100,
  },
});
