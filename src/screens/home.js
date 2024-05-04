import React from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Commonheader from './commonheader';

const Home = () => {
  return (
     <View style={{flex: 1, backgroundColor: '#cfcfcf'}}>
      <Commonheader/>
      <ScrollView style={{marginBottom: 75}}>
      <View style={style.updatecard}>
        <Image
          style={{height: 130, width: '100%',borderRadius:10}}
          source={require('../images/banner.png')}
        />
      </View>
      <View style={style.transfer}>
        <Text style={{color: 'black', fontSize: 20, fontWeight: 600,marginLeft:10}}>
          Transfer Money
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
                backgroundColor: 'purple',
                borderRadius: 15,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                style={{height: 40, width: 40, tintColor: 'white'}}
                source={require('../images/mobile.png')}
              />
            </View>
            <Text style={{color: 'black', fontSize: 18}}>
              To mobile transfer
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
                backgroundColor: 'purple',
                borderRadius: 15,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                style={{height: 40, width: 40, tintColor: 'white'}}
                source={require('../images/bank.png')}
              />
            </View>
            <Text style={{color: 'black', fontSize: 18}}>To Bank/UPI ID</Text>
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
                backgroundColor: 'purple',
                borderRadius: 15,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                style={{height: 40, width: 40, tintColor: 'white'}}
                source={require('../images/selfaccount.png')}
              />
            </View>
            <Text style={{color: 'black', fontSize: 18}}>To Self Account</Text>
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
                backgroundColor: 'purple',
                borderRadius: 15,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                style={{height: 40, width: 40, tintColor: 'white'}}
                source={require('../images/checkbalance.png')}
              />
            </View>
            <Text style={{color: 'black', fontSize: 18}}>Check Balance</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={style.gift}>
        <TouchableOpacity style={style.giftbtn}>
          <View style={style.giftview}>
            <Image
              style={{height: 40, width: 40, tintColor: 'white'}}
              source={require('../images/phonepe.png')}
            />
            <Text style={{color: 'white', marginTop: 8}}>PhonePe Wallet</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={style.giftbtn}>
          <View style={style.giftview}>
            <Image
              style={{height: 40, width: 40, tintColor: 'white'}}
              source={require('../images/rewards.png')}
            />
            <Text style={{color: 'white', marginTop: 8}}>Rewards</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={style.giftbtn}>
          <View style={style.giftview}>
            <Image
              style={{height: 40, width: 40, tintColor: 'white'}}
              source={require('../images/referandearn.png')}
            />
            <Text style={{color: 'white', marginTop: 8}}>Refer & Get ₹100</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={style.recharge}>

        <Text
          style={{
            color: 'black',
            fontWeight: 600,
            marginLeft: 10,
            marginTop: 10,
            fontSize: 20,
          }}>
          Recharge & Bills
        </Text>
        <View
          style={{
            height: 200,
            width: '94%',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
            alignItems: 'center',
            marginTop: 10,
          }}>
          <TouchableOpacity
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              width: '22%',
            }}>
            <Image
              style={{height: 40, width: 40, tintColor: 'purple'}}
              source={require('../images/mobilerecharge.png')}
            />
            <Text style={{color: 'black', marginLeft: 18,fontWeight:500}}>
              Mobile Recharge
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              width: '22%',
            }}>
            <Image
              style={{height: 40, width: 40}}
              source={require('../images/fasttag.png')}
            />
            <Text style={{color: 'black',fontWeight:500}}>Buy     fasttag</Text>
           
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              width: '22%',
            }}>
            <Image
              style={{height: 40, width: 40, tintColor: 'purple'}}
              source={require('../images/dth.png')}
            />
            <Text style={{color: 'black', marginTop: 10,fontWeight:500}}>
              DTH
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              width: '22%',
            }}>
            <Image
              style={{height: 60, width: 60, tintColor: 'purple'}}
              source={require('../images/electricity.png')}
            />
            <Text style={{color: 'black',fontWeight:500}}>
              Electricity
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
              style={{height: 40, width: 40, tintColor: 'purple'}}
              source={require('../images/rent.png')}
            />
            <Text
              style={{
                color: 'black',
                marginTop: 5,
                marginLeft: 20,
                fontWeight:500
              }}>
              Rent Payment
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
              source={require('../images/loan.png')}
            />
            <Text style={{color: 'black', marginTop: 0, marginLeft: 10,textAlign:'center',fontWeight:500}}>
              Loan Repayment
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
              source={require('../images/cylinder.png')}
            />
            <Text style={{color: 'black', marginBottom: 10,fontWeight:500 }}>
              Book A Cylinder
            </Text>
          </TouchableOpacity>
       
         <TouchableOpacity
            style={{
              justifyContent:'center',
              width: '22%',
            alignItems:'center'
            }}>
        <View  style={{height:50,width:50,backgroundColor:'purple',borderRadius:10,justifyContent:'center',alignItems:'center'}}>
             <Image
              style={{height: 40, width: 40, tintColor: 'white'}}
              source={require('../images/arrow.png')}
            />
               
         </View>
         <Text style={{color: 'black', marginTop:10,fontWeight:500 }}>
              See All
            </Text>
          </TouchableOpacity>

        </View>
      </View>
      <View style={style.pinlesspayment}>
              <Image style={{height:40,width:60,borderRightWidth:3,borderColor:'black'}} source={require('../images/upi.png')}/>
              <Text style={{fontSize:20,color:'black',fontWeight:600}}>PIN-less Payment</Text>
              <TouchableOpacity style={{height:50,width:120,backgroundColor:'purple',borderRadius:20,justifyContent:'center',alignItems:'center'}}>
                <Text style={{fontSize:20,color:'white'}}>TRY NOW</Text>
              </TouchableOpacity>
      </View>
      <View style={style.insurance}>

