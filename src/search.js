import { StyleSheet, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { EvilIcons } from '@expo/vector-icons';
import { Dimensions } from 'react-native';

const Weathersearch = ({ fetchWeatherData }) => {
    const [cityname, setcityname] = useState('');
    const HandleWeatherData=(text)=>{
       setcityname(text)
    }
    const HandleSubmit=()=>{
        fetchWeatherData(cityname) 
    }
    return (
        <View style={styles.SearchBar}>
            <TextInput 
                placeholder='Search City'
                value={cityname}
                onChangeText= {HandleWeatherData}
            />
            <EvilIcons name='search' size={25} color='black'
                onPress={HandleSubmit}/>
        </View>
    )
}

export default Weathersearch

const styles = StyleSheet.create({
    SearchBar: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: Dimensions.get('screen').width - 20,
        // borderWidth: 1.5,
        paddingVertical: 10,
        borderRadius: 15,
        marginHorizontal: 10,
        paddingHorizontal: 10,
        backgroundColor:'#cccccc',
    }
})