import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Button, Linking, ScrollView } from 'react-native';

const styles = StyleSheet.create({
    screen: {
		flex: 1,
		backgroundColor: '#00468B',
	},

    question: {
		color: 'white',
		fontSize: 23,
	},

	answer: {
		color: '#9D9385',
		fontSize: 20,
        fontStyle: 'italic',
	},

    buffer: {
        fontSize: 15,
        color: '#00A2C7',
    },

    topics: {
        fontSize: 25,
        color: '#7A99AC',
        fontWeight: 'bold',
        textDecorationLine: 'underline',
    },

    contact: {
        fontSize: 20,
        color: 'white',
        textAlign: 'center',
    },
});

export default class faq extends React.Component
{
    render() {
        return(
            <View style = {styles.screen}>
                <ScrollView style = {styles.ScrollView}>
                    <Text style = {styles.buffer}></Text>

                    <Text style = {styles.topics}>Información General Sobre ASA</Text>

                            <Text style = {styles.buffer}></Text>

                        <Text style = {styles.question}>¿Qué es ASA y cómo funciona?</Text>
                        <Text style = {styles.answer}>Agua y Suelo para la Agricultura (ASA) es un programa de CRS, 
                        que genera evidencias y conocimientos para mejorar la gestión del suelo y agua en los cultivos 
                        que se siembran de invierno (agricultura de secano); para enfrentar los procesos de degradación 
                        del suelo, adaptación al cambio climático y la sequía; y mejorar la producción de los cultivos de 
                        los agricultores, alimentación de su familia y rentabilidad de sus cultivos. Trabajamos en Honduras, 
                        Guatemala, El Salvador, Nicaragua y el sur de México.</Text>
                
                            <Text style = {styles.buffer}></Text>
                            <Text style = {styles.buffer}></Text>
                        
                        <Text style = {styles.question}>Información concreta de ASA y de la agricultura.</Text>
                        <Text style = {styles.answer}>Puedes visitar el sitio Web de ASA (https://asa.crs.org/recursos/), 
                        también a través de Facebook compartimos materiales y mensajes, según el calendario agrícola. Al 
                        suscribirte a la campaña estaremos compartiendo contigo semanalmente información que te puede ser de utilidad.</Text>

                            <Text style = {styles.buffer}></Text>
                            <Text style = {styles.buffer}></Text>

                    <Text style = {styles.topics}>Manejo del Suelo</Text>

                            <Text style = {styles.buffer}></Text>

                        <Text style = {styles.question}>¿Cómo manejar bien los suelos para una buena cosecha?</Text>
                        <Text style = {styles.answer}>Para la sequía hay dos formas de sembrar y captar agua: </Text>
                        <Text style = {styles.answer}>1. Utilizando cobertura viva o muerta sobre el suelo, le permite 
                        adicionar carbono orgánico, por lo tanto, más materia orgánica, infiltrar y recargar más humedad 
                        y disminuye la erosión de forma significativa.</Text>
                        <Text style = {styles.answer}>2. La otra forma de captar agua es a través de reservorios, a partir 
                        de sitios con drenajes naturales, pilas, tanques, otros.</Text>

                            <Text style = {styles.buffer}></Text>
                            <Text style = {styles.buffer}></Text>

                        <Text style = {styles.question}>¿Cómo se hace para levantar una milpa buenísima?</Text>
                        <Text style = {styles.answer}>Una buena milpa se levanta: </Text>
                        <Text style = {styles.answer}>1. Haciendo una valoración del estado de la salud del suelo 
                        (Puede hacer la evaluación visual que es muy práctica).</Text>
                        <Text style = {styles.answer}>2. Planificar los cultivos, si pone maíz considerar la variedad, 
                        ciclo, fechas de siembras, fertilización, considerar las distancias de siembra surco y planta 
                        (0.8 m entre surco y 0.2 m entre plantas) y es posible hacerlo al espeque; si pone fríjol adecuarlo 
                        según el arreglo del maíz entre las calles a 0.4 m entre surcos y más unos 10 cm entre plantas y 
                        tendrá buena densidad, también considerar su fertilización dirigida; también puede poner maicillo 
                        cada 5 a 6 surcos de maíz, también pipianes y ayotes. Siempre respetando el arreglo del cultivo, y 
                        no olvidar aplicar fertilizantes.</Text>

                            <Text style = {styles.buffer}></Text>
                            <Text style = {styles.buffer}></Text>

                        <Text style = {styles.question}>¿A los cuantos días de nacido se le puede aplicar la fumigación 
                        al tomate y que se debe hacer en el suelo para la fertilidad de siembras de plantas?</Text>
                        <Text style = {styles.answer}>Si el tomate lo tiene en el vivero debió aplicar al sustrato 
                        CONFIDOR 70 WG + PREVICUR 72 SL para contrarrestar los insectos y las enfermedades fungosas. 
                        Si lo tiene al aire libre seguro que lo que tiene es incidencia de mosca blanca usted puede 
                        eliminarla, pero el problema es que la planta ya infestada por hongo. Al momento del trasplante 
                        también debe aplicar CONFIDOR 70 WG + PREVICUR 72 SL al suelo en la base de la plantita.</Text>
                        <Text style = {styles.answer}>En el caso de la fertilización de tomate no se puede recomendar 
                        de forma general porque se requiere el análisis de suelos para realizarle una recomendación 
                        correcta, si lo tiene, favor de facilitarlo y con gusto se puede hacer el plan como el indicado en el cuadro.</Text>

                            <Text style = {styles.buffer}></Text>
                            <Text style = {styles.buffer}></Text>

                    <Text style = {styles.topics}>Siembra</Text>

                            <Text style = {styles.buffer}></Text>

                        <Text style = {styles.question}>¿Cómo ustedes hacen para sembrar el maíz curan con veneno el maíz?</Text>
                        <Text style = {styles.answer}>1. Distribuir la semilla (70 libras) sobre un plástico, se vierte la mitad 
                        del producto (75 ml) directamente del envase, se mezcla bien el grano, luego vierte la segunda mitad 
                        volviendo a mezclar. Se deja secar y se procede a la siembra (productos: BLINDAJE, ZARPER y GERMIMAX).</Text>
                        <Text style = {styles.answer}>2. Distribuir la semilla (70 libras) sobre un plástico. Para lograr una 
                        mejor cobertura de la semilla se prepara a veces una mezcla pastosa-acuosa; en este caso se mezcla en 
                        la siguiente proporción: 150 mL de Germimax + 150 mL de Agua para las 70 libras de semilla y se mezcla 
                        bien. Se debe dejar secar la semilla y se procede a la siembra.</Text>
                        <Text style = {styles.answer}>3. Colocar la cantidad de 35 libras de semilla en una bolsa plástica y 
                        deposite la mitad del producto, agitar la bolsa hasta obtener una distribución uniforme del producto 
                        en la semilla. Colocar la semilla en un plástico, para que se seque y luego sembrar, utilizando Germimax, 
                        este se adecua para maíz. Estas tres formas se pueden utilizar para maíz y frijol. Dosis aproximada del 
                        producto: 2 a 2.2 cc por libra de semilla. Si se va a preparar menos semilla. Estos productos generalmente vienen en frasco de 100 cc. </Text>

                            <Text style = {styles.buffer}></Text>
                            <Text style = {styles.buffer}></Text>

                    <Text style = {styles.topics}>Asesoramiento técnico</Text>

                            <Text style = {styles.buffer}></Text>

                        <Text style = {styles.question}>Solicitud de asistencia, porque no hubo tanta producción de maíz y frijol.</Text>
                        <Text style = {styles.answer}>Respuestas vía llamada por el especialista.</Text>

                            <Text style = {styles.buffer}></Text>
                            <Text style = {styles.buffer}></Text>

                        <Text style = {styles.question}>Orientaciones sobre agricultura sostenible </Text>
                        <Text style = {styles.answer}>Respuestas vía llamada por el especialista </Text>

                            <Text style = {styles.buffer}></Text>
                            <Text style = {styles.buffer}></Text>

                        <Text style = {styles.buffer}></Text>
                        <Text style = {styles.buffer}></Text>

                    <Text style = {styles.buffer}></Text>
                    <Text style = {styles.buffer}></Text>
                </ScrollView>
            </View>
        );
    }
}
