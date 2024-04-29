import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from './src/screens/Home';
import { DetailsScreen } from './src/screens/DetailsScreen';


// function HomeScreen({navigation}) {
//   return(
//     <View style = {{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//       <Text >Home screen</Text>
//       <Button
//         title="Go to Details"
//         onPress={() => navigation.navigate('Details')}
//       />
//     </View>
//   )
// }



// function DetailsScreen({navigation}) {
//   return(
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//         <Text>Details </Text>
//         <Button title='Go to details...again'
//         onPress={() => navigation.push('Details')}/>
//         <Button title='Go to home' onPress={() => navigation.navigate('Home')}/>
//         <Button title='Go back' onPress={()=> navigation.goBack()}/>
//     </View>
//   )
// }

const Stack = createNativeStackNavigator();

 function App() {
  return (
    
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{title:'Overview'}}/>
        <Stack.Screen name="Details" component={DetailsScreen} options={{title:'Details'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}




export default App;


