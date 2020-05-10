import React from 'react'
import { View, Text } from 'react-native'
import {SubmitBtn} from './Buttons'
import { styles } from './Styles'

export default function ShowQuestion({question, showAnswer}) {
    return (
        <View style={styles.container}>
            <View style={styles.center}>
                <Text style={[styles.text, styles.bottomSpace]}>Question</Text>
                <Text style={styles.showQuestionAnswer}>{question}</Text>
            </View>
            <View style={styles.row}>
                <SubmitBtn onPress={showAnswer}>Answer</SubmitBtn>
            </View>
        </View>
    )
}