<Text
  style={{
    color: 'black',
    fontWeight: 800,
    marginLeft: 10,
    marginTop: 10,
    fontSize: 20,
    fontWeight:700
  }}>
  Insurance
</Text>
<View
  style={{
    height: 200,
    width: '94%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 10,
  }}>
  <TouchableOpacity
    style={{
      justifyContent: 'center',
      alignItems: 'center',
      width: '22%',
    }}>
    <Image
      style={{height: 40, width: 40, tintColor: 'purple'}}
      source={require('../images/bike.png')}
    />
    <Text style={{color: 'black',marginTop:5,fontWeight:500}}>
      Bike
    </Text>
  </TouchableOpacity>
  <TouchableOpacity
    style={{
      justifyContent: 'center',
      alignItems: 'center',
      width: '22%',
    }}>
    <Image
      style={{height: 40, width: 40,tintColor:'purple'}}
      source={require('../images/car.png')}
    />
    <Text style={{color: 'black',fontSize:15,fontWeight:500}}>Car</Text>
   
  </TouchableOpacity>
  <TouchableOpacity
    style={{
      justifyContent: 'center',
      alignItems: 'center',
      width: '22%',
    }}>
    <Image
      style={{height: 40, width: 40, tintColor: 'purple'}}
      source={require('../images/Health.png')}
    />
    <Text style={{color: 'black', marginTop: 7,fontWeight:500}}>
      Health
    </Text>
  </TouchableOpacity>
  <TouchableOpacity
    style={{
      justifyContent: 'center',
      alignItems: 'center',
      width: '22%',
    }}>
    <Image
      style={{height: 60, width: 60, tintColor: 'purple'}}
      source={require('../images/accident.png')}
    />
    <Text style={{color: 'black',fontWeight:500,marginTop:-5}}>
      Accident
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
      style={{height: 40, width: 40, tintColor: 'purple'}}
      source={require('../images/termlife.png')}
    />
    <Text
      style={{
        color: 'black',
        marginTop: 5,
        marginLeft: 20,
        fontWeight:500,
        textAlign:'center'
      }}>
      Term Life
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
      source={require('../images/travelinsurance.png')}
    />
    <Text style={{color: 'black', marginTop: 0, marginLeft: 10,textAlign:'center',fontWeight:500}}>
     Travel Insurance
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
      style={{height: 50, width: 50, tintColor: 'purple',marginTop:10}}
      source={require('../images/insurancerenewal.png')}
    />
    <Text style={{color: 'black', marginBottom: 10,fontWeight:500 }}>
      Insurance Renewal
    </Text>
  </TouchableOpacity>

 <TouchableOpacity
    style={{
      justifyContent:'center',
      width: '22%',
    alignItems:'center'
    }}>
