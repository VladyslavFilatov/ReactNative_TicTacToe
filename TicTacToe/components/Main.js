import React from 'react';
import {SafeAreaView, StyleSheet, TouchableOpacity, Image, Text } from 'react-native';


export default function Main({navigation}) {
  return (
    <SafeAreaView style={styles.body}>
      <Text style={styles.txtstart}>Click to the button to start the game!</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Game')}>
        <Image style={styles.imgbtnstart} source={require('../assets/img/startbtn.png')} />
        <Image style={styles.image} source={require('../assets/img/logo.svg.png')} />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#00A5D5',
  },
  txtstart: {
    alignSelf: 'center',
    fontWeight: '700',
    marginTop: 50,
  },
  imgbtnstart: {
    height: 250,
    width: 250,
    alignSelf: 'center',
    marginTop: 50,
  },
  image: {
    height: 250,
    width: 250,
    alignSelf: 'center',
    marginTop: 10,
  },
});
