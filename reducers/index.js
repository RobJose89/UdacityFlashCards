import { RECEIVE_DECKS, ADD_DECK, DELETE_DECK, ADD_CARD} from '../actions'

function decks ( state = {}, action) {
    const { deck, card } = action
    switch (action.type) {
        case RECEIVE_DECKS:
            return {
                ...state,
                ...action.decks
            }
        case ADD_DECK:
            return {
                ...state,
                ...action.deck,
            }
        case ADD_CARD:
            return {
                ...state,
                [deck]: { 
                    ...state[deck],
                    questions: state[deck].questions.concat(card)
                },
            }
        case DELETE_DECK:
            delete state[deck]
            return {...state}
        default:
            return state
    }
}

export default decks