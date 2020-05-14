import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { removeEntry } from '../utils/api'
import { deleteDeck } from '../actions'
import { SubmitBtn, TextButton } from './Buttons'
import { CommonActions } from '@react-navigation/native'
import { connect } from 'react-redux'
import { styles } from './Styles'

class ShowDeck extends Component {
    removeDeck = () => {
        const { deck } = this.props

        this.props.dispatch(deleteDeck({
            deck
        }))

        removeEntry({deck})

        this.props.navigation.dispatch({
            ...CommonActions.goBack(),
            source: 'ShowDeck',
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.center}>
                    <Text style={styles.text}>Deck Name: </Text>
                    <Text style={[styles.text, styles.colorOrange]}>{this.props.title}</Text>
                    <Text style={styles.text}># of Cards: <Text style={styles.colorOrange}>{this.props.numCards}</Text></Text>
                </View>
                <View style={[styles.row, styles.bottomSpace]}>
                    <SubmitBtn disabled={this.props.numCards===0} onPress={() => this.props.navigation.navigate('TakeQuiz', {deck: this.props.deck})}>Start</SubmitBtn>
                    <SubmitBtn onPress={() => this.props.navigation.navigate('AddCard', {deck: this.props.deck})}>Add Card</SubmitBtn>
                </View>
                <TextButton style={styles.warningInput} onPress={this.removeDeck}>Delete Deck</TextButton>
            </View>
        )
    }
}

function mapStateToProps ( decks, props ) {
    const deck = props.route.params.deck
    return {
        title: decks[deck]?.title,
        numCards: decks[deck]?.questions.length,
        deck,
    }
}

export default connect(mapStateToProps)(ShowDeck)