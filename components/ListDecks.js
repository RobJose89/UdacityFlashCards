import React, { Component } from 'react'
import { View, Text, ScrollView } from 'react-native'
import { receiveDecks } from '../actions'
import { fetchDecks } from '../utils/api'
import { connect } from 'react-redux'
import { SubmitBtn } from './Buttons'
import DeckInfo from './DeckInfo'
import {styles} from './Styles'

class ListDecks extends Component {
    state = {
        ready: false,
    }

    componentDidMount() {
        const { dispatch } = this.props

        fetchDecks()
            .then((decks) => {
                dispatch(receiveDecks(decks))
            })
            .then(() => this.setState(() => ({
                ready: true,
            })))
    }

    render() {
        if ( !this.state.ready ) {
            return ( <Text>Loading</Text>)
        }

        return (
            <View style={styles.container}>
                <View style={styles.center}>
                    <ScrollView>
                        {Object.keys(this.props.decks).map((deck) => {
                            const { title, questions } = this.props.decks[deck]
                            return (<DeckInfo key={deck} title={title} numCards={questions.length} onPress={ () => this.props.navigation.navigate('ShowDeck', {deck: deck}) } />)
                        })}
                    </ScrollView>
                    <SubmitBtn onPress={() => this.props.navigation.navigate('AddDeck')}>ADD</SubmitBtn>
                </View>
            </View>
        )
    }

}

function mapStateToProps ( decks = {} ) {
    return {
        decks,
    }
}

export default connect(mapStateToProps)(ListDecks)