<View  style={{height:50,width:50,backgroundColor:'purple',borderRadius:10,justifyContent:'center',alignItems:'center'}}>
     <Image
      style={{height: 40, width: 40, tintColor: 'white'}}
      source={require('../images/arrow.png')}
    />
       
 </View>
 <Text style={{color: 'black', marginTop:10,fontWeight:500 }}>
      See All
    </Text>
  </TouchableOpacity>

</View>
</View>
<View style={style.carbannerinsurance}>
        <Image
          style={{height: 200, width: '100%'}}
          source={require('../images/carinsurancebanner.png')}
        />
      </View>
      <View style={style.travelbooking}>
        <Text style={{color: 'black', fontSize: 20, fontWeight: 600,marginLeft:10}}>
          Travel Bookings
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
                width:50,
                borderWidth:1,
                borderRadius: 15,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                style={{height: 40, width: 40, tintColor: 'purple'}}
                source={require('../images/flight.png')}
              />
            </View>
            <Text style={{color: 'black', fontSize: 18,fontWeight:500}}>
              Flights
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
                borderWidth:1,
                borderRadius: 15,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                style={{height: 40, width: 40, tintColor: 'purple'}}
                source={require('../images/bus.png')}
              />
            </View>
            <Text style={{color: 'black', fontSize: 18,fontWeight:500}}>Bus</Text>
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
              borderWidth:1,
                borderRadius: 15,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                style={{height: 40, width: 40, tintColor: 'purple'}}
                source={require('../images/train.png')}
              />
            </View>
            <Text style={{color: 'black', fontSize: 18,fontWeight:500}}>Trains</Text>
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
                borderWidth:1,
                borderRadius: 15,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                style={{height: 40, width: 40, tintColor: 'purple'}}
                source={require('../images/checkbalance.png')}
              />
            </View>
            <Text style={{color: 'black', fontSize: 18}}>Hotels</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={style.switch}>
        <Text style={{color: 'black', fontSize: 20, fontWeight: 600,marginLeft:10}}>
          Switch
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
                width:50,
            
                borderRadius: 15,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                style={{height: 40, width: 40,}}
                source={require('../images/swiggy.png')}
              />
            </View>
            <Text style={{color: 'black', fontSize: 18,fontWeight:500}}>
              Swiggy
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
                style={{height: 40, width: 40,marginTop:8}}
                source={require('../images/appolo.png')}
              />
            </View>
            <Text style={{color: 'black', fontSize: 15,fontWeight:500}}>Apollo Pharmacy</Text>
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
                style={{height: 50, width: 50,borderRadius:10}}
                source={require('../images/tata1mg.png')}
              />
            </View>
            <Text style={{color: 'black', fontSize: 18,fontWeight:500}}>Tata 1mg</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              justifyContent:'center',
              width: '22%',
            alignItems:'center'
            }}>
        <View  style={{height:50,width:50,backgroundColor:'purple',borderRadius:10,justifyContent:'center',alignItems:'center'}}>
             <Image
              style={{height: 40, width: 40, tintColor: 'white'}}
              source={require('../images/arrow.png')}
            />
               
         </View>
         <Text style={{color: 'black', marginTop:10,fontWeight:500,fontSize:18 }}>
              See All
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={style.subscription}>
        <Text style={{color: 'black', fontSize: 18, fontWeight: 600,marginLeft:10}}>
          Subscriptions and Vouchers
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
                width:50,
            
                borderRadius: 15,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                style={{height: 40, width: 40,}}
                source={require('../images/hotstar.png')}
              />
            </View>
            <Text style={{color: 'black', fontSize: 18,fontWeight:500}}>
            Hotstar
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
                style={{height: 40, width: 40,marginTop:8}}
                source={require('../images/zee5.png')}
              />
            </View>
            <Text style={{color: 'black', fontSize: 15,fontWeight:500}}>Zee 5</Text>
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
                style={{height: 50, width: 50,borderRadius:10,marginTop:20}}
                source={require('../images/platstore.png')}
              />
            </View>
            <Text style={{color: 'black', fontSize: 15,fontWeight:500,textAlign:'center'}}>Goggle Play Code</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              justifyContent:'center',
              width: '22%',
            alignItems:'center'
            }}>
        <View  style={{height:40,width:40,backgroundColor:'purple',borderRadius:10,justifyContent:'center',alignItems:'center'}}>
             <Image
              style={{height: 30, width: 40, tintColor: 'white'}}
              source={require('../images/arrow.png')}
            />
               
         </View>
         <Text style={{color: 'black', marginTop:10,fontWeight:500,fontSize:18 }}>
              See All
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
      </View>
  );
};

