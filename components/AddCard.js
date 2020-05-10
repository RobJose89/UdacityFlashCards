import React, { Component } from 'react'
import { View, Text, TextInput } from 'react-native'
import { addCard } from '../actions'
import { mergeCard } from '../utils/api'
import { SubmitBtn } from './Buttons'
import { CommonActions } from '@react-navigation/native'
import { connect } from 'react-redux'
import { styles } from './Styles'

class AddCard extends Component {
    state = {
        question: '',
        answer: ''
    }

    handleChange = (which, value) => {
        this.setState(() => ({
            [which] : value
        }))
    }

    submit = () => {
        const deck = this.props.deck.title
        const card = {
            answer: this.state.answer,
            question: this.state.question
        }
        const questions = this.props.deck.questions.concat(card)

        this.props.dispatch(addCard({
            deck, card
        }))

        this.setState({
            question: '',
            answer: ''
        })

        this.toList()

        mergeCard({deck, questions})
    }

    toList = () => {
        this.props.navigation.dispatch({
            ...CommonActions.goBack(),
            source: 'AddDeck',
        })
    }


    render() {
        return (
            <View style={styles.container}>
                <View style={styles.center}>
                    <Text style={styles.text}>Deck: <Text style={styles.colorOrange}>{this.props.deck.title}</Text></Text>
                </View>
                <View style={styles.center}>
                    <Text style={styles.text}>Question</Text>
                    <TextInput style={[styles.textInput, styles.bottomSpace]} onChangeText={text => this.handleChange('question', text)} value={this.state.title}></TextInput>
                    <Text style={styles.text}>Answer</Text>
                    <TextInput style={styles.textInput} onChangeText={text => this.handleChange('answer', text)} value={this.state.title}></TextInput>
                </View>
                <View style={styles.row}>
                    <SubmitBtn onPress={this.submit}>Submit</SubmitBtn>
                </View>
            </View>
        )
    }
}

function mapStateToProps ( decks, props ) {
    const deck = props.route.params.deck
    return {
        deck: decks[deck],
    }
}

export default connect(mapStateToProps)(AddCard)