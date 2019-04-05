import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {Image, StatusBar} from 'react-native';

class SplashScreen extends React.Component {

    

    componentWillMount(){
        
        setTimeout(()=>{
           this.props.navigation.navigate('login');
        }, 200);
    }

  
  render() {
    return (



        <LinearGradient colors={['#279793', '#00928D']}
        style={styles.linearGradient}
        locations={[1.2, 2.33]}>

        

        <Image
          source={require('../Assets/Images/logo.png')}
        />

       </LinearGradient>
    );
  }
}

const styles = {
  linearGradient: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',

  }
  
}

export default SplashScreen;