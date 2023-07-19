import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Image, Button } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import faq from "./faq";
import pdf from "./pdf";
import setting from "./setting";
import weather2 from "./weather2";
import texting from "./sms";

const styles = StyleSheet.create({
  title: {
    color: "white",
    fontSize: 30,
    top: 110,
    justifyContent: "center",
  },

  otherText: {
    color: "white",
    fontSize: 30,
    alignItems: "center",
    justifyContent: "center",
  },

  home: {
    flex: 1,
    //backgroundColor: '#00A2C7',
    backgroundColor: "#00468B",
    alignItems: "center",
    justifyContent: "center",
  },

  button1: {
    //Preguntas
    backgroundColor: "#7A99AC",
    margin: 0,
    borderRadius: 10,
    position: "absolute",
    left: 30, //Positioning
    bottom: 300, //Positioning
    width: 150, //Size
    height: 40, //Size
    textAlign: "center",
  },

  button2: {
    //Recursos
    backgroundColor: "#EF6E0B",
    margin: 0,
    borderRadius: 10,
    position: "absolute",
    right: 30, //Positioning
    bottom: 300, //Positioning
    width: 150, //Size
    height: 40, //Size
    textAlign: "center",
  },

  button3: {
    //Configuracion
    backgroundColor: "#9D9385",
    margin: 0,
    borderRadius: 10,
    position: "absolute",
    left: 30, //Positioning
    bottom: 200, //Positioning
    width: 150, //Size
    height: 40, //Size
    textAlign: "center",
  },

  button4: {
    //Clima
    backgroundColor: "#79A02C",
    margin: 0,
    borderRadius: 10,
    position: "absolute",
    right: 30, //Positioning
    bottom: 200, //Positioning
    width: 150, //Size
    height: 40, //Size
    textAlign: "center",
  },
  button5: {
    backgroundColor: "red",
    margin: 0,
    borderRadius: 10,
    width: 150, //Size
    height: 40, //Size
    position: "absolute",
  },
});

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.home}>
        <Text style={styles.title}>Aplicación Móvil</Text>
        <Text style={styles.title}>para Recursos Agrícolas</Text>

        <View style={{ top: -200, justifyContent: "center" }}>
          <Image
            source={require("./logo.png")}
            style={{
              width: 278,
              height: 181,
              borderBottomLeftRadius: 20,
              borderBottomRightRadius: 20,
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
            }}
          />
        </View>
        <View style={styles.button5}>
          <Button
            title="SMS"
            color="#001F4E"
            onPress={() => this.props.navigation.navigate("SMS")}
          />
        </View>
        <View style={styles.button1}>
          <Button
            title="Preguntas"
            color="#001F4E"
            onPress={() => this.props.navigation.navigate("Preguntas")}
          />
        </View>

        <View style={styles.button2}>
          <Button
            title="Recursos"
            color="#001F4E"
            onPress={() => this.props.navigation.navigate("Recursos")}
          />
        </View>

        <View style={styles.button3}>
          <Button
            title="Configuración"
            color="#001F4E"
            onPress={() => this.props.navigation.navigate("Configuración")}
          />
        </View>

        <View style={styles.button4}>
          <Button
            title="Clima"
            color="#001F4E"
            onPress={() => this.props.navigation.navigate("Clima")}
          />
        </View>

        <View style={{ bottom: -150, justifyContent: "center" }}>
          <Image
            source={require("./wheat-removebg-preview.png")}
            style={{ width: 254, height: 199 }}
          />
        </View>
      </View>
    );
  }
}

class WeatherScreen extends React.Component {
  render() {
    return (
      <View style={styles.home}>
        <Text style={styles.otherText}>Clima</Text>
      </View>
    );
  }
}

const AppNavigator = createStackNavigator(
  {
    Inicio: HomeScreen,
    Preguntas: faq,
    Recursos: pdf,
    Configuración: setting,
    Clima: weather2,
    SMS: texting,
  },

  {
    initialRouteName: "Inicio",
  }
);

const AppContainer = createAppContainer(AppNavigator);
export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
