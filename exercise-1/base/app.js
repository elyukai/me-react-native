import React, { useCallback, useState } from 'react'
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
} from 'react-native'
import Constants from 'expo-constants';

const App = () => {
  let score = [0, 0]
  const [playerX, setPlayerX] = useState(true)
  const [cards, setCards] = useState([ ['', '', ''],
                                       ['', '', ''],
                                       ['', '', ''] ])

  const reset = () => {
    setCards([ ['', '', ''],
               ['', '', ''],
               ['', '', ''] ])
    setPlayerX(true)
  }

  const onPress = (row, col) => {
    if (cards[row][col] !== '') return

    const newCards = copy2dArray(cards)
    newCards[row][col] = playerX ? 'X' : 'O'

    if (checkVictory(row, col, newCards)) {
      reset()

      const newScore = copyArray(score)
      if (playerX)
        newScore[0]++
      else
        newScore[1]++
      
      score = newScore
    } else {
      setCards(newCards)
      setPlayerX(!playerX)
    }
  }

  return (
    <View style={ styles.app }>
      <View style={ styles.titleBar }>
        <Text style={ styles.title }>Tic-Tac-Toe</Text>
      </View>
      <View style={ styles.panel }>
        <View style={ styles.score }>
          <Text>Player X: { score[0] }</Text>
          <Text>Player O: { score[1] }</Text>
        </View>
        <View style={ styles.turnIndicatorView }>
          <Text style={ styles.turnIndicator }>{ playerX ? 'X' : 'O' }</Text>
        </View>
        <TouchableOpacity style={[ styles.card, styles.reset ]} onPress={ reset }>
          <Text>reset</Text>
        </TouchableOpacity>
      </View>
      <View style={ styles.field }>
        { /* ↓ Hier muss das Spielfeld vervollständigt werden ↓ */ }
        <View style={ styles.row }>
          <Card onPress={ () => onPress(0, 0) } text={ cards[0][0] } />
        </View>
      </View>
    </View>
  )
}

const Card = (props) => (
  <TouchableOpacity
    style={ styles.card }
    onPress={ props.onPress }>
    <Text style={ styles.tick }>
      { props.text }
    </Text>
  </TouchableOpacity>
);

const checkVictory = (row, col, cards) => {
  const symbol = cards[row][col]

  let horiz = true
  for (let i = 0; i < 3; i++) {
    if (cards[row][i] !== symbol) {
      horiz = false
      break
    }
  }
  if (horiz) return true

  let vert = true
  for (let i = 0; i < 3; i++) {
    if (cards[i][col] !== symbol) {
      vert = false
      break
    }
  }
  if (vert) return true

  let dia1 = true
  for (let i = 0; i < 3; i++) {
    if (cards[i][i] !== symbol) {
      dia1 = false
      break
    }
  }
  if (dia1) return true

  let dia2 = true
  for (let i = 0; i < 3; i++) {
    if (cards[i][2 - i] !== symbol) {
      dia2 = false
      break
    }
  }
  if (dia2) return true

  return false
}

const styles = StyleSheet.create( {
  app: {
    height: '100%',
    width: '100%',
  },
  titleBar: {
    paddingTop: Constants.statusBarHeight,
    height: 40,
    backgroundColor: "red",
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  panel: {
    flexDirection: 'row',
  },
  score: {
    flex: 1,
    margin: 12
  },
  turnIndicatorView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  turnIndicator: {
    fontSize: 30,
    color: 'gray'
  },
  reset: {
    backgroundColor: 'lightgrey',
    height: 'initial',
  },
  field: {
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  card: {
    alignItems: 'center',
    backgroundColor: 'red',
    flexDirection: 'column',
    flex: 1,
    padding: 10,
    margin: 10,
    height: 90,
    justifyContent: 'center',
  },
  tick: {
    fontSize: 60,
  },
})

const copyArray = (arr) => arr.slice()
const copy2dArray = (arr) => arr.map((e, i) => copyArray(e))

export default App;
