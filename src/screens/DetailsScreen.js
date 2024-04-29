import { StyleSheet, Text, View, Button } from 'react-native';

export function DetailsScreen({navigation}) {
    return(
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Details </Text>
          <Button title='Go to details...again'
          onPress={() => navigation.push('Details')}/>
          <Button title='Go to home' onPress={() => navigation.navigate('Home')}/>
          <Button title='Go back' onPress={()=> navigation.goBack()}/>
      </View>
    )
  }