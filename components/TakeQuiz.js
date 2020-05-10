import React, { Component } from 'react'
import { View, Text, Animated } from 'react-native'
import { connect } from 'react-redux'
import ShowQuestion from './ShowQuestion'
import ShowAnswer from './ShowAnswer'
import ShowResults from './ShowResults'
import { styles } from './Styles'
import { clearLocalNotification, setLocalNotification } from '../utils/helper'

class TakeQuiz extends Component {
    state = {
        currentQuestion: 0,
        correct: 0,
        wrong: 0,
        showResults: false
    }

    constructor(props) {
        super(props)
        this.animatedValue = new Animated.Value(0)
        this.value = 0
        this.animatedValue.addListener(( { value } ) => {
            this.value = value
        })
        this.frontInterpolate = this.animatedValue.interpolate({
            inputRange: [0, 180],
            outputRange: ['0deg','180deg']
        })

        this.backInterpolate = this.animatedValue.interpolate({
            inputRange: [0,180],
            outputRange: ['180deg', '360deg']
        })
    }

    startOver = () => {
        Animated.timing(this.animatedValue, {
            toValue: 0,
            duration: 1500
        }).start(() => {
            this.setState(() => ({
                currentQuestion: 0,
                correct: 0,
                wrong: 0,
                showResults: false
            }))
        })

        clearLocalNotification()
          .then(setLocalNotification)
    }

    toDeck = () => {
        this.props.navigation.navigate('ShowDeck', {deck: this.props.deck})
        clearLocalNotification()
          .then(setLocalNotification)          
    }

    showAnswer = () => {
        Animated.timing(this.animatedValue, {
            toValue: 180,
            duration: 1500
        }).start()
    }

    markCorrect = () => {
        const showResults = this.props.questions.length === this.state.currentQuestion + 1

        Animated.timing(this.animatedValue, {
            toValue: 0,
            duration: 1500
        }).start(() => {
            this.setState((currentState) => ({
                correct: currentState.correct + 1,
                currentQuestion: currentState.currentQuestion + 1,
                showResults: showResults
            }))
        })
    }

    markWrong = () => {
        const showResults = this.props.questions.length === this.state.currentQuestion + 1

        Animated.timing(this.animatedValue, {
            toValue: 0,
            duration: 1500
        }).start(() => {
            this.setState((currentState) => ({
                wrong: currentState.wrong + 1,
                currentQuestion: currentState.currentQuestion + 1,
                showAnswer: false,
                showResults: showResults
            }))
        })
    }

    render() {
        const { showResults, currentQuestion, correct, wrong } = this.state
        const frontAnimatedStyle = {
            transform: [
                { rotateX: this.frontInterpolate}
            ]
        }
        const backAnimatedStyle = {
            transform: [
                {rotateX: this.backInterpolate}
            ]
        }
        
        return (
            <View style={styles.container}>
                {!showResults && <Text style={[styles.text, styles.colorOrange]}>{this.props.questions.length - currentQuestion} questions remaining</Text>}
                {showResults && <ShowResults correct={correct} wrong={wrong} startOver={this.startOver} toDeck={this.toDeck} />}
                {!showResults && (
                    <View style={styles.center}>                        
                        <Animated.View style={[styles.flipCard, frontAnimatedStyle]}>
                            <ShowQuestion question={this.props.questions[currentQuestion].question} showAnswer={this.showAnswer} /> 
                        </Animated.View>
                        <Animated.View style={[styles.flipCard, styles.flipCardBack, backAnimatedStyle]}>
                            <ShowAnswer answer={this.props.questions[currentQuestion].answer} markCorrect={this.markCorrect} markWrong={this.markWrong} /> 
                        </Animated.View>       
                    </View>
                )}
            </View>
        )
    }

}

function mapStateToProps ( decks, props ) {
    const deck = props.route.params.deck

    return {
        questions: decks[deck].questions,
        deck: deck
    }
}

export default connect(mapStateToProps)(TakeQuiz)