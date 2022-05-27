import React, {useState, useContext } from "react";
import { View, Text, Keyboard, TouchableWithoutFeedback, StyleSheet } from 'react-native';
import { FormButton, FormInput } from '../components';
import { AuthContext } from "../navigation/AuthProvider";

const SignUpScreen = ({navigation}) => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [passwordConf, setPasswordConf] = useState();

    const {register} = useContext(AuthContext);

    const restoreForm = () => {
      setEmail();
      setPassword();
      setPasswordConf();
      Keyboard.dismiss();
    };

    return (
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style = {styles.container}>
            <Text style = {styles.text}>Create an account</Text>

            <FormInput
                labelValue = {email}
                onChangeText = {setEmail}
                placeHolderText = "Email"
                iconType = "user"
                keyboardType = "email-address"
                autoCapitalize = "none"
                autocorrect = {false}
            />

            <FormInput
                labelValue = {password}
                onChangeText = {setPassword}
                placeHolderText = "Password"
                iconType = "lock"
                secureTextEntry = {true}
            />

            <FormInput
                labelValue = {passwordConf}
                onChangeText = {setPasswordConf}
                placeHolderText = "Confirm Password"
                iconType = "lock"
                secureTextEntry = {true}
            />

            <FormButton
                buttonTitle = "Sign up"
                onPress = {() => register(email, password, passwordConf) && restoreForm()}
            />
        </View>
      </TouchableWithoutFeedback>
    );
}

export default SignUpScreen;

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#f9fafd',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
    },
    text: {
      fontSize: 28,
      marginBottom: 10,
      color: '#051d5f',
    },
    navButton: {
      marginTop: 15,
    },
    navButtonText: {
      fontSize: 18,
      fontWeight: '500',
      color: '#2e64e5',
    },
    textPrivate: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      marginVertical: 35,
      justifyContent: 'center',
    },
    color_textPrivate: {
      fontSize: 13,
      fontWeight: '400',
      color: 'grey',
    },
});