const style = StyleSheet.create({
  updatecard: {
    height: 130,
    width: '94%',
    backgroundColor: 'white',
    alignSelf: 'center',
    marginTop: 10,
    borderRadius:10
  },
  transfer: {
    height: 135,
    width: '94%',
    backgroundColor: 'white',
    alignSelf: 'center',
    marginTop: 10,
    borderRadius: 10,
  },
  transferview: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '100%',
    marginTop: 10,
  },
  gift: {
    flexDirection: 'row',
    height: 85,
    width: '96%',
    marginTop: 10,
    alignSelf: 'center',
    justifyContent: 'space-evenly',
  },
  giftbtn: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '30%',
  },
  giftview: {
    height: 85,
    width: 120,
    backgroundColor: 'blue',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  recharge: {
    height: 250,
    width: '96%',
    backgroundColor: 'white',
    alignSelf: 'center',
    marginTop: 10,
    borderRadius: 20,
  },pinlesspayment:{
    height:70,
    width:'96%',
    backgroundColor:'white',
    marginTop:10,
    alignSelf:'center',
    marginBottom:10,
    borderRadius:10,
    justifyContent:'space-evenly',
    flexDirection:'row',
    alignItems:'center'
  },
  insurance: {
    height: 250,
    width: '96%',
    backgroundColor: 'white',
    alignSelf: 'center',
    marginTop: 1,
    borderRadius: 20,
    marginBottom:20
  }, carbannerinsurance: {
    height: 200,
    width: '94%',
    backgroundColor: 'white',
    alignSelf: 'center',
    marginTop: -8,
    borderRadius:10,
  marginBottom:10},
  travelbooking: {
    height: 130,
    width: '94%',
    backgroundColor: 'white',
    alignSelf: 'center',
    borderRadius: 10,
    marginBottom:10,
    borderRadius:10
  },
switch: {
    height: 130,
    width: '94%',
    backgroundColor: 'white',
    alignSelf: 'center',
    borderRadius: 10,
    marginBottom:10,
    borderRadius:10
  },
  subscription: {
    height: 130,
    width: '94%',
    backgroundColor: 'white',
    alignSelf: 'center',
    borderRadius: 10,
    marginBottom:10,
    borderRadius:10
  }
});

export default Home;
