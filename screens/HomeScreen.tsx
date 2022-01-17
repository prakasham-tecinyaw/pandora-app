import { StatusBar } from 'expo-status-bar';
import { FontAwesome,MaterialIcons , Feather } from '@expo/vector-icons';
import {  useState} from 'react';
import {
  Platform, 
  StyleSheet ,
  Dimensions, 
  View,
  Button,
  Pressable,

  Text,
  Image
} from 'react-native';
import Header from '../components/Header';
import WavyBackground from '../constants/WavyBackground';
export default function HomeScreen({navigation}) {

  return (
    <View style={styles.container}>
      <WavyBackground  customStyles={styles.svgCurve}/>
      <View  style={styles.headerContainer}>
      <View style={styles.navBar}>
        <View style={styles.leftContainer}>
        </View>
        <View style={styles.centerContainer}>
        </View>
        <View style={styles.rightContainer}>
            <View style={styles.rightIcon}>
              <Pressable onPress={() => navigation.navigate('Notification')}>
                <Feather name='bell' color={'#22577a'} size={30}/>
              </Pressable>
            </View>
        </View>
      </View>
      {/* <Text>{`Good ${greet}`}</Text> */}
      <Text style={styles.headerText}>Welcome to Pandora</Text>
      </View>
      <View style={styles.headerContainer}>
        <Image style={styles.heroImage} source={require('../assets/images/girl-work-on-laptop.png')}/>
      </View>
    </View>

  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  headerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 30,
    fontWeight: 'bold',
    fontFamily: 'space-mono',
    color: '#fff',
    textAlign: 'center',
  },
  svgCurve: {
    position: 'absolute',
    width: Dimensions.get('window').width
  },
  heroImage:{
    resizeMode: "center",
    width: 250,
    height:200,
  },
  navBar: {   
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop:30,
  },
  leftContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    backgroundColor: 'green'
  },
  centerContainer:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'yellow'
  },
  leftIcon: {
      height: 50,
      width: 50,
      resizeMode: 'contain',
      backgroundColor: 'white',
  },
  rightContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  rightIcon: {
    height: 50,
    width: 50,
    resizeMode: 'contain',
  }
});