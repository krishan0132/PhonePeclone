
import React from 'react';
import {
  View,
  Text,
  Button,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const Commonheader = () => {

  return (
    <View style={style.header}>
      <View
        style={{flexDirection: 'row', alignItems: 'center', paddingLeft: 20}}>
        <View
          style={{
            height: 40,
            width: 40,
            backgroundColor: 'white',
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
          }}>
          <Image
            style={style.profile}
            source={require('../images/profile.png')}
          />
          <Image
            style={style.profile1}
            source={require('../images/flag.png')}
          />
        </View>
        <View style={{marginLeft: 30, flexDirection: 'row'}}>
          <Text style={style.text}>Address</Text>
          <Image
            style={{height: 10, width: 10}}
            source={require('../images/triangle.png')}
          />
        </View>
      </View>
      <View style={style.headerright}>
        <TouchableOpacity >
          <Image
            style={{height: 30, width: 30, tintColor: 'white'}}
            source={require('../images/scanner.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={{height: 30, width: 30, tintColor: 'white', marginLeft: 20}}
            source={require('../images/bell.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={{
              height: 30,
              width: 30,
              tintColor: 'white',
              marginRight: 10,
              marginLeft: 20,
            }}
            source={require('../images/question.png')}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};
const style = StyleSheet.create({
  header: {
    height: 70,
    width: '100%',
    backgroundColor: 'purple',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  profile: {height: 30, width: 30, marginLeft: 20},
  profile1: {
    height: 20,
    width: 20,
    marginLeft: 0,
    marginTop: 25,
    borderRadius: 7,
  },
  text: {fontSize: 25, color: 'black', marginTop: -10},
  headerright: {
    flexDirection: 'row',
    alignItems: 'center',
    alignItems: 'center',
  },
});

export default Commonheader;

