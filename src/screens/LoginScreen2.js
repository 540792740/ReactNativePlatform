import React, {Component} from 'react';
import { StyleSheet, View } from 'react-native';
import {Heading} from "../component/Heading";
import {Input} from "../component/Input";
import {ButtonFilled} from "../component/ButtonFilled";
import {TextButton} from "../component/TextButton";



class LoginScreen2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pass:'',
            user:'',

        }
    }

    render() {

        //

        return (
            <View style={styles.container}>
                <Heading style={styles.title}>LOGIN</Heading>
                {/*<Error error={''}/>*/}
                <Input style={styles.input}
                       keyboardType={'email-address'}
                       placeholder={'Email'}
                       onBlur={(event) =>{this.checkUsername(event)}}
                />
                <Input style={styles.input} placeholder={'Password'} secureTextEntry></Input>
                <ButtonFilled
                    title={'Login'}
                    style={styles.loginButton}
                    onPress={() =>{

                    }}
                />
                <TextButton title={"New User? Create Account"} onPress={()=>{}}/>

            </View>
        );
    }

    checkUsername(event) {
        this.setState({user : event.target.value})
        alert(this.state.user)
    }
}

export default LoginScreen2;

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
