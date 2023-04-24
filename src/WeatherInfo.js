import { Dimensions, Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Weathersearch from './search';

const WeatherInfo = ({ WeatherData, fetchWeatherData }) => {
    if (!WeatherData) {
        return null;
    }
    const {
        name,
        visibility,
        weather: [{ icon, description }],
        main: { temp, humidity, feels_like, },
        wind: { speed },
        sys: { sunrise, sunset },
    } = WeatherData;
    return (
        <SafeAreaView style={styles.Container}>
            <Weathersearch fetchWeatherData={fetchWeatherData} />
            <View style={{ alignItems: "center" }}>
                <Text style={styles.title}>{name}</Text>
            </View>
            <View style={styles.logo}>
                <Image style={styles.largeIcon}
                    source={{ uri: `http://openweathermap.org/img/wn/${icon}.png` }}
                />
                <Text style={styles.currentTemp}>{temp} °C</Text>

            </View>
            <Text style={styles.description}>{description}</Text>
            <View style={styles.extraInfo}>
                <View style={styles.Info}>
                    <Image
                        style={styles.smallIcon}
                        source={require('../assets/image/temp.png')}
                    />
                    <Text style={styles.infoText}>{feels_like} °C</Text>

                    <Text style={styles.infoText}>Feels Like</Text>
                </View>
                <View style={styles.Info}>
                    <Image
                        style={styles.smallIcon}
                        source={require('../assets/image/humidity.png')}
                    />
                    <Text style={styles.infoText}>{humidity} %</Text>
                    <Text style={styles.infoText}>Humidity</Text>
                </View>
            </View>
            <View style={styles.extraInfo}>
                <View style={styles.Info}>
                    <Image
                        style={styles.smallIcon}
                        source={require('../assets/image/visibility.png')}
                    />
                    <Text style={styles.infoText}>{visibility}</Text>
                    <Text style={styles.infoText}>Visibility</Text>
                </View>
                <View style={styles.Info}>
                    <Image
                        style={styles.smallIcon}
                        source={require('../assets/image/windspeed.png')}
                    />
                    <Text style={styles.infoText}>{speed} m/s</Text>
                    <Text style={styles.infoText}>Wind Speed</Text>
                </View>
            </View>
            <View style={styles.extraInfo}>
                <View style={styles.Info}>
                    <Image
                        style={styles.smallIcon}
                        source={require('../assets/image/sunrise.png')}
                    />
                    <Text style={styles.infoText}>{new Date(sunrise * 1000).toLocaleString()}</Text>
                    <Text style={styles.infoText}>Sunrise</Text>
                </View>
                <View style={styles.Info}>
                    <Image
                        style={styles.smallIcon}
                        source={require('../assets/image/sunset.webp')}
                    />
                    <Text style={styles.infoText}>{new Date(sunset * 1000).toLocaleString()}</Text>
                    <Text style={styles.infoText}>Sunset</Text>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default WeatherInfo

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        marginTop: 15,
    },
    title: {
        textTransform:"capitalize",
        width: "100%",
        textAlign: "center",
        fontSize: 26,
        fontWeight: "bold",
        color: "#e96e50",
        marginTop: 10,
    },
    logo: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around"
    },
    largeIcon: {
        width: 200,
        height: 200
    },
    currentTemp: {
        fontSize: 26,
        fontWeight: "bold",
        textAlign: "center"
    },
    description: {
        textAlign: "center",
        fontSize: 26,
        fontWeight: "bold",
        marginBottom: 10
    },
    extraInfo: {
        flexDirection: "row",
        justifyContent: "space-around",
        padding: 7,
    },
    Info: {
        width: Dimensions.get('screen').width / 2.5,
        backgroundColor: "#f2f2f2",
        padding: 10,
        borderRadius: 15,
        elevation:3,
        justifyContent: "center",
    },
    smallIcon: {
        height: 40,
        width: 40,
        borderRadius: 40 / 2,
        marginLeft: 50
    },
    infoText: {
        textAlign: "center",
        fontSize: 17
    }
})