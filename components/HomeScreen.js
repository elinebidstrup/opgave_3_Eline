import React, { Component } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default class HomeScreen extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Image style={styles.logo} source={require('../assets/HOME.png')} />
                <Text style={{fontSize:30, fontWeight: 'bold'}}>J.JENSEN SNEDKER{"\n"}</Text>
                <Text style={styles.text2}>VELKOMMEN{"\n"}</Text>
                <Text style={styles.text}>
                DENNE APP ER TIL DIG, SOM HAR PROBLEMER MED AT FINDE MØBLER, SOM AKKURAT PASSER IND I DIT HJEM.{"\n"}
                UNDER "TILFØJ" KAN DU VÆLGE TYPE AF MØBEL, SOM DU GERNE VIL SKRÆDDERSYE TIL DIT HJEM.
                    HERTIL KAN DU VÆLGE MATERIALE, MÅL OG FARVE.{"\n"}
                    SKULLE DU HAVE NOGLE SPØRGSMÅL, SÅ FIND MIN KONTAKT OPLYSNINGER UNDER "PROFIL".{"\n"}
                    GOD FORNØJELSE.
                </Text>


            </View>

        )
    }
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 0,
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
    },
    text: {
        color: 'black',
        fontSize: 20,
        paddingRight:20,
        paddingLeft: 20,
    },
    text2: {
        color: 'black',
        fontSize: 25,
        paddingRight:20,
        paddingLeft: 20,
        alignItems: 'center',
    },
    logo: {
        padding: 50,
        height: 200,
        width: 200,
    }

});
