import React, { Component } from 'react'
import { View, Text, TouchableOpacity, ScrollView } from 'react-native'

class ErrorBoundary extends Component {
    state = { 
        hasError: false 
    };
  
    static getDerivedStateFromError(error) {
      // Update state so the next render will show the fallback UI.
      return { hasError: true };
    }
  
    componentDidCatch(error, errorInfo) {
      // You can also log the error to an error reporting service
      console.log(error, errorInfo);
    }
  
    render() {
      if (this.state.hasError) {
        // You can render any custom fallback UI
        return <View><Text>Something went wrong.</Text></View>
      }
  
      return this.props.children; 
    }
  }

  export default ErrorBoundary