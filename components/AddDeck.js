import React, { Component } from 'react'
import { View, Text, TextInput } from 'react-native'
import { StackActions } from '@react-navigation/native'
import { addDeck } from '../actions'
import { mergeDeck } from '../utils/api'
import { SubmitBtn } from './Buttons'
import { connect } from 'react-redux'
import { styles } from './Styles'

class AddDeck extends Component {
    state = {
        title: ''
    }

    handleChange = (value) => {
        this.setState({
            title : value
        })
    }

    submit = () => {
        const key = this.state.title
        const entry = {
            title: this.state.title,
            questions: []
        }

        this.props.dispatch(addDeck({
            [key]: entry
        }))

        this.setState(() => {
            title: ''
        })

        this.toList(key)

        mergeDeck({ [key]: entry})
    }

    toList = (deck) => {
        this.props.navigation.dispatch(
            StackActions.replace('ShowDeck', {deck: deck})
        )
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.center}>
                    <Text style={styles.text}>Title</Text>
                    <TextInput style={styles.textInput} onChangeText={text => this.handleChange(text)} value={this.state.title}></TextInput>
                </View>
                <View style={styles.row}>
                    <SubmitBtn onPress={this.submit}>Submit</SubmitBtn>
                </View>
            </View>
        )
    }
}

export default connect()(AddDeck)