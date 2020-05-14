import { AsyncStorage } from 'react-native'

const DECKS_STORAGE_KEY = 'UdaciFlashCards:decks'

export function fetchDecks () {
    return AsyncStorage.getItem(DECKS_STORAGE_KEY).then((results) => {
        return JSON.parse(results)
    })
}

export function fetchDeck ( { deck } ) {
    return AsyncStorage.getItem(DECKS_STORAGE_KEY).then((result) => {
        return JSON.parse(result[deck])
    })
}

export function mergeDeck ( deck ) {
    return AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify(deck))
}

export function mergeCard ( {deck, questions} ) {
    const newCard = {[deck]: {questions}}
    return AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify(newCard))
}

export function removeEntry ({deck}) {
    return AsyncStorage.getItem(DECKS_STORAGE_KEY).then((results) => {
        const data = JSON.parse(results)
        data[deck] = undefined
        delete data[deck]
        AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(data))
    })
}

export function clearDeck() {
    return AsyncStorage.clear()
}