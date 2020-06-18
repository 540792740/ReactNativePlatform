import React from 'react';
import { StyleSheet, View } from 'react-native';
import {Heading} from "../component/Heading";
import {Input} from "../component/Input";
import {ButtonFilled} from "../component/ButtonFilled";
import {IconButton} from "../component/IconButton";

export function RegistrationScreen({navigation}) {
    return (
        <View style={styles.container}>
            <Heading style={styles.title}>Registration</Heading>
            {/*<IconButton*/}
            {/*    style={styles.closeIcon}*/}
            {/*    onPress={()=>{navigation.pop()}} />*/}
            <Input style={styles.input}
                   keyboardType={'email-address'}
                   placeholder={'Email'}
            />
            <Input style={styles.input} placeholder={'Password'} secureTextEntry></Input>
            <ButtonFilled
                title={'Register'}
                style={styles.loginButton}
                onPress={() =>{
                    navigation.pop();
                }}
            />

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        paddingTop: 120,
        alignItems: 'center',
    },
    input:{
        marginVertical:8,
    },
    title:{
        marginBottom: 48,
    },
    loginButton:{
        marginVertical: 32,
    },
    closeIcon:{
        position: 'absolute',
        top: 60,
        right: 16
    }
});
