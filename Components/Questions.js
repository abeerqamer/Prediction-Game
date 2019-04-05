import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Counter from 'react-native-counter';



const question = () =>{

    return(

        <View style={styles.container}>

        <Counter
            end={0}                        // REQUIRED End of the counter
            start={60}                     // Beginning of the counter
            time={60}                   // Duration (in ms) of the counter
            digits={0}                    // Number of digits after the comma
            easing="linear"               // Easing function name
            onComplete={}                 // Callback when the counter is completed
            />

            <Text>Will Jon Snow ever marry Daenayrs the queen?</Text>


        </View>


    );



};

const style = StyleSheet.create({

    container:{
        flex:1,
        

    }




});


export default question;
