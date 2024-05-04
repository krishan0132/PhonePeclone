import React from "react";
import {View,Text,Button,StyleSheet,Image,TextInput, ScrollView} from 'react-native';
import Commonheader from "./commonheader";

const History=()=>{
    return(
        <View style={{flex:1,backgroundColor:'#cfcfcf'}}>
     <Commonheader/>
         <View style={style.historyheader}>
          <Image
            style={{height: 40, width: 50, tintColor: 'black', marginTop: 8}}
            source={require('../images/search.png')}
          />
          <TextInput
            style={{height: 40, width: '80%', fontSize: 18}}
            placeholder="Search by name,number or UPI ID"></TextInput>
        </View>
        <View style={style.filter}>
            <View style={{height:50,width:130,borderWidth:1,borderRadius:10,flexDirection:'row',justifyContent:'center',alignItems:'center',marginRight:20}}>
            <Text style={{color:'black',fontSize:20,fontWeight:500}}>Filters</Text>
            <View style={{justifyContent:'center',alignItems:'center',marginLeft:10}}>
            <View style={{borderTopWidth:1,height:1,width:22,borderTopColor:'black'}}></View>
            <View style={{borderTopWidth:1,height:1,width:15,marginTop:3}}></View>
            <View style={{borderTopWidth:1,height:1,width:5,marginTop:3,borderTopColor:'black'}}></View>
            </View>
            </View>
        </View>
        <ScrollView style={{marginBottom:75}}>
            <View style={style.list}>
              <View style={{height:130,width:'100%',borderBottomWidth:1}}>
                  <View style={{height:80,width:'100%',justifyContent:'space-evenly',alignItems:'center',flexDirection:'row'}}>
                      <View style={{height:60,width:'17%',backgroundColor:'purple',justifyContent:'center',alignItems:'center',borderRadius:20}}>
                        <Image style={{height:40,width:40,tintColor:'white'}} source={require('../images/45left.png')}/>
                      
                      </View>
                      <View style={{height:80,width:'60%',justifyContent:'center',marginLeft:10}}>
                        <Text style={{fontSize:20,color:'black',fontWeight:500}}>Paid to</Text>
                        <Text style={{fontSize:20,color:'black'}}>xyz person</Text>
                      </View>
                      <Text style={{fontSize:30,color:'black',marginBottom:20}}>₹00</Text>
                  </View>
                  <View style={{height:50,width:'100%',alignItems:'center',flexDirection:'row'}}>
                    <Text style={{fontSize:18,}}>00 abc 0000</Text>
                    <Text style={{fontSize:18,color:'black',marginLeft:134}}>Debited from</Text>
                    <View style={{height:40,width:40,borderWidth:1,borderRadius:15,marginLeft:10,justifyContent:'center',alignItems:'center'}}>
                      <View style={{height:35,width:35,borderRadius:17.5,backgroundColor:'blue',justifyContent:'flex-end',alignItems:'center'}}>
                        <Image style={{height:20,width:10,tintColor:'white'}} source={require("../images/lolipop.png")}/>
                        </View>  
                    </View>
                  </View>
              </View>
              <View style={{height:130,width:'100%',borderBottomWidth:1}}>
                  <View style={{height:80,width:'100%',justifyContent:'space-evenly',alignItems:'center',flexDirection:'row'}}>
                      <View style={{height:60,width:'17%',backgroundColor:'purple',justifyContent:'center',alignItems:'center',borderRadius:20}}>
                        <Image style={{height:40,width:40,tintColor:'white'}} source={require('../images/45left.png')}/>
                      
                      </View>
                      <View style={{height:80,width:'60%',justifyContent:'center',marginLeft:10}}>
                        <Text style={{fontSize:20,color:'black',fontWeight:500}}>Paid to</Text>
                        <Text style={{fontSize:20,color:'black'}}>xyz person</Text>
                      </View>
                      <Text style={{fontSize:30,color:'black',marginBottom:20}}>₹00</Text>
                  </View>
                  <View style={{height:50,width:'100%',alignItems:'center',flexDirection:'row'}}>
                    <Text style={{fontSize:18,}}>00 abc 0000</Text>
                    <Text style={{fontSize:18,color:'black',marginLeft:134}}>Debited from</Text>
                    <View style={{height:40,width:40,borderWidth:1,borderRadius:15,marginLeft:10,justifyContent:'center',alignItems:'center'}}>
                      <View style={{height:35,width:35,borderRadius:17.5,backgroundColor:'blue',justifyContent:'flex-end',alignItems:'center'}}>
                        <Image style={{height:20,width:10,tintColor:'white'}} source={require("../images/lolipop.png")}/>
                        </View>  
                    </View>
                  </View>
              </View>
              <View style={{height:130,width:'100%',borderBottomWidth:1}}>
                  <View style={{height:80,width:'100%',justifyContent:'space-evenly',alignItems:'center',flexDirection:'row'}}>
                      <View style={{height:60,width:'17%',backgroundColor:'purple',justifyContent:'center',alignItems:'center',borderRadius:20}}>
                        <Image style={{height:40,width:40,tintColor:'white'}} source={require('../images/forcredit.png')}/>
                      
                      </View>
                      <View style={{height:80,width:'60%',justifyContent:'center',marginLeft:10}}>
                        <Text style={{fontSize:18,color:'black',fontWeight:500}}>Received from</Text>
                        <Text style={{fontSize:20,color:'black'}}>xyz person</Text>
                      </View>
                      <Text style={{fontSize:30,color:'black',marginBottom:20}}>₹00</Text>
                  </View>
                  <View style={{height:50,width:'100%',alignItems:'center',flexDirection:'row'}}>
                    <Text style={{fontSize:18,}}>00 abc 0000</Text>
                    <Text style={{fontSize:18,color:'black',marginLeft:134}}>       Credit To</Text>
                    <View style={{height:40,width:40,borderWidth:1,borderRadius:15,marginLeft:10,justifyContent:'center',alignItems:'center'}}>
                      <View style={{height:35,width:35,borderRadius:17.5,backgroundColor:'blue',justifyContent:'flex-end',alignItems:'center'}}>
                        <Image style={{height:20,width:10,tintColor:'white'}} source={require("../images/lolipop.png")}/>
                        </View>  
                    </View>
                  </View>
              </View>
              <View style={{height:130,width:'100%',borderBottomWidth:1}}>
                  <View style={{height:80,width:'100%',justifyContent:'space-evenly',alignItems:'center',flexDirection:'row'}}>
                      <View style={{height:60,width:'17%',backgroundColor:'purple',justifyContent:'center',alignItems:'center',borderRadius:20}}>
                        <Image style={{height:40,width:40,tintColor:'white'}} source={require('../images/45left.png')}/>
                      
                      </View>
                      <View style={{height:80,width:'60%',justifyContent:'center',marginLeft:10}}>
                        <Text style={{fontSize:20,color:'black',fontWeight:500}}>Paid to</Text>
                        <Text style={{fontSize:20,color:'black'}}>xyz person</Text>
                      </View>
                      <Text style={{fontSize:30,color:'black',marginBottom:20}}>₹00</Text>
                  </View>
                  <View style={{height:50,width:'100%',alignItems:'center',flexDirection:'row'}}>
                    <Text style={{fontSize:18,}}>00 abc 0000</Text>
                    <Text style={{fontSize:18,color:'black',marginLeft:134}}>Debited from</Text>
                    <View style={{height:40,width:40,borderWidth:1,borderRadius:15,marginLeft:10,justifyContent:'center',alignItems:'center'}}>
                      <View style={{height:35,width:35,borderRadius:17.5,backgroundColor:'blue',justifyContent:'flex-end',alignItems:'center'}}>
                        <Image style={{height:20,width:10,tintColor:'white'}} source={require("../images/lolipop.png")}/>
                        </View>  
                    </View>
                  </View>
              </View>
              <View style={{height:130,width:'100%',borderBottomWidth:1}}>
                  <View style={{height:80,width:'100%',justifyContent:'space-evenly',alignItems:'center',flexDirection:'row'}}>
                      <View style={{height:60,width:'17%',justifyContent:'center',alignItems:'center',borderRadius:20}}>
                        <Image style={{height:40,width:40,tintColor:'purple'}} source={require('../images/mobilerecharge.png')}/>
                      
                      </View>
                      <View style={{height:80,width:'60%',justifyContent:'center',marginLeft:10}}>
                        <Text style={{fontSize:20,color:'black',fontWeight:500}}>Mobile Recharged</Text>
                        <Text style={{fontSize:20,color:'black'}}>9992200000</Text>
                      </View>
                      <Text style={{fontSize:30,color:'black',marginBottom:20}}>₹00</Text>
                  </View>
                  <View style={{height:50,width:'100%',alignItems:'center',flexDirection:'row'}}>
                    <Text style={{fontSize:18,}}>00 abc 0000</Text>
                    <Text style={{fontSize:18,color:'black',marginLeft:134}}>Debited from</Text>
                    <View style={{height:40,width:40,borderWidth:1,borderRadius:15,marginLeft:10,justifyContent:'center',alignItems:'center'}}>
                      <View style={{height:35,width:35,borderRadius:17.5,backgroundColor:'blue',justifyContent:'flex-end',alignItems:'center'}}>
                        <Image style={{height:20,width:10,tintColor:'white'}} source={require("../images/lolipop.png")}/>
                        </View>  
                    </View>
                  </View>
              </View>
              <View style={{height:130,width:'100%',borderBottomWidth:1}}>
                  <View style={{height:80,width:'100%',justifyContent:'space-evenly',alignItems:'center',flexDirection:'row'}}>
                      <View style={{height:60,width:'17%',backgroundColor:'purple',justifyContent:'center',alignItems:'center',borderRadius:20}}>
                        <Image style={{height:40,width:40,tintColor:'white'}} source={require('../images/45left.png')}/>
                      
                      </View>
                      <View style={{height:80,width:'60%',justifyContent:'center',marginLeft:10}}>
                        <Text style={{fontSize:20,color:'black',fontWeight:500}}>Paid to</Text>
                        <Text style={{fontSize:20,color:'black'}}>xyz person</Text>
                      </View>
                      <Text style={{fontSize:30,color:'black',marginBottom:20}}>₹00</Text>
                  </View>
                  <View style={{height:50,width:'100%',alignItems:'center',flexDirection:'row'}}>
                    <Text style={{fontSize:18,}}>00 abc 0000</Text>
                    <Text style={{fontSize:18,color:'black',marginLeft:134}}>Debited from</Text>
                    <View style={{height:40,width:40,borderWidth:1,borderRadius:15,marginLeft:10,justifyContent:'center',alignItems:'center'}}>
                      <View style={{height:35,width:35,borderRadius:17.5,backgroundColor:'blue',justifyContent:'flex-end',alignItems:'center'}}>
                        <Image style={{height:20,width:10,tintColor:'white'}} source={require("../images/lolipop.png")}/>
                        </View>  
                    </View>
                  </View>
              </View>
              <View style={{height:130,width:'100%',borderBottomWidth:1}}>
                  <View style={{height:80,width:'100%',justifyContent:'space-evenly',alignItems:'center',flexDirection:'row'}}>
                      <View style={{height:60,width:'17%',backgroundColor:'purple',justifyContent:'center',alignItems:'center',borderRadius:20}}>
                        <Image style={{height:40,width:40,tintColor:'white'}} source={require('../images/45left.png')}/>
                      
                      </View>
                      <View style={{height:80,width:'60%',justifyContent:'center',marginLeft:10}}>
                        <Text style={{fontSize:20,color:'black',fontWeight:500}}>Paid to</Text>
                        <Text style={{fontSize:20,color:'black'}}>xyz person</Text>
                      </View>
                      <Text style={{fontSize:30,color:'black',marginBottom:20}}>₹00</Text>
                  </View>
                  <View style={{height:50,width:'100%',alignItems:'center',flexDirection:'row'}}>
                    <Text style={{fontSize:18,}}>00 abc 0000</Text>
                    <Text style={{fontSize:18,color:'black',marginLeft:134}}>Debited from</Text>
                    <View style={{height:40,width:40,borderWidth:1,borderRadius:15,marginLeft:10,justifyContent:'center',alignItems:'center'}}>
                      <View style={{height:35,width:35,borderRadius:17.5,backgroundColor:'blue',justifyContent:'flex-end',alignItems:'center'}}>
                        <Image style={{height:20,width:10,tintColor:'white'}} source={require("../images/lolipop.png")}/>
                        </View>  
                    </View>
                  </View>
              </View>
              <View style={{height:130,width:'100%'}}>
                  <View style={{height:80,width:'100%',justifyContent:'space-evenly',alignItems:'center',flexDirection:'row'}}>
                      <View style={{height:60,width:'17%',backgroundColor:'purple',justifyContent:'center',alignItems:'center',borderRadius:20}}>
                        <Image style={{height:40,width:40,tintColor:'white'}} source={require('../images/forcredit.png')}/>
                      
                      </View>
                      <View style={{height:80,width:'60%',justifyContent:'center',marginLeft:10}}>
                        <Text style={{fontSize:18,color:'black',fontWeight:500}}>Received From</Text>
                        <Text style={{fontSize:20,color:'black'}}>xyz person</Text>
                      </View>
                      <Text style={{fontSize:30,color:'black',marginBottom:20}}>₹00</Text>
                  </View>
                  <View style={{height:50,width:'100%',alignItems:'center',flexDirection:'row'}}>
                    <Text style={{fontSize:18,}}>00 abc 0000</Text>
                    <Text style={{fontSize:18,color:'black',marginLeft:134}}>      Credit To</Text>
                    <View style={{height:40,width:40,borderWidth:1,borderRadius:15,marginLeft:10,justifyContent:'center',alignItems:'center'}}>
                      <View style={{height:35,width:35,borderRadius:17.5,backgroundColor:'blue',justifyContent:'flex-end',alignItems:'center'}}>
                        <Image style={{height:20,width:10,tintColor:'white'}} source={require("../images/lolipop.png")}/>
                        </View>  
                    </View>
                  </View>
              </View>
            </View>
        </ScrollView>
        </View>
    )
}

const style = StyleSheet.create({
    text: {fontSize: 25, color: 'black', marginTop: -10},
    headerright: {
      flexDirection: 'row',
      alignItems: 'center',
      alignItems: 'center',
    },
    historyheader:{
        height: 60,
        width: '96%',
        backgroundColor: 'white',
        alignSelf: 'center',
        borderRadius: 20,
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        borderWidth: 1,
    },
    filter:{
      height:90,
      width:'96%',
      backgroundColor:'white',
      alignSelf:"center",
      marginTop:10,
      borderTopLeftRadius:20,
      borderTopEndRadius:20,
      justifyContent:'center',
      alignItems:'flex-end',
    },
    list:{
      width:'96%',
      alignSelf:'center',
      height:1039,
      backgroundColor:'white',
      marginBottom:10
    }

})
export default History;