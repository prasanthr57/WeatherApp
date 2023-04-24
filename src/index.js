import { ActivityIndicator, Alert, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Constants from 'expo-constants'
import WeatherInfo from './WeatherInfo'
import axios from 'axios'

const API_KEY = '2b6b3458e16adc9579055c8e869d0a47';

const Weather = () => {
    const [WeatherData, setweatherData] = useState(null);
    const [loaded, setloaded] = useState(false);

    const fetchWeatherData = async (cityname) => {
        // try {
        //     setloaded(true);
        //     const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${API_KEY}`);
        //     if (response.status === 200) {
        //         const data = await response.json();
        //         setweatherData(data);
        //     } else {
        //         setweatherData(null);
        //         Alert.alert('Error', 'Could not fetch weather data');
        //     }
        // } catch (error) {
        //     Alert.alert('Error', error.message);
        //     setweatherData(null);
        // } finally {
        //     setloaded(false);
        // }
       try {
        setloaded(true)
        const config={
            method: 'get',
            url:`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${API_KEY}&units=metric`
        }
        const {data}=await axios(config)
        setloaded(false)
         if (data){
            setweatherData(data);
         } else{
            setweatherData(null);
         }
       } catch (err) {
        setloaded(false)
        Alert.alert('Error', 'Provide Valid City Name');
       }
    };

    useEffect(() => {
        fetchWeatherData('Madhubani');
    }, []);

    if (loaded) {
        return (
            <View style={styles.Container}>
                <ActivityIndicator size='large' color='#333333' />
            </View>
        )
    }

    return (
        <View style={styles.Container}>
            <View style={styles.Header}>
                <Text style={styles.HeaderTitle}>Weather App</Text>
            </View>
            <WeatherInfo WeatherData={WeatherData} fetchWeatherData={fetchWeatherData} />
        </View>
    )
}

export default Weather

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: "#e6e6e6",
        paddingTop: Constants.statusBarHeight,
    },
    Header: {
        alignItems: "center",
        // backgroundColor: "#C5D2EF",
        height: 50,
        justifyContent: "center"
    },
    HeaderTitle: {
        fontSize: 30,
        fontWeight: "bold",
    }
});
