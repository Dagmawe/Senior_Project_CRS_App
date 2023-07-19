import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  ScrollView,
  TextInput,
  ImageBackground,
} from "react-native";

const styles = StyleSheet.create({
  info: {
    textAlign: "center",
    fontSize: 30,
    color: "white",
    padding: 10,
  },
  box: {
    color: "black",
    textAlign: "center",
    flex: 0.3,
    backgroundColor: "transparent",
    borderColor: "transparent",
    borderWidth: 5,
    borderRadius: 15,
    borderRightWidth: 25,
    borderLeftWidth: 25,
    marginHorizontal: 10,
    fontSize: 15,
    fontWeight: "bold",
    marginTop: 10,
    marginLeft: 0,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    margin: 20,
  },
  screen: {
    flex: 1,
  },
  header: {
    marginTop: 20,
    fontSize: 25,
    color: "#79A02C",
    fontWeight: "bold",
    textDecorationLine: "underline",
    textAlign: "center",
  },
  button: {
    backgroundColor: "#79A02C",
    borderRadius: 10,
    position: "absolute",
    left: 120,
    bottom: -50,
    width: 150,
    height: 40,
    textAlign: "center",
  },
  line: {
    color: "white",
    fontSize: 20,
    textAlign: "center",
  },
  texInput: {
    marginTop: 15,
    alignContent: "center",
    textAlign: "center",
    color: "black",
  },
});

const api_key = "fff37a119b38db5b2490d1f9435b8f5f";
export default class weather2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: undefined,
      latitude: undefined,
      longitude: undefined,
      climate: undefined,
      Temp: undefined,
      high_temp: undefined,
      low_temp: undefined,
      rain: undefined,
      humidity: undefined,
      sunrise: undefined,
      sunset: undefined,
      query: "Guatemala",
      background: false,
    };
    this.getWeather();
  }
  getWeather = async () => {
    const api_call = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${this.state.query}&units=metric&appid=${api_key}`
    );
    const response = await api_call.json();
    this.setState({
      city: response.name,
      country: response.sys.country,
      latitude: response.coord.lat,
      longitude: response.coord.lon,
      climate: response.weather[0].description,
      Temp: response.main.temp,
      high_temp: response.main.temp_max,
      low_temp: response.main.temp_min,
      rain: response.pop,
      humidity: response.main.humidity,
      sunrise: response.sys.sunrise,
      sunset: response.sys.sunset,
    });
    if (Math.round(this.state.Temp * (9 / 5) + 32) < 40) {
      alert("Cold weather conditions");
    }
    if (Math.round(this.state.Temp * (9 / 5) + 32) > 90) {
      alert("Hot weather conditions");
    }
    let convertedSunrise = this.timeConverter(this.state.sunrise);
    let convertedSunset = this.timeConverter(this.state.sunset);
    let hours = new Date().getHours();
    let check = this.backgroundFunction(
      hours,
      convertedSunset[0],
      convertedSunrise[0]
    );
    this.setState({
      sunrise: convertedSunrise,
      sunset: convertedSunset,
      background: check,
    });
    console.log(response);
  };

  timeConverter = (timestamp) => {
    var a = new Date(timestamp * 1000);
    var hour = a.getHours();
    var min = a.getMinutes();
    if (hour > 12) hour = hour - 12;
    if (min < 10) min = "0" + min;
    var time = hour + ":" + min;
    return time;
  };
  backgroundFunction = (currtime, sunset, sunrise) => {
    let sunsets = parseInt(sunset) + 12;
    let sunrises = parseInt(sunrise);
    let currtimes = parseInt(currtime);
    if (sunrises <= currtimes && currtimes <= sunsets) {
      return true;
    }
    return false;
  };
  render() {
    return (
      <View style={styles.screen}>
        <ImageBackground
          source={
            this.state.background
              ? require("./daytime_img.png")
              : require("./nightsky_img.png")
          }
          // source={require("./daytime_img.png")}
          style={styles.screen}
        >
          <ScrollView style={styles.ScrollView}>
            <Text style={styles.header}>Clima Actual de Hoy</Text>
            <TextInput
              style={styles.texInput}
              placeholder="Ingrese La Ubicación Aquí..."
              onChangeText={(value) => this.setState({ query: value })}
              onSubmitEditing={(event) => this.getWeather()}
            ></TextInput>
            <Text style={styles.line}>
              _____________________________________
            </Text>
            <Text style={styles.info}>
              {this.state.city} ({this.state.country})
            </Text>
            <Text style={styles.info}>
              {Math.round(this.state.Temp * (9 / 5) + 32)} ℉
            </Text>
            <Text style={styles.info}>{this.state.climate}</Text>
            <Text style={styles.info}>
              Bajo: {Math.round(this.state.low_temp * (9 / 5) + 32)} ° Alto:{" "}
              {Math.round(this.state.high_temp * (9 / 5) + 32)} °
            </Text>
            <View style={styles.container}>
              <Text style={styles.box}> Humedad {this.state.humidity}%</Text>
              <Text style={styles.box}>Rain</Text>
            </View>
            <View style={styles.container}>
              <Text style={styles.box}> Latitud: {this.state.latitude}</Text>
              <Text style={styles.box}> Longitud: {this.state.longitude}</Text>
            </View>
            <View style={styles.container}>
              <Text style={styles.box} numberOfLines={2}>
                Amanecer {this.state.sunrise}AM
              </Text>

              <Text style={styles.box}>
                {""}
                Puesta Del Sol {this.state.sunset}PM
              </Text>
            </View>
            <View style={styles.button}>
              <Button
                title="Refrescarse"
                color="white"
                onPress={this.getWeather}
              />
            </View>
          </ScrollView>
        </ImageBackground>
      </View>
    );
  }
}
