import React, { Component } from 'react';
import { Button, View, Text, TextInput, StyleSheet, Image} from 'react-native';
import { Actions } from 'react-native-router-flux';
import axios from 'axios';

const SignUpScreen = () => {
    return(
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Image  source={require('../assets/images/logo.png')}/>
            </View>
            <Text style={styles.title}>Sign Up screen</Text>
        </View>
    );
}

export default SignUpScreen

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    separator: {
      marginVertical: 30,
      height: 1,
      width: '80%',
    },
    headerContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
  });
  