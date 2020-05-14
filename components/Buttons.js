import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import {styles} from './Styles'

export function TextButton({ children, onPress, style = {} }) {
    return (
        <TouchableOpacity onPress={onPress}>
            <Text style={[styles.reset, style]}>{children}</Text>
        </TouchableOpacity>
    )
}

export function SubmitBtn ( { children, disabled = false, onPress, style = {} } ) {
    return (
        !disabled && (<TouchableOpacity onPress={onPress} style={[disabled?styles.hide:'', Platform.OS === 'ios' ? styles.iosSubmitBtn : styles.androidSumbitBtn]}>
            <Text style={[styles.submitBtnText, style]}>{children}</Text>
        </TouchableOpacity>)
    )
}