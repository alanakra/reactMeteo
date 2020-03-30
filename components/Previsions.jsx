import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';


function Previsions(props) {

  const apiKey = '96bf68a7d698802acd26cacd7a23d3df';
  var cityName = 'Paris';
      
  console.log("Bonjour");

  const [city, setCity] = useState('');
  const [desc, setDesc] = useState('');
  const [temp1, setTemp1] = useState('');
  const [temp2, setTemp2] = useState('');
  const [temp3, setTemp3] = useState('');
  const [prevHour1, setPrevHour1] = useState('');
  const [prevHour2, setPrevHour2] = useState('');
  const [prevHour3, setPrevHour3] = useState('');

  useEffect(() => {
      fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apiKey}&units=metric&lang=fr`)
          .then((response) => response.json())
          .then(r => {
              setTemp1(r.list[0].main.temp)
              setTemp2(r.list[1].main.temp)
              setTemp3(r.list[2].main.temp)
              setPrevHour1(r.list[0].dt_txt)
              setPrevHour2(r.list[1].dt_txt)
              setPrevHour3(r.list[2].dt_txt)
          })
          .catch((error)=>{
            console.log(error);
          });
  }, []);

 return (
  <View style={previsionStyle.table}>
        <View style={previsionStyle.line1} >
              <Text style={previsionStyle.prev}>{prevHour1}</Text>
              <Text style={previsionStyle.prev}>{temp1}</Text>
        </View>
        <View style={previsionStyle.line2} >
              <Text style={previsionStyle.prev}>{prevHour2}</Text>
              <Text style={previsionStyle.prev}>{temp2}</Text>
        </View>
        <View style={previsionStyle.line3} >
              <Text style={previsionStyle.prev}>{prevHour3}</Text>
              <Text style={previsionStyle.prev}>{temp3}</Text>
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
      },

      prev:{
            color: 'white',
            fontSize: 20
      }
      
})

export default Previsions;