import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../Screens/Home';
import About from '../Screens/About';
import ReviewDetails from '../Screens/reviewDetails'

const Stack= createNativeStackNavigator();

export default function Navigator() {
    return (

            <NavigationContainer >
              <Stack.Navigator initialRouteName='Home' screenOptions={{ headerStyle: { backgroundColor: '#969693' } }}>
                  <Stack.Screen name="Home" component={Home} />
                  <Stack.Screen name='Review Details' component={ReviewDetails} />
              </Stack.Navigator>
            </NavigationContainer>

     
    );
  }
