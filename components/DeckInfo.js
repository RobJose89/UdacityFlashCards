import React from 'react'
import { View, Text, TouchableOpacity, Animated } from 'react-native'
import { styles } from './Styles'

export default class DeckInfo extends React.Component {
  state = {
    bounceValue: new Animated.Value(1)
  }

  goToShowDeck = () => {
    const { bounceValue } = this.state
    Animated.sequence([
        Animated.timing(bounceValue, { duration: 300, toValue: 1.2}),
        Animated.spring(bounceValue, { toValue: 1, friction: 8})
    ]).start(this.props.onPress)
  }

  render() {
    const {title, numCards} = this.props
    const { bounceValue } = this.state
    return (
      <TouchableOpacity onPress={this.goToShowDeck} style={styles.deckInfoContainer}>
        <View style={styles.deckInfoRow}>
            <Animated.Text style={[styles.smallText, {transform: [{scale: bounceValue}]}]}>{title}</Animated.Text>
            <Animated.Text style={[styles.smallText, {transform: [{scale: bounceValue}]}]}>{numCards}</Animated.Text>
        </View>
      </TouchableOpacity>
    )
  }
}
