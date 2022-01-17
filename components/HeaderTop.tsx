
import {
    Platform, 
    StyleSheet ,
    Pressable,
    Dimensions, 
    View, 
    Button,
    Text,
    Image,
  } from 'react-native';
  
  export default function HeaderTop({navigation}) {
    return (
        <View style={styles.navBar}>
            <View style={styles.leftContainer}>
            <Button
                title="Go to Details"
                onPress={() => navigation.navigate('Details')}
              />
            </View>
            <View style={styles.rightContainer}>
                <View style={styles.rightIcon}>
                    <Text>Notiifications</Text>
                </View>
            </View>
        </View>
    );
  }
  const styles = StyleSheet.create({
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