import react from "react";
import { StyleSheet, View, Text } from "react-native-web";


export default function About(){
    return(
        <View style={styles.container}>
            <Text> About Screen </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        padding:24,
        backgroundColor:'#53a69d'
    }
})

