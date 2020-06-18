import React from 'react';
import { StyleSheet, View } from 'react-native';
import {Heading} from "../component/Heading";
import {Input} from "../component/Input";
import {ButtonFilled} from "../component/ButtonFilled";
import {TextButton} from "../component/TextButton";
import {Error} from "../component/Error";

export function LoginScreen({navigation}) {
    return (
        <View style={styles.container}>
            <Heading style={styles.title}>LOGIN</Heading>
            {/*<Error error={''}/>*/}
            <Input style={styles.input}
                   keyboardType={'email-address'}
                   placeholder={'Email'}
            />
            <Input style={styles.input} placeholder={'Password'} secureTextEntry></Input>
            <ButtonFilled
                title={'Login'}
                style={styles.loginButton}
                onPress={() =>{
                    navigation.navigate('Registration')
                }}
            />
            <TextButton title={"New User? Create Account"} onPress={()=>{}}/>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding:20,
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

    }
});
