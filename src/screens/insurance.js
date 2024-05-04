import React from 'react';
import {
  View,
  Text,
  Button,
  Image,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import Commonheader from './commonheader';

const Insurance = () => {
  return (
    <View style={{flex: 1, backgroundColor: '#cfcfcf'}}>
     <Commonheader/>
      <ScrollView style={{marginBottom: 85}}>
        <View style={style.insureself}>
          <Text
            style={{
              color: 'black',
              fontWeight: 500,
              marginLeft: 10,
              marginTop: 10,
              fontSize: 20,
            }}>
            Insure self and family
          </Text>
          <View style={{height: 100, width: '100%', flexDirection: 'row'}}>
            <View
              style={{
                flexDirection: 'row',
                width: '50%',
                height: 70,
                alignItems: 'center',
                borderRightWidth: 1,
                marginTop: 10,
              }}>
              <TouchableOpacity
                style={{
                  alignItems: 'center',
                  flexDirection: 'row',
                  height: 70,
                  width: '50%',
                }}>
                <View
                  style={{
                    height: 40,

                    borderRadius: 10,
                    marginLeft: 15,
                  }}>
                  <Image
                    style={{height: 30, width: 40, tintColor: 'purple'}}
                    source={require('../images/Health.png')}
                  />
                </View>
                <Text
                  style={{
                    fontSize: 16,
                    color: 'black',
                    marginLeft: 10,
                    justifyContent: 'center',
                    textAlign: 'center',
                  }}>
                  Health from ₹577/month
                </Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                flexDirection: 'row',
                width: '55%',
                height: 80,
                alignItems: 'center',
                marginLeft: 20,
              }}>
              <TouchableOpacity
                style={{
                  alignItems: 'center',
                  flexDirection: 'row',
                  height: 80,
                  width: '54%',
                }}>
                <View style={{height: 40, borderRadius: 10}}>
                  <Image
                    style={{height: 30, width: 50, tintColor: 'purple'}}
                    source={require('../images/termlife.png')}
                  />
                </View>
                <Text
                  style={{
                    fontSize: 19,
                    color: 'black',
                    marginLeft: 10,
                    justifyContent: 'center',
                    textAlign: 'center',
                  }}>
                  Life from ₹700/month
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={style.insureyour}>
          <Text
            style={{
              color: 'black',
              fontWeight: 500,
              marginLeft: 10,
              marginTop: 10,
              fontSize: 20,
            }}>
            Insure self and family
          </Text>
          <View style={{height: 100, width: '100%', flexDirection: 'row'}}>
            <View
              style={{
                flexDirection: 'row',
                width: '50%',
                height: 70,
                alignItems: 'center',
                borderRightWidth: 1,
                marginTop: 10,
              }}>
              <TouchableOpacity
                style={{
                  alignItems: 'center',
                  flexDirection: 'row',
                  height: 70,
                  width: '50%',
                }}>
                <View
                  style={{
                    height: 40,

                    borderRadius: 10,
                    marginLeft: 15,
                  }}>
                  <Image
                    style={{height: 30, width: 40, tintColor: 'purple'}}
                    source={require('../images/Health.png')}
                  />
                </View>
                <Text
                  style={{
                    fontSize: 16,
                    color: 'black',
                    marginLeft: 10,
                    justifyContent: 'center',
                    textAlign: 'center',
                  }}>
                  Health from ₹577/month
                </Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                flexDirection: 'row',
                width: '55%',
                height: 80,
                alignItems: 'center',
                marginLeft: 20,
              }}>
              <TouchableOpacity
                style={{
                  alignItems: 'center',
                  flexDirection: 'row',
                  height: 80,
                  width: '54%',
                }}>
                <View style={{height: 40, borderRadius: 10}}>
                  <Image
                    style={{height: 30, width: 50, tintColor: 'purple'}}
                    source={require('../images/termlife.png')}
                  />
                </View>
                <Text
                  style={{
                    fontSize: 19,
                    color: 'black',
                    marginLeft: 10,
                    justifyContent: 'center',
                    textAlign: 'center',
                  }}>
                  Life from ₹700/month
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              height: 100,
              width: '94%',
              backgroundColor: '#efdff0',
              alignSelf: 'center',
            }}>
            <Text style={{textAlign: 'center', color: 'black', marginTop: 10}}>
              Or,provide vehicle registration number
            </Text>
            <TextInput
              style={{
                borderWidth: 1,
                margin: 15,
                borderRadius: 20,
                textAlign: 'center',
                color: 'black',
                backgroundColor: 'white',
                fontSize: 22,
              }}
              placeholder="Eg.KA00XX0000"
            />
          </View>
        </View>
        <View style={style.otherinsurance}>
          <Text
            style={{
              color: 'black',
              fontSize: 20,
              fontWeight: 600,
              marginLeft: 10,
              marginTop: 10,
            }}>
            Other Insurance
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
                  source={require('../images/flight.png')}
                />
              </View>
              <Text style={{color: 'black', fontSize: 18, textAlign: 'center'}}>
                Travel Insurance
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
                  source={require('../images/accident.png')}
                />
              </View>
              <Text style={{color: 'black', fontSize: 18, marginBottom: 12}}>
                Accident
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
                  source={require('../images/insurance.png')}
                />
              </View>
              <Text style={{color: 'black', fontSize: 18, marginBottom: 1}}>
                Super Top-up
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
                  source={require('../images/shop.png')}
                />
              </View>
              <Text style={{color: 'black', fontSize: 18, marginBottom: 16}}>
                Shop
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={style.footer}>
          <Text style={{color: 'black', margin: 13,textAlign:'center',}}>
            Phone Pe Insurance Broking service Private Limited.IRDAI Direct
            Broker (Life and General) Reg.766 and Broker Registration Code
            IRDA/DB 822/20
          </Text>
          <Text style={{color:'black',margin:10,marginTop:0,textAlign:'center'}}>
            Reg.Address-Office2,Floor 4,5,6,7, Wing A,Block A,Salarpuria Softzone,
            Service Road,Green Glen Layout,Bellandur,Bengaluru,Karnataka-KA Pin-560103
          </Text>
          <Text style={{color:'black',margin:10,marginTop:0,textAlign:'center'}}>CIN: U66000KA2020DFTC132814.TnC.Privacy Policy & Grievance Policy</Text>
        </View>
      </ScrollView>
    </View>
  );
};

const style = StyleSheet.create({
  insureself: {
    height: 130,
    width: '94%',
    backgroundColor: 'white',
    alignSelf: 'center',
    marginTop: 10,
    borderRadius: 10,
  },
  insureyour: {
    height: 250,
    width: '94%',
    backgroundColor: 'white',
    alignSelf: 'center',
    marginTop: 10,
    borderRadius: 10,
  },
  otherinsurance: {
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
  footer: {
    height: 200,
    width: '94%',
    backgroundColor: '#cfcfcf',
    marginTop: 10,
    alignSelf: 'center',
  },
});

export default Insurance;
