import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default class ChooseTypeScreen extends Component {

    render() {
        return (
            <View style={styles.container}>

                <View style={styles.header}>
                    <Text style={styles.text}>VÆLG MØBELTYPE</Text>
                </View>

                <View style={styles.container2}>
                    <TouchableOpacity styles={styles.imageText} onPress={() => alert('KOMMER')}>
                        <Image style={styles.image} source={require('../img/Spisestol.png')}/>
                        <Text style={styles.imageText}>STOLE</Text>
                    </TouchableOpacity>

                    <TouchableOpacity styles={styles.imageText} onPress={() => alert('KOMMER')}>
                        <Image style={styles.image} source={require('../img/Natbord.png')}/>
                        <Text style={styles.imageText}>NATBORD</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.container3}>
                    <TouchableOpacity styles={styles.imageText} onPress={() => alert('KOMMER')}>
                        <Image style={styles.image} source={require('../img/Tvbord.png')}/>
                        <Text style={styles.imageText}>TV BORD</Text>
                    </TouchableOpacity>

                    <TouchableOpacity styles={styles.imageText} onPress={() => alert('KOMMER')}>
                        <Image style={styles.image} source={require('../img/Spisebord.png')}/>
                        <Text style={styles.imageText}>SPISEBORD</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.container3}>
                    <TouchableOpacity styles={styles.imageText} onPress={() => alert('KOMMER')}>
                        <Image style={styles.image} source={require('../img/Skuffer.png')}/>
                        <Text style={styles.imageText}>KOMMODE</Text>
                    </TouchableOpacity>

                    <TouchableOpacity styles={styles.imageText} onPress={() => alert('KOMMER')}>
                        <Image style={styles.image} source={require('../img/Storkommode.png')}/>
                        <Text style={styles.imageText}>SPECIAL</Text>
                    </TouchableOpacity>
                </View>

            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        height: '100%',
        width: '100%',
    },
    container2: {
        flex: 3,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        width: '100%',
        paddingBottom: 10,
    },
    container3: {
        flex: 3,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        width: '100%',
        paddingBottom: 10,
        paddingLeft: 20,
    },
    header: {
        flex: 1,
        alignItems: 'center',
        width: '100%',
        paddingTop: 50,
    },
    text: {
        fontSize: 25,
    },
    imageText: {
        alignItems: 'center',
        marginEnd: 30,
        marginStart: 30,
        fontSize: 16,
        color: 'grey',
    },
    image: {
        height: 110,
        width: 110,
    }
});
