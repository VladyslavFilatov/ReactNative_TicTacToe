import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, Image, Dimensions, Alert } from 'react-native'
import React, {useEffect, useState} from 'react';
// import {useNavigation} from '@react-navigation/native';

const windowWidth = Dimensions.get('window').width;

export default function Main({navigation}) {
  // const navigation = useNavigation();

  const [xWinnerTimes, setxWinnerTimes] = useState(0);
  const [oWinnerTimes, setoWinnerTimes] = useState(0);
  const [active_player, setActive_player] = useState('X');
  const [markers, setMarkers] = useState([
    null, null, null,
    null, null, null,
    null, null, null,
  ]);

  const markPosition = position => {
    if (!markers[position]) {
      let temp = [...markers];
      temp[position] = active_player;
      setMarkers(temp);
      if (active_player === 'X') {
        setActive_player('O');
      } else {
        setActive_player('X');
      }
    }
  };

  const resetMarkers = () => {
    setMarkers([null, null, null, null, null, null, null, null, null]);
  };

  const calculateWinner = squeres => {
    const lines = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if(squeres[a] && squeres[a] === squeres[b] && squeres[a] === squeres[c]){
        return squeres[a];
      }
    }
    return null;
  };

  useEffect(() => {
    const winner = calculateWinner(markers);
    if (winner === 'X') {
      Alert.alert('Player X won!');
      setxWinnerTimes(xWinnerTimes + 1);
      resetMarkers();
      //navigation.navigate('History', {playerParams: 'Player X won!'});
      //setActive_player('Player X won!');
    } else if (winner === 'O') {
      Alert.alert('Player O won!');
      setoWinnerTimes(oWinnerTimes + 1);
      resetMarkers();
      //setActive_player('Player O won!');
      //navigation.navigate('History', {playerParams: 'Player O won!'});
    }
  }, [markers]);
  return (
    <SafeAreaView style={styles.body}>
      <View
        style={[
          styles.playerInfo,
          {backgroundColor: active_player === 'X' ? '#007FF4' : '#F40075'},
        ]}>
        <Text style={styles.playerTxt}>Player {active_player}'s turn</Text>
      </View>
      <View style={styles.mainContainer}>

        {/* Top left Cell */}
        <TouchableOpacity
          style={styles.cell_top_left}
          onPress={() => markPosition(0)}>
            {markers[0] === 'X' && <Image style={styles.icon} source={require('../assets/img/cross.png')}/>}
            {markers[0] === 'O' && <Image style={styles.icon} source={require('../assets/img/zero.png')}/>}
        </TouchableOpacity>

        {/* Top Mid Cell */}
        <TouchableOpacity
          style={styles.cell_top_mid}
          onPress={() => markPosition(1)}>
            {markers[1] === 'X' && <Image style={styles.icon} source={require('../assets/img/cross.png')}/>}
            {markers[1] === 'O' && <Image style={styles.icon} source={require('../assets/img/zero.png')}/>}
        </TouchableOpacity>

        {/* Top Right Cell */}
        <TouchableOpacity
          style={styles.cell_top_right}
          onPress={() => markPosition(2)}>
            {markers[2] === 'X' && <Image style={styles.icon} source={require('../assets/img/cross.png')}/>}
            {markers[2] === 'O' && <Image style={styles.icon} source={require('../assets/img/zero.png')}/>}
        </TouchableOpacity>

        {/* Mid left Cell */}
        <TouchableOpacity
          style={styles.cell_mid_left}
          onPress={() => markPosition(3)}>
            {markers[3] === 'X' && <Image style={styles.icon} source={require('../assets/img/cross.png')}/>}
            {markers[3] === 'O' && <Image style={styles.icon} source={require('../assets/img/zero.png')}/>}
        </TouchableOpacity>

        {/* Mid Mid Cell */}
        <TouchableOpacity
          style={styles.cell_mid_mid}
          onPress={() => markPosition(4)}>
            {markers[4] === 'X' && <Image style={styles.icon} source={require('../assets/img/cross.png')}/>}
            {markers[4] === 'O' && <Image style={styles.icon} source={require('../assets/img/zero.png')}/>}
        </TouchableOpacity>

        {/* Mid Right Cell */}
        <TouchableOpacity
          style={styles.cell_mid_right}
          onPress={() => markPosition(5)}>
            {markers[5] === 'X' && <Image style={styles.icon} source={require('../assets/img/cross.png')}/>}
            {markers[5] === 'O' && <Image style={styles.icon} source={require('../assets/img/zero.png')}/>}
        </TouchableOpacity>

        {/* Bottom left Cell */}
        <TouchableOpacity
          style={styles.cell_bottom_left}
          onPress={() => markPosition(6)}>
            {markers[6] === 'X' && <Image style={styles.icon} source={require('../assets/img/cross.png')}/>}
            {markers[6] === 'O' && <Image style={styles.icon} source={require('../assets/img/zero.png')}/>}
        </TouchableOpacity>

        {/* Bottom Mid Cell */}
        <TouchableOpacity
          style={styles.cell_bottom_mid}
          onPress={() => markPosition(7)}>
            {markers[7] === 'X' && <Image style={styles.icon} source={require('../assets/img/cross.png')}/>}
            {markers[7] === 'O' && <Image style={styles.icon} source={require('../assets/img/zero.png')}/>}
        </TouchableOpacity>

            {/* Bottom Right Cell */}
        <TouchableOpacity
          style={styles.cell_bottom_right}
          onPress={() => markPosition(8)}>
            {markers[8] === 'X' && <Image style={styles.icon} source={require('../assets/img/cross.png')}/>}
            {markers[8] === 'O' && <Image style={styles.icon} source={require('../assets/img/zero.png')}/>}
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.cancelBTN} onPress={resetMarkers}>
        <Image
          style={styles.cancelIcon}
          source={require('../assets/img/replay.png')}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.historyBTN}
        onPress={() =>
          navigation.navigate('History', {
            playerxParams: xWinnerTimes,
            playeroParams: oWinnerTimes,
          })
        }>
        <Image
          style={styles.historyIcon}
          source={require('../assets/img/history.png')}
        />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#fff',
  },
  playerInfo: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
    paddingVertical: 20,
    marginTop: 30,
  },
  playerTxt: {
    fontSize: 20,
    fontWeight: '700',
    letterSpacing: 1.2,
    color: '#fff',
  },
  mainContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginTop: 60,
  },
  cell_top_left: {
    width: windowWidth / 3.2,
    height: windowWidth / 3.2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRightWidth: 6,
    borderBottomWidth: 6,
  },
  cell_top_mid: {
    width: windowWidth / 3.2,
    height: windowWidth / 3.2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 6,
  },
  cell_top_right: {
    width: windowWidth / 3.2,
    height: windowWidth / 3.2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderLeftWidth: 6,
    borderBottomWidth: 6,
  },
  cell_mid_left: {
    width: windowWidth / 3.2,
    height: windowWidth / 3.2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRightWidth: 6,
  },
  cell_mid_mid: {
    width: windowWidth / 3.2,
    height: windowWidth / 3.2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cell_mid_right: {
    width: windowWidth / 3.2,
    height: windowWidth / 3.2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderLeftWidth: 6,
  },
  cell_bottom_left: {
    width: windowWidth / 3.2,
    height: windowWidth / 3.2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRightWidth: 6,
    borderTopWidth: 6,
  },
  cell_bottom_mid: {
    width: windowWidth / 3.2,
    height: windowWidth / 3.2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopWidth: 6,
  },
  cell_bottom_right: {
    width: windowWidth / 3.2,
    height: windowWidth / 3.2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderLeftWidth: 6,
    borderTopWidth: 6,
  },
  icon: {
    height: 62,
    width: 62,
  },
  cancelBTN: {
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
  cancelIcon: {
    height: 80,
    width: 80,
  },
  historyBTN: {
    position: 'absolute',
    bottom: 20,
    left: 20,
  },
  historyIcon: {
    height: 80,
    width: 80,
  },
});

// export default Game;
