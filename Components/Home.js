import React from 'react';
import {ScrollView} from 'react-native';

const home = () =>{

    return(

        <ScrollView>

            <Image source={require('../Assets/Images/flash.png')}/>
            <Image source={require('../Assets/Images/TWD.png')}/>
            <Image source={require('../Assets/Images/GOT.png')}/>


        </ScrollView>


    );



};

export default home;