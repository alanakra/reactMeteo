import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';


function Previsions(props) {
      
  console.log("Bonjour");
 return (
  <View style={previsionStyle.table}>
        <View style={previsionStyle.line1} >
              <Text>Samedi</Text>
              <Text>10 C°</Text>
        </View>
        <View style={previsionStyle.line2} >
              <Text>Dimanche</Text>
              <Text>10 C°</Text>
        </View>
        <View style={previsionStyle.line3} >
              <Text>Lundi</Text>
              <Text>10 C°</Text>
        </View>
  </View>
 );
}

const previsionStyle = StyleSheet.create({
      table:{
            flexDirection: 'column',
            flex: 1,
      },

      line1:{
            width: '100%', 
            height: 50, 
            backgroundColor: 'powderblue', 
            justifyContent: 'space-around', 
            flexDirection: 'row',
      },

      line2:{
            width: '100%', 
            height: 50, 
            backgroundColor: 'skyblue', 
            justifyContent: 'space-around', 
            flexDirection: 'row'
      },

      line3:{
            width: '100%', 
            height: 50, 
            backgroundColor: 'steelblue', 
            justifyContent: 'space-around', 
            flexDirection: 'row'
      }
})

export default Previsions;