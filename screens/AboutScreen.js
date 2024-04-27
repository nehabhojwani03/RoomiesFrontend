import {View, Text, StyleSheet} from 'react-native';

const AboutScreen = () => {
    return(
        <View style={styles.container}>
            <Text style={styles.text}>About Screen</Text>
        </View>
    );
};

export default AboutScreen;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    text:{
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 16
    }
})