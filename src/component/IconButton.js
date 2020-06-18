import React from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import Icon from 'react-native-ionicons';


export function IconButton({name, style, onPress}) {
    return  (
        <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
            <Icon name={'close-circle-outline'}/>
        </TouchableOpacity>
    )}

const styles = StyleSheet.create({
    container:{

    }
})

