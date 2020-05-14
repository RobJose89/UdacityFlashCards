import React from 'react';
import { View, StatusBar } from 'react-native';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { orange } from './utils/colors'
import Constants from 'expo-constants'
import ListDecks from './components/ListDecks'
import AddDeck from './components/AddDeck'
import ShowDeck from './components/ShowDeck'
import AddCard from './components/AddCard'
import TakeQuiz from './components/TakeQuiz'
import ErrorBoundry from './components/ErrorBoundry'
import { setLocalNotification } from './utils/helper'

function DeckStatusBar ({ backgroundColor, ...props}) {
  return (
    <View style={{backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}

const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <Stack.Navigator initialRouteName="ListDecks">
      <Stack.Screen name="ListDecks" component={ListDecks} options={{title: "List of Decks"}} />
      <Stack.Screen name="ShowDeck" component={ShowDeck} options={{title: "Show Deck"}} />
      <Stack.Screen name="AddDeck" component={AddDeck} options={{title: "Add a Deck to List"}} />
      <Stack.Screen name="AddCard" component={AddCard} options={{title: "Add a Card to a Deck"}} />
      <Stack.Screen name="TakeQuiz" component={TakeQuiz} options={{title: "Take Quiz"}} />
    </Stack.Navigator>
  )
}

export default class App extends React.Component {
  componentDidMount () {
    setLocalNotification()
  }

  render() {
    return (
        <Provider store={createStore(reducer)}>
          <DeckStatusBar backgroundColor={orange} barStyle='light-content' />
          <NavigationContainer style={{flex: 1}}>
            <ErrorBoundry>
              <MyStack />
            </ErrorBoundry>
          </NavigationContainer>
        </Provider>
    );
  }
}

