import { View, Text, Image, Pressable } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import welcomePng from './assets/welcome.png'
import googleLogo from './assets/google.png'

export default function Login({navigation}) {
    const navigateToHome =()=>{
        navigation.navigate("Home")
    }
    return (
        <LinearGradient colors={["rgba(46, 47, 76, 1)",
            "rgba(32, 33, 55, 1)"]} style={styles.root}>
            <View style={styles.ImageContainer}>
                <Image source={welcomePng}/>
            </View>
            <View style={styles.loginContainer}>
                <Text style={styles.loginText}>LogIn or SignUp, using </Text>
                <Pressable style={styles.buttonContainer} onPress={()=> navigateToHome()}>
                    <Image source={googleLogo} style={styles.googleLogo}/>

                    <Text style={styles.googleText}>Google</Text>
                </Pressable>
            </View>
        </LinearGradient>

    )
}

var styles = StyleSheet.create({
    root: {
        height:"100%",
        width:"100%",
    },
    ImageContainer:{
        alignItems:"center",
        justifyContent:"center",
        height:"70%"
    },
    loginContainer:{
        justifyContent:"flex-start",
        alignItems:"center"
    },
    loginText:{
        color:"#FFF",
        fontSize: 20,
        fontWeight:"400"
    },
    googleText:{
        fontSize: 24,
        fontWeight:"400",
        color:"#FFF"
    },
    buttonContainer:{
        backgroundColor:"rgba(29, 28, 47, 1)",
        height:64,
        width: 222,
        padding: 10,
        borderRadius: 100,
        alignItems:"center",
        marginTop: 20,
        flexDirection:"row",
        justifyContent:"center",
    },
    googleLogo:{
        height: 29,
        width: 29,
        marginRight: 10
    }
  });