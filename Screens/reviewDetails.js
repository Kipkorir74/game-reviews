
import react from "react";
import { StyleSheet, View, Text, Button } from "react-native-web";

export default function ReviewDetails({route, navigation}){
    const { title, body, rating } = route.params;
   
    return(
        <View style={styles.container}>
          <Text>{title}</Text>
          <Text>{body}</Text>
          <Text>Rating:{rating}</Text> 
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        padding:24,
        backgroundColor:'#53a69d'
    }
})
