import react from "react";
import { StyleSheet, View, Text, Image } from "react-native-web";
import Card from '../shared/card';

export default function ReviewDetails({route, navigation}){
    const { title, body, rating } = route.params;

    const images = {
        ratings:{
            '1':require('../assets/rating-1.png'),
            '2':require('../assets/rating-2.png'),
            '3':require('../assets/rating-3.png'),
            '4':require('../assets/rating-4.png'),
            '5':require('../assets/rating-5.png')
    
        }
    }
   
    return(
        
        <View >
            <Card>
                <Text>{title}</Text>
                <Text>{body}</Text>
            <View style={styles.rating}>
                <Text> Kizangila's Rating: </Text>
                <Image style={{width: rating*15, height: 15}} source = {images.ratings[rating]}/>
             </View>
                 
        </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        padding:24,
        backgroundColor:'#53a69d'
    },
    rating:{
        flexDirection:'row',
        justifyContent:'center',
        paddingTop:15,
        marginTop:15,
        borderTopWidth:1,
        borderTopColor:'#eee'
    }
 
})
