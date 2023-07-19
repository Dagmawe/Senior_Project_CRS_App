import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Button, Linking, ScrollView } from 'react-native';

const styles = StyleSheet.create({
    screen: {
		flex: 1,
		backgroundColor: '#00468B',
	},
    
    title: {
		color: '#DA291C',
		fontSize: 30,
        textAlign: 'center',
        fontWeight: 'bold',
	},

	otherText: {
		color: 'white',
		fontSize: 30,
	},

    contact: {
        fontSize: 20,
        color: 'white',
        textAlign: 'center',
        textDecorationLine: 'underline',
    },

    buffer: {
        fontSize: 15,
        color: '#00A2C7',
    },
});

export default class settings extends React.Component
{
    render() {
        return(
            <View style = {styles.screen}>
                <ScrollView style = {styles.ScrollView}>
                    <Text style = {styles.buffer}></Text>

                    <Text style = {styles.title}>Contactar a CRS</Text>

                    <Text style = {styles.buffer}></Text>

                    <Text style = {styles.contact}>Email: asa@crs.org</Text>

                    <Text style = {styles.buffer}></Text>

                    <Text style = {styles.contact} onPress = { () => Linking.openURL('http://wa.me/50222699489?')}>WhatsApp Enlace: 2269-9489</Text>

                    <Text style = {styles.buffer}></Text>

                    <Text style = {styles.contact} onPress = { () => Linking.openURL('https://asa.crs.org')}>Sitio Web: asa.crs.org</Text>

                </ScrollView>
            </View>
        );
    }
}
