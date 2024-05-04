import React from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Commonheader from './commonheader';

const Credit = () => {
  return (
    <View style={{flex: 1, backgroundColor: '#cfcfcf'}}>
      <Commonheader/>
      <ScrollView style={{marginBottom: 85}}>
        <View style={style.mainview}>
          <Image
            style={{height: 180, width: '98%', alignSelf: 'center',marginTop:2}}
            source={require('../images/creditscore.png')}
          />
          <View style={{height: 200, width: '100%', backgroundColor: 'white'}}>
            <Text style={{textAlign: 'center', fontSize: 30, color: 'black'}}>
              Check Your
            </Text>
            <Text style={{textAlign: 'center', fontSize: 30, color: 'black'}}>
              Credit Score For Free
            </Text>
            <View
              style={{
                flexDirection: 'row',
                height: 60,
                width: '100%',
                justifyContent: 'space-around',
                marginTop: 10,
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontSize: 20,
                  width: '28%',
                  color: 'black',
                  borderRightWidth: 1,
                }}>
                Detailed Insights
              </Text>
              <Text
                style={{
                  fontSize: 20,
                  width: '30%',
                  color: 'black',
                  borderRightWidth: 1,
                }}>
                coufomised Loans
              </Text>
              <Text
                style={{
                  fontSize: 20,
                  width: '20%',
                  color: 'black',
                  borderRightWidth: 1,
                }}>
                100% Secure
              </Text>
            </View>
            <View
              style={{
                height: 50,
                width: '90%',
                backgroundColor: 'purple',
                alignSelf: 'center',
                marginTop: 10,
                borderRadius: 30,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{color: 'white', fontSize: 25}}>Check Now</Text>
            </View>
          </View>
        </View>
        <View style={style.managecredits}>
          <Text
            style={{
              color: 'black',
              fontWeight: 500,
              marginLeft: 10,
              marginTop: 10,
              fontSize: 20,
            }}>
            Manage Credits
          </Text>
          <View style={{height: 100, width: '100%', flexDirection: 'row'}}>
            <View
              style={{
                flexDirection: 'row',
                width: '50%',
                height: 80,
                alignItems: 'center',
                borderRightWidth: 1,
              }}>
              <TouchableOpacity
                style={{
                  alignItems: 'center',
                  flexDirection: 'row',
                  height: 80,
                  width: '50%',
                }}>
                <View
                  style={{
                    height: 40,
                   borderWidth:1,
                    borderRadius: 10,
                    marginLeft: 15,
                  }}>
                  <Image
                    style={{height: 30, width: 50}}
                    source={require('../images/rupeeupi.png')}
                  />
                </View>
                <Text
                  style={{
                    fontSize: 20,
                    color: 'black',
                    marginLeft: 10,
                    justifyContent: 'center',
                    textAlign: 'center',
                  }}>
                  Rupee Credit on UPI
                </Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                flexDirection: 'row',
                width: '50%',
                height: 80,
                alignItems: 'center',
                marginLeft: 20,
              }}>
              <TouchableOpacity
                style={{
                  alignItems: 'center',
                  flexDirection: 'row',
                  height: 80,
                  width: '50%',
                }}>
                <View style={{height: 37, borderRadius: 10,justifyContent:'center',alignItems:'center'}}>
                  <Image
                    style={{height: 30, width: 40,tintColor:'purple'}}
                    source={require('../images/creditcard.png')}
                  />
                </View>
                <Text
                  style={{
                    fontSize: 20,
                    color: 'black',
                    marginLeft: 10,
                    justifyContent: 'center',
                    textAlign: 'center',
                  }}>
                  Credit Card
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={style.creditscore}>
          <Text
            style={{
              color: 'black',
              fontWeight: 500,
              marginLeft: 10,
              marginTop: 10,
              fontSize: 20,
            }}>
            Credit Score
          </Text>
          <View style={{height: 100, width: '100%', flexDirection: 'row'}}>
            <View
              style={{
                flexDirection: 'row',
                width: '50%',
                height: 80,
                alignItems: 'center',
                borderRightWidth: 1,
              }}>
              <TouchableOpacity
                style={{
                  alignItems: 'center',
                  flexDirection: 'row',
                  height: 80,
                  width: '50%',
                }}>
                <View
                  style={{
                    height: 40,
                   
                    borderRadius: 10,
                    marginLeft: 15,
                    justifyContent:'center',
                    alignItems:'center'
                  }}>
                  <Image
                    style={{height: 30, width: 50,}}
                    source={require('../images/creditscore.png')}
                  />
                </View>
                <Text
                  style={{
                    fontSize: 20,
                    color: 'black',
                    marginLeft: 10,
                    justifyContent: 'center',
                    textAlign: 'center',
                  }}>
                  Credit Score
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
                    style={{height: 40, width: 50,tintColor:'purple'}}
                    source={require('../images/accountaggre.png')}
                  />
                </View>
                <Text
                  style={{
                    fontSize: 20,
                    color: 'black',
                    marginLeft:10,
                    justifyContent: 'center',
                    textAlign: 'center',
                  }}>
                  Account Aggregator
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={style.Paymentdues}>
          <Text
            style={{
              color: 'black',
              fontWeight: 500,
              marginLeft: 10,
              marginTop: 10,
              fontSize: 20,
            }}>
            Payment dues
          </Text>
          <View style={{height: 100, width: '100%', flexDirection: 'row'}}>
            <View
              style={{
                flexDirection: 'row',
                width: '50%',
                height: 80,
                alignItems: 'center',
                borderRightWidth: 1,
              }}>
              <TouchableOpacity
                style={{
                  alignItems: 'center',
                  flexDirection: 'row',
                  height: 80,
                  width: '50%',
                }}>
                <View
                  style={{
                    height: 40,
                  
                    borderRadius: 10,
                    marginLeft: 15,
                  }}>
                  <Image
                    style={{height: 40, width: 50,tintColor:'purple'}}
                    source={require('../images/creditcard.png')}
                  />
                </View>
                <Text
                  style={{
                    fontSize: 20,
                    color: 'black',
                    marginLeft: 10,
                    justifyContent: 'center',
                    textAlign: 'center',
                  }}>
                  Credit Card Bill Payments
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
                    style={{height: 40, width: 50,tintColor:'purple'}}
                    source={require('../images/loan.png')}
                  />
                </View>
                <Text
                  style={{
                    fontSize: 20,
                    color: 'black',
                    marginLeft:10,
                    justifyContent: 'center',
                    textAlign: 'center',
                  }}>
                  Loan Repayment
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const style = StyleSheet.create({
  mainview: {
    height: 400,
    width: '96%',
    backgroundColor: 'white',
    alignSelf: 'center',
    marginTop: 10,
    borderRadius: 10,
  },
  managecredits: {
    height: 130,
    width: '94%',
    backgroundColor: 'white',
    alignSelf: 'center',
    marginTop: 10,
    borderRadius: 10,
  },
  creditscore: {
    height: 130,
    width: '94%',
    backgroundColor: 'white',
    alignSelf: 'center',
    marginTop: 10,
    borderRadius: 10,
  },
  Paymentdues: {
    height: 130,
    width: '94%',
    backgroundColor: 'white',
    alignSelf: 'center',
    marginTop: 10,
    borderRadius: 10,
  },
});
export default Credit;
