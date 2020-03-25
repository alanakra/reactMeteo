import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';


function Previsions(props) {

 var [temps, setTemps] = useState([
  
 ]);

 return (
  <View style={{flex: 1, flexDirection: 'column'}}>
        <View style={{width: '100%', height: 50, backgroundColor: 'powderblue', justifyContent: 'space-around', flexDirection: 'row'}} >
              <Text>Samedi</Text>
              <Text>10 C°</Text>
        </View>
        <View style={{width: '100%', height: 50, backgroundColor: 'skyblue', justifyContent: 'space-around', flexDirection: 'row'}} >
              <Text>Dimanche</Text>
              <Text>10 C°</Text>
        </View>
        <View style={{width: '100%', height: 50, backgroundColor: 'steelblue', justifyContent: 'space-around', flexDirection: 'row'}} >
              <Text>Lundi</Text>
              <Text>10 C°</Text>
        </View>
  </View>
 );
}

export default Previsions;