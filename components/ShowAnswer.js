import React from 'react'
import { View, Text } from 'react-native'
import {SubmitBtn} from './Buttons'
import { styles } from './Styles'

export default function ShowAnswer({answer, markCorrect, markWrong}) {
    return (
        <View style={styles.container}>
            <View style={styles.center}>
                <Text style={[styles.text, styles.bottomSpace]}>Answer</Text>
                <Text style={styles.showQuestionAnswer}>{answer}</Text>
            </View>
            <View style={styles.row}>
                <SubmitBtn onPress={markCorrect}>Correct</SubmitBtn>
                <SubmitBtn onPress={markWrong}>Wrong</SubmitBtn>
            </View>
        </View>
    )
}