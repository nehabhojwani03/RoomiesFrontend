import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const PropertyListingScreen = () => {
    return(
        <View style={styles.container}>
            <Text  style={styles.text}> Property Listing </Text>
        </View>
    );
}

export default PropertyListingScreen;

const styles= StyleSheet.create({
    container:{
        flex: 1,
        alignItems:'center',
        justifyContent: 'center'

    },
    text: {
        fontSize: 20,
        fontWeight: 'bold'
    }
})