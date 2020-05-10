import React from 'react'
import { View, Text } from 'react-native'
import {SubmitBtn} from './Buttons'
import { styles } from './Styles'

export default function ShowResults({correct, wrong, startOver, toDeck}) {
    return (
        <View style={styles.container}>
            <View style={styles.center}>
                <Text style={styles.text}>Correct: <Text style={styles.colorOrange}>{correct}</Text></Text>
                <Text style={styles.text}>Wrong: <Text style={styles.colorOrange}>{wrong}</Text></Text>
            </View>
            <View style={styles.row}>
                <SubmitBtn onPress={startOver}>Start Over</SubmitBtn>
                <SubmitBtn onPress={toDeck}>To Deck</SubmitBtn>
            </View>
       </View>
    )
}