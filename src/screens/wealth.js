import React from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  TextInput,
  ImageBackground,
} from 'react-native';
import Commonheader from './commonheader';

const Wealth = () => {
  return (
    <View style={{flex: 1, backgroundColor: '#cfcfcf'}}>
      <Commonheader/>
      <ScrollView style={{marginBottom: 85}}>
        <View style={style.sharemarket}>
          <View
            style={{
              height: 110,
              width: '100%',
              margin: 10,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <View style={style.sharemarketinner}>
              <Text style={{fontSize: 30, color: 'black'}}>Share Market</Text>
            </View>
            <View style={{width: '46%'}}>
              <Text style={{color: 'black', fontSize: 30}}>Share.Market</Text>
              <Text style={{color: 'black', fontSize: 15, textAlign: 'center'}}>
                a Product by PhonePe
              </Text>
            </View>
            <View
              style={{
                height: 90,
                width: 90,
                backgroundColor: '#f2edf2',
                borderRadius: 50,
                marginRight: 50,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                style={{height: 30, width: 30, tintColor: 'purple'}}
                source={require('../images/rewards.png')}
              />
            </View>
          </View>
          <Text
            style={{
              color: 'black',
              marginLeft: 10,
              fontWeight: 500,
              fontSize: 20,
            }}>
            Invest in Exclusive WealthBaskets
          </Text>
          <View
            style={{
              height: 160,
              width: '100%',
              justifyContent: 'center',
            }}>
            <View
              style={{
                height: 140,
                width: '94%',
                borderWidth: 1,
                alignSelf: 'center',
                borderRadius: 20,
                flexDirection: 'row',
              }}>
              <Image
                style={{
                  height: 40,
                  width: 40,
                  tintColor: 'purple',
                  marginTop: 15,
                  marginLeft: 10,
                }}
                source={require('../images/rewards.png')}
              />
              <View
                style={{
                  height: 120,
                  width: '80%',

                  margin: 7,
                }}>
                <View style={{marginLeft: 10, marginTop: 5}}>
                  <Text style={{color: 'black', fontWeight: 500, fontSize: 20}}>
                    Giants of India
                  </Text>
                  <Text style={{color: 'black'}}>by Share.Market Research</Text>
                  <Text style={{color: 'black'}}>Includes 3 equity ETFs</Text>
                </View>
                <View style={{borderTopWidth: 1, marginTop: 2}}></View>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <View style={{marginTop: 10, marginLeft: 10}}>
                    <Text style={{color: 'black'}}>Minimum investment</Text>
                    <Text
                      style={{color: 'black', fontWeight: 500, fontSize: 20}}>
                      ₹1000
                    </Text>
                  </View>
                  <TouchableOpacity
                    style={{
                      height: 40,
                      width: 120,
                      borderWidth: 1,
                      marginLeft: 30,
                      marginTop: 10,
                      borderRadius: 20,
                      justifyContent: 'center',
                      alignItems: 'center',
                      borderColor: '#eb5610',
                    }}>
                    <Text style={{color: '#eb5610'}}>High Volatility</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
          <TouchableOpacity
            style={{
              height: 50,
              width: '90%',
              backgroundColor: 'purple',
              alignSelf: 'center',
              marginTop: 3,
              borderRadius: 30,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{fontSize: 17, color: 'white'}}>
              INSTALL SHARE.MARKET
            </Text>
          </TouchableOpacity>
        </View>
        <View style={style.textinput}>
          <Image
            style={{height: 40, width: 50, tintColor: 'black', marginTop: 8}}
            source={require('../images/search.png')}
          />
          <TextInput
            style={{height: 40, width: '80%', fontSize: 20}}
            placeholder="Search by fund or category"></TextInput>
        </View>
        <View style={style.createwealth}>
              <View style={{height:170,width:'64%',marginLeft:10,marginTop:10}}>
                <Text style={{fontSize:30,color:'black'}}>Create wealth with SIP</Text>
                <Text style={{color:'black',fontSize:15}}>6 cr+ SIP investments every month Grow your money with SIP now</Text>
                <TouchableOpacity style={{height:40,width:130,backgroundColor:'purple',marginLeft:30,marginTop:10,justifyContent:'center',alignItems:'center',borderRadius:20}}>
                  <Text style={{color:'white',fontSize:20}}>Start A SIP</Text>
                </TouchableOpacity>
              </View>
              <View style={{height:160,width:'32%',alignSelf:'center',justifyContent:'center',alignItems:'center'}}>
                <Image style={{height:130,width:120}} source={require('../images/women.png')}/>
                </View>
        </View>
        <View style={style.investmentideas}>

<Text
  style={{
    color: 'black',
    fontWeight: 800,
    marginLeft: 10,
    marginTop: 10,
    fontSize: 20,
    fontWeight:700
  }}>
  Investment Ideas
</Text>
<View
  style={{
    height: 210,
    width: '94%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 0,
  }}>
  <TouchableOpacity
    style={{
      justifyContent: 'center',
      alignItems: 'center',
      width: '22%',
    }}>
    <Image
      style={{height: 50, width: 50, tintColor: 'purple'}}
      source={require('../images/bestsipfund.png')}
    />
    <Text style={{color: 'black',marginTop:5,fontWeight:500}}>
      Best SIP funds
    </Text>
  </TouchableOpacity>
  <TouchableOpacity
    style={{
      justifyContent: 'center',
      alignItems: 'center',
      width: '22%',
    }}>
    <Image
      style={{height: 50, width: 50,tintColor:'purple'}}
      source={require('../images/taxsaving.png')}
    />
    <Text style={{color: 'black',fontSize:15,fontWeight:500,textAlign:'center'}}>Tax Saving Funds</Text>
   
  </TouchableOpacity>
  <TouchableOpacity
    style={{
      justifyContent: 'center',
      alignItems: 'center',
      width: '22%',
    }}>
    <Image
      style={{height: 52, width: 50, tintColor: 'purple'}}
      source={require('../images/3in1fund.png')}
    />
    <Text style={{color: 'black', marginTop: 10,fontWeight:500,textAlign:'center',textAlign:'center'}}>
      3-in-1 Funds
    </Text>
  </TouchableOpacity>
  <TouchableOpacity
    style={{
      justifyContent: 'center',
      alignItems: 'center',
      width: '22%',
    }}>
    <Image
      style={{height: 60, width: 70, }}
      source={require('../images/startwith100.png')}
    />
    <Text style={{color: 'black',fontWeight:500,marginTop:-5,textAlign:'center'}}>
      Start with ₹100
    </Text>
  </TouchableOpacity>
  <TouchableOpacity
    style={{
      justifyContent: 'center',
      alignItems: 'center',
      width: '22%',
      marginTop: 10,
    }}>
    <Image
      style={{height: 35, width: 35, tintColor: 'purple'}}
      source={require('../images/termlife.png')}
    />
    <Text
      style={{
        color: 'black',
        marginTop: 3,
        marginLeft: 20,
        fontWeight:500,
        
      }}>
      Top       Company
    </Text>
  </TouchableOpacity>
  <TouchableOpacity
    style={{
      justifyContent: 'center',
      alignItems: 'center',
      width: '22%',
      marginTop: 50,
    }}>
    <Image
      style={{height: 50, width: 50, tintColor: 'purple'}}
      source={require('../images/treadingthemes.png')}
    />
    <Text style={{color: 'black', marginTop: 0, marginLeft: 10,textAlign:'center',fontWeight:500}}>
     Treading Themes
    </Text>
  </TouchableOpacity>
  <TouchableOpacity
    style={{
      justifyContent: 'center',
      alignItems: 'center',
      width: '22%',
      marginTop: 50,
    }}>
    <Image
      style={{height: 50, width: 80, tintColor: 'purple',marginTop:10}}
      source={require('../images/goldfunds.png')}
    />
    <Text style={{color: 'black', marginBottom: 10,fontWeight:500 }}>
      Gold Funds
    </Text>
  </TouchableOpacity>

 <TouchableOpacity
    style={{
      justifyContent:'center',
      width: '22%',
    alignItems:'center'
    }}>
<View  style={{height:50,width:50,borderRadius:10,justifyContent:'center',alignItems:'center'}}>
     <Image
      style={{height: 40, width: 70, tintColor: 'purple'}}
      source={require('../images/highreturns.png')}
    />
       
 </View>
 <Text style={{color: 'black', marginTop:10,fontWeight:500,textAlign:'center' }}>
    High Return Funds
    </Text>
  </TouchableOpacity>

</View>
</View>
    <View style={style.exploreallfunds}>
        <View style={{height:90,width:'100%',flexDirection:'row'}}>
          <TouchableOpacity style={{height:90,width:'100%',flexDirection:'row'}}>
          <View style={{height:80,width:'25%',justifyContent:'center',alignItems:'center'}}>
            <Image style={{height:50,width:50,tintColor:'purple',}} source={require('../images/4circle.png')}/>
          </View>
          <View style={{height:80,width:'55%'}}>
            <Text style={{color:'black',fontWeight:500,fontSize:20,marginLeft:10,marginTop:10}}>Explore all Funds</Text>
            <Text style={{color:'black',fontSize:17,marginLeft:10,}}>Pick A fund on your own</Text>
          </View>
          <View style={{height:80,width:'20%',justifyContent:'center',alignItems:'center'}}>
          <Image style={{height:50,width:50,tintColor:'black',}} source={require('../images/greaterthan.png')}/>
          </View>
          </TouchableOpacity>
        </View>
    </View>
    <View style={style.mutualfund}>
          <Text
            style={{
              color: 'black',
              fontSize: 20,
              fontWeight: 600,
              marginLeft: 10,
              marginTop: 10,
            }}>
            Mutual Fund Categories
          </Text>
          <View style={style.transferview}>
            <TouchableOpacity
              style={{
                width: '25%',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <View
                style={{
                  height: 50,
                  width: 50,

                  borderRadius: 15,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  style={{height: 50, width: 50, tintColor: 'purple'}}
                  source={require('../images/largecap.png')}
                />
              </View>
              <Text style={{color: 'black', fontSize: 14, textAlign: 'center',fontWeight:500}}>
                Large cap funds
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: '25%',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <View
                style={{
                  height: 50,
                  width: 50,
                  borderRadius: 15,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  style={{height: 50, width: 50, tintColor: 'purple'}}
                  source={require('../images/midcap.png')}
                />
              </View>
              <Text style={{color: 'black', fontSize: 14, marginBottom: 12,fontWeight:500,textAlign:'center'}}>
                Mid Cap     Fund
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: '25%',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <View
                style={{
                  height: 50,
                  width: 50,

                  borderRadius: 15,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  style={{height: 40, width: 40, tintColor: 'purple'}}
                  source={require('../images/smallcap.png')}
                />
              </View>
              <Text style={{color: 'black', fontSize: 14, marginBottom: 13,fontWeight:500}}>
                Small Cap Funds
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: '25%',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <View
                style={{
                  height: 50,
                  width: 50,

                  borderRadius: 15,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  style={{height: 50, width: 50, tintColor: 'purple'}}
                  source={require('../images/index.png')}
                />
              </View>
              <Text style={{color: 'black', fontSize: 14, marginBottom: 8,fontWeight:500,textAlign:'center'}}>
                Index        Funds
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const style = StyleSheet.create({
  text: {fontSize: 25, color: 'black', marginTop: -10},
  headerright: {
    flexDirection: 'row',
    alignItems: 'center',
    alignItems: 'center',
  },
  sharemarket: {
    height: 380,
    width: '96%',
    backgroundColor: 'white',
    alignSelf: 'center',
    marginTop: 6,
    borderRadius: 15,
  },
  sharemarketinner: {
    height: 100,
    width: '28%',
    backgroundColor: '#71187a',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textinput: {
    height: 50,
    width: '96%',
    backgroundColor: 'white',
    alignSelf: 'center',
    borderRadius: 50,
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    borderWidth: 1,
  },createwealth:{
    height:180,
    width:'96%',
    backgroundColor:'white',
    alignSelf:'center',
    borderRadius:20,
    marginTop:8,
    flexDirection:'row'
  },
  investmentideas: {
    height: 250,
    width: '96%',
    backgroundColor: 'white',
    alignSelf: 'center',
    marginTop: 1,
    borderRadius: 20,
    marginTop:8
  },exploreallfunds:{
    height:100,width:'96%',
    backgroundColor:'white',
    alignSelf:'center',
    borderRadius:20,
    marginTop:8,
    justifyContent:'center',
    alignItems:'center'
  },
  mutualfund: {
    height: 145,
    width: '94%',
    backgroundColor: 'white',
    alignSelf: 'center',
    borderRadius: 10,
    marginTop: 8,
    borderRadius: 10,
  },
  transferview: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '100%',
    marginTop: 10,
  },
});
export default Wealth;
