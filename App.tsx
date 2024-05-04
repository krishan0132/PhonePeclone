import React, {useEffect, useState, useRef} from 'react';
import {
  View,
  Text,
  Button,
  Modal,
  TextInput,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Home from './src/screens/home';
import Credit from './src/screens/credit';
import Insurance from './src/screens/insurance';
import Wealth from './src/screens/wealth';
import History from './src/screens/history';

const App=()=>{
  const [tab,settab]=useState(0);
  return(
    <View style={{flex:1,backgroundColor:'#cfcfcf'}}>
    {
      tab==0?<Home/>:tab==1?<Credit/>:tab==2?<Insurance/>:tab==3?<Wealth/>:<History/>
    }
      <View style={style.bottomnav}>
        <TouchableOpacity onPress={()=>settab(0)}>
          <View style={[style.innernav,{backgroundColor:tab==0?'purple':'#666964'}]}>
          <Image style={{height:40,width:40,tintColor:'white',}} source={require("./src/images/home.png")}/>
          
          </View>
          <Text style={{color:tab==0?'purple':'black'}}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>settab(1)}>
          <View style={[style.innernav,{backgroundColor:tab==1?'purple':'#666964',marginLeft:4}]}>
          <Image style={{height:40,width:40,tintColor:'white'}} source={require("./src/images/rupee.png")}/>
          </View>
          <Text style={{color:tab==1?'purple':'black'}}>Credits</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>settab(2)}>
          <View style={[style.innernav,{backgroundColor:tab==2?'purple':'#666964',marginLeft:7}]}>
          <Image style={{height:25,width:25,tintColor:'white',}} source={require("./src/images/insurance.png")}/>
          </View>
          <Text style={{color:tab==2?'purple':'black'}}>Insurance</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>settab(3)}>
          <View style={[style.innernav,{backgroundColor:tab==3?'purple':'#666964'}]}>
          <Image style={{height:40,width:40,tintColor:'white'}} source={require("./src/images/wealth.png")}/>
          </View>
          <Text style={{color:tab==3?'purple':'black'}}>Wealth</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>settab(4)}>
          <View style={[style.innernav,{backgroundColor:tab==4?'purple':'#666964'}]}>
          <Image style={{height:30,width:30,tintColor:'white'}} source={require("./src/images/history.png")}/>
          </View>
          <Text style={{color:tab==4?'purple':'black'}}>History</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const style=StyleSheet.create({
  bottomnav:{
    height:75,
    width:'100%',
    backgroundColor:'white',
    bottom:0,
    position:'absolute',
    justifyContent:'space-evenly',
    alignItems:'center',
    flexDirection:'row'
  },innernav:{
    height:40,
    width:40,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:25,
  }
})
export default App;
