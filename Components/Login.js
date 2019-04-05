//import liraries
import React from 'react';
import { View, Image, StatusBar, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Card from './Common/Card';
import CardSection from './Common/CardSection';
import Input from './Common/Input';
import {Button, Icon} from 'native-base';



const login = () =>{


    StatusBar.setBackgroundColor("rgba(0,0,0,0.5)")
    StatusBar.setBarStyle("light-content")
    StatusBar.setTranslucent(true)

  

   
      return (
  
  
          <View style={styles.container}>

               {/* <LinearGradient colors={['#279793', '#00928D']}
            style={styles.linearGradient}
            locations={[1.2, 2.33]}>

            </LinearGradient> */}


            <Image style={{alignSelf:'center', top:0, marginTop:50}} source={require('../Assets/Images/logo-small.png')}/>


              <Card>
              <CardSection>
                <Input
                  label="Email"
                  placeholder="user@gmail.com"
                  
                  
                />
              </CardSection>

               <CardSection>
                <Input style={{color:'#fff'}}
                  label="Password"
                  placeholder="password"
                  
                  
                />
              </CardSection>

              </Card>

              <Button  block rounded large style={{backgroundColor:'#FF5353', marginTop:20}}>
              <Text style={{color:'#fff', fontWeight:'700'}}>SIGN IN</Text>
              </Button>

             
             
                <Button block rounded large style={{backgroundColor:'#425BB4', marginTop:20}}>
                <Icon name='arrow-back' />
              <Text style={{color:'#fff', fontWeight:'700'}}>LOGIN WITH FACEBOOK</Text>
              </Button>

              <Text style={{color:'#fff',  alignSelf:'center', marginTop:60}}>Don’t Have an Account ?</Text>


              


              {/* <Image
              source={require('../Assets/Images/bg.png')}>

              </Image> */}


          </View>


           

            
           
         
        
      );
    
    
    

};


const styles = {
    container: {
      flex: 1,

      backgroundColor:'#279793'
      
  
    },

   

   
   
  }


export default login;
