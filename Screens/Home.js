import react, {useState} from "react";
import { StyleSheet, View, Text, FlatList, TouchableOpacity } from "react-native";
import Card from '../shared/card';

export default function Home({navigation}){
    const [Reviews, setReviews] = useState([
        {key:"1", title:"The Stanley Parable: Ultra Deluxe", body:"You will play as Stanley, and you will not play as Stanley. You will make a choice, and you will become powerless. You are not here to win. The Stanley Parable is a game that plays you.", rating:"3"},
        {key:"2", title:"Rogue Legacy 2", body:"Rogue Legacy 2 is what you'd get if you mashed Rogue Legacy and a sequel together. Every time you die, your children will succeed you, and each child is unique. Your daughter might be a Colourblind Archer, and your son could be a Pacifistic Chef. Either way, one of them is getting conscripted.", rating:"4"},
        {key:"3", title:"Injustice: Gods Among Us", body:"This Teen-rated brawler lets DC Comics' most famous heroes and villains duke it out in brutal matches. Players can use weapons (guns, knives, etc.) and over-the-top punches and kicks to win rounds. There is blood in the game, closeups of violent moves, and some violent cutscene sequences, too. The game also has some suggestively dressed female fighters and some inappropriate language.", rating:"5"},
        {key:"4", title:"God of War", body:"His vengeance against the gods of Olympus far behind him, Kratos now lives as a man in the lands of Norse Gods and monsters. It is in this harsh, unforgiving world that he must fight to survive… and teach his son to do the same. As mentor and protector to a son determined to earn his respect, Kratos is faced with an unexpected opportunity to master the rage that has long defined him. Questioning the dark lineage he’s passed on to his son, he hopes to make amends for the shortcomings of his past.", rating:"5"}
    ])
    const PressHandler =()=>{
        navigation.navigate('Review Details')
    }
    return(
        <View style={styles.container}>
            <FlatList
            data={Reviews}
            renderItem={({item})=>(
                <TouchableOpacity onPress={()=> navigation.navigate("Review Details", item)}>
                    <Card> <View>{item.title}</View> </Card>
                </TouchableOpacity>
    )}
            />
            
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        padding:24,
        backgroundColor:'#53a69d'
    }
})
