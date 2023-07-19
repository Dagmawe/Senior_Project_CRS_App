import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Button, ScrollView } from 'react-native';

//Don't use react-native-pdf
//Don't use anything that involves some sort of util or blob
//These break the project

// Separate by topics

const styles = StyleSheet.create({
    screen: {
		flex: 1,
		backgroundColor: '#00468B',
	},

    otherText: {
		color: 'white',
		fontSize: 20,
	},

    buffer: {
        fontSize: 15,
        color: '#00A2C7',
    },

    button: {
        backgroundColor: '#EF6E0B',
		margin: 0,
		borderRadius: 10,
        textAlign: 'center',
    },

    buffer: {
        fontSize: 10,
        color: '#00A2C7',
    },
});

export default class pdf extends React.Component
{
    render() {
        return(
            <View style = {styles.screen}>
                <ScrollView style = {styles.ScrollView}>

                    <Text style = {styles.buffer}></Text>

                    <View style = {styles.button}>
                        <Button
                            title = "Evaluación Visual del Suelo Aplicada para Granos Básicos"
                            color = "#001F4E"
                            >
                        </Button>
                    </View>

                            <Text style = {styles.buffer}></Text>

                    <Text style = {styles.otherText}>Es un método práctico, basado en la observación 
                    visual de las propiedades de la tierra que indican la calidad que esta posee: 
                    (color, estructura, consistencia, porosidad, profundidad) especificado para granos.</Text>

                            <Text style = {styles.buffer}></Text>
                            <Text style = {styles.buffer}></Text>
        
                    <View style = {styles.button}>
                        <Button
                            title = "Evaluación Visual del Suelo para Café"
                            color = "#001F4E"
                            >
                        </Button>
                    </View>

                            <Text style = {styles.buffer}></Text>

                    <Text style = {styles.otherText}>Es un método práctico, basado en la observación 
                    visual de las propiedades de la tierra que indican la calidad que esta posee: 
                    (color, estructura, consistencia, porosidad, profundidad) especificado para café.</Text>

                            <Text style = {styles.buffer}></Text>
                            <Text style = {styles.buffer}></Text>

                    <View style = {styles.button}>
                        <Button
                            title = "Evaluación Visual de Suelos"
                            color = "#001F4E"
                            >
                        </Button>  
                    </View>

                            <Text style = {styles.buffer}></Text>

                    <Text style = {styles.otherText}>El presente documento hace una descripción de los 
                    pasos a seguir para realizar la evaluación visual de suelo y algunas medidas correctivas 
                    que se tiene que realizar para mejorar los indicadores e iniciar el proceso de restauración del suelo.</Text>

                            <Text style = {styles.buffer}></Text>
                            <Text style = {styles.buffer}></Text>

                    <View style = {styles.button}>
                        <Button
                            title = "VIDEO - Diagnóstico de Problemas de Acidez en los Suelos"
                            color = "#001F4E"
                            >
                        </Button>   
                    </View>

                            <Text style = {styles.buffer}></Text>

                    <Text style = {styles.otherText}>Compartimos con ustedes el tercer video sobre cuatro prácticas 
                    con las que podemos mejorar la productividad de nuestros suelos, y con ello seguir el camino hacia una mayor</Text>

                            <Text style = {styles.buffer}></Text>
                            <Text style = {styles.buffer}></Text>

                    <View style = {styles.button}>
                        <Button
                            title = "VIDEO - Coberturas Permanentes del Suelo"
                            color = "#001F4E"
                            >
                        </Button>                    
                    </View>

                            <Text style = {styles.buffer}></Text>

                    <Text style = {styles.otherText}>Compartimos con ustedes el primer video de cuatro prácticas 
                    con las que podemos mejorar la productividad de nuestros suelos y con ello una mayor.</Text>

                            <Text style = {styles.buffer}></Text>
                            <Text style = {styles.buffer}></Text>

                    <View style = {styles.button}>
                        <Button
                            title = "VIDEO - Evaluación Visual del Suelo"
                            color = "#001F4E"
                            >
                        </Button>                    
                    </View>

                            <Text style = {styles.buffer}></Text>

                    <Text style = {styles.otherText}>Compartimos con ustedes el segundo video de cuatro prácticas con las que 
                    podemos mejorar la productividad de nuestros suelos, y con ello seguir el camino hacia una mayor.</Text>

                            <Text style = {styles.buffer}></Text>
                            <Text style = {styles.buffer}></Text>

                    <View style = {styles.button}>
                        <Button
                            title = "VIDEO - #4RS para el Buen Manejo de los Nutrientes"
                            color = "#001F4E"
                            >
                        </Button>                    
                    </View>

                            <Text style = {styles.buffer}></Text>

                    <Text style = {styles.otherText}>Compartimos con ustedes el último video de cuatro prácticas 
                    con las que mejoramos la productividad de nuestros suelos, y con ello seguimos en el camino hacia una mayor.</Text>

                            <Text style = {styles.buffer}></Text>
                            <Text style = {styles.buffer}></Text>

                    <View style = {styles.button}>
                        <Button
                            title = "VIDEO - Buenas Practicas para el Manejo de Agua y Suelo: Cobertura Vegetal"
                            color = "#001F4E"
                            >
                        </Button>                    
                    </View>

                            <Text style = {styles.buffer}></Text>

                    <Text style = {styles.otherText}>El video muestra la resiliencia ante la sequía para las 
                    familias que adoptaron prácticas ASA, especialmente la cobertura vegetal.</Text>



                            <Text style = {styles.buffer}></Text>
                            <Text style = {styles.buffer}></Text>
                            <Text style = {styles.buffer}></Text>


                </ScrollView>
            </View>
        );
    }
}
