import { StyleSheet, Text, View } from 'react-native';
import MainScreen from './src/screen/MainScreen';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux'
import EditScreen from './src/screen/EditScreen';
import AddScreen from './src/screen/AddScreen';
import store from './src/redux/store';

export default function App() {
  const Stack = createNativeStackNavigator()
  return (
    <View style={styles.container}>
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='Main' component={MainScreen} />
            <Stack.Screen name='Edit' component={EditScreen} />
            <Stack.Screen name='Add' component={AddScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingTop: 30
  },
});
