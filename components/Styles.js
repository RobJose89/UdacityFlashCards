import { StyleSheet } from 'react-native'
import { white, purple, red, orange, gray } from '../utils/colors'

const styles = StyleSheet.create({
    reset: {
        textAlign: 'center',
        color: purple,
    },
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: white
    },
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 30,
        marginLeft: 30,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'center',
        flex: 1,
        alignItems: 'center',
    },
    deckInfoContainer: {
        padding: 20,
        backgroundColor: white,
        borderWidth: 2,
        borderColor: purple,
        marginBottom: 10
    },
    deckInfoRow: {
        height: 40,
        width: 140,
    },
    showQuestionAnswer: {
        flex: 1,
        borderColor: orange,
        borderWidth: 2,
        width: 300,
        padding: 10
    },
    bottomSpace: {
        marginBottom: 30
    },
    colorOrange: {
        color: orange
    },
    iosSubmitBtn: {
        backgroundColor: purple,
        padding: 10,
        borderRadius: 7,
        width: 150,
        height: 45,
        margin: 10
    },
    androidSumbitBtn: {
        backgroundColor: purple,
        margin: 10,
        width: 150,
        height: 45,
        borderRadius: 2,
        alignSelf: 'flex-end',
        justifyContent: 'center',
        alignItems: 'center',
    },
    submitBtnText: {
        color: white,
        fontSize: 22,
        textAlign: 'center',
    },
    text: {
        fontSize: 25,
        textAlign: 'center',
        color: purple
    },
    smallText: {
        fontSize: 15,
        textAlign: 'center',
        color: purple
    },
    warningInput: {
        color: red,
        fontSize: 20,
        marginBottom: 10
    },
    textInput: {
        backgroundColor: gray,
        width: 200,
        color: white
    },
    flipCard: {
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 30,
        marginLeft: 30,
        backfaceVisibility: 'hidden'
    },
    flipCardBack: {
        position: "absolute",
        top: 0,
    }
})

export { styles }
