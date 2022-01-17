
import {
  Platform, 
  StyleSheet ,
  Dimensions, 
  View,
  Button, 
  Text,
  Image
} from 'react-native';

import WavyBackground from '../constants/WavyBackground';
import HeaderTop from './HeaderTop';

export default function Header({navigation}) {
  return (
    <View style={styles.container}>
          <WavyBackground  customStyles={styles.svgCurve}/>
          <View  style={styles.headerContainer}>
          <View style={styles.navBar}>
            <View style={styles.leftContainer}>
            <Button
                title="Go to Details"
                onPress={() => navigation.navigate('Details')}
              />
            </View>
            <View style={styles.centerContainer}>
                   
            </View>
            <View style={styles.rightContainer}>
                <View style={styles.rightIcon}>
                    <Text>Notiifications</Text>
                </View>
            </View>
          </View>
          <Text>Welcome to Pandora</Text>
          </View>
          <View style={styles.headerContainer}>
            <Image style={styles.heroImage} source={require('./img/girl-work-on-laptop.png')}/>
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
    // change the color property for better output
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
    backgroundColor: 'blue',
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
    backgroundColor: 'red',
  },
  rightIcon: {
    height: 50,
    width: 50,
    resizeMode: 'contain',
    backgroundColor: 'white',
  }
});