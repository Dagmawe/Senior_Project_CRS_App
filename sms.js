import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ScrollView, View, Button, Text, TextInput } from 'react-native';
import { Component } from 'react';
import * as SMS from 'expo-sms';
import { SafeAreaView } from 'react-navigation';

export default class texting extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: undefined
        }
    }

    onPress= async () => {
        if (await SMS.isAvailableAsync()) {
        const { result } = await SMS.sendSMSAsync(
            ['50222699489'],
            this.state.message
        );

        console.log(result)
        }
        else alert("SMS is unavailable for this device");
    };

    /*onPress1= () => {
        SendSMS.send({
            body: 'Test',
            recipients: ['2673193005'],
            successTypes: ['sent', 'queued'],
            allowAndroidSendWithoutReadPermission: true
        }, (completed, cancelled, error) => {
            console.log('SMS Callback: completed ' + completed + ' cancelled: ' + cancelled + ' error: ' + error);
        });
    }*/

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.content}>
                    <Text style={styles.title}>Mensajería Directia de CRS</Text>
                    <TextInput style= {styles.texInput}
                        value= {this.state.message}
                        placeholder= "Entras tu mensaje aquí"
                        placeholderTextColor= 'black'
                        multiline= {true}
                        onChangeText= {(value) => this.setState({message: value})}
                    />
                    <View style={styles.buttons}>
                    <View style={styles.sendButton}>
                        <Button
                            title= 'Enviar texto'
                            color = 'white'
                            onPress= {this.onPress}
                        />
                    </View>
                    <View style={styles.clearButton}>
                        <Button
                            title= 'Borrar texto'
                            color = 'white'
                            onPress= {()=> {this.setState({message: undefined})}}
                        />
                    </View>
                    </View>
                    <StatusBar style="auto" />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
        fontSize: 30,
        marginTop: 10,
        // paddingBottom: 50,
        position: 'absolute',
    },
    texInput: {
        //alignContent: 'center',
        textAlign: 'center',
        color: 'black',
        borderColor: 'black',
        width: '90%',
        borderWidth: 1,
        fontSize: 25,
        marginTop: 50,
      },
      content: {
        alignItems: 'center',
        width: '100%',
        bottom: 200
      },
      buttons: {
        display: 'flex',
      },
      sendButton: {
        position: 'absolute',
        color: 'white',
        backgroundColor: '#1e90ff',
        height: 40,
        width: '49%',
        top: 5,
        left: 1,
        borderWidth: 1,
        borderColor: 'black',
      },
      clearButton: {
        position: 'absolute',
        color: 'white',
        backgroundColor: '#FF0000',
        height: 40,
        width: '49%',
        top: 5,
        right: 1,
        borderWidth: 1,
        borderColor: 'black',
      },
  });