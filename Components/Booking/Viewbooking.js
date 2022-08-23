import {StyleSheet, Text, View,TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {setBookingList} from '../Redux/ActionType';
import moment from 'moment';

const Viewbooking = ({navigation}) => {
  const viewBookingdeatails = useSelector(state => state.bookinglist);
  const reduxDispatch = useDispatch();
  const [viewBooking, setViewBooking] = useState({});
  const [currentBooking, setcurrentBooking] = useState([]);
  const [previousBooking, setPreviousBooking] = useState([]);
  useEffect(() => {
    console.log('viewBookingdeatails', viewBookingdeatails);
    let currentDateBookingList = [];
    (currentDateBookingList = viewBookingdeatails.filter(
      item =>
        moment(item.date).format('DD/MM/YYYY') == moment().format('DD/MM/YYYY'),
    )),
      setcurrentBooking(currentDateBookingList),
      console.log('current', currentBooking);

    let previousDateBookingList = [];
    previousDateBookingList = viewBookingdeatails.filter(
      item =>
        moment(item.date).format('DD/MM/YYYY') !==
        moment().format('DD/MM/YYYY'),
    );
    setPreviousBooking(previousDateBookingList),
      console.log('previous', previousBooking);
  }, []);
  const handleSubmit = () => {
    // console.log('formdata', formData, bookingList);
    let tempBooklist = viewBookingdeatails;
    tempBooklist.push({
      username: viewBooking.name,
      adult: viewBooking.adult,
      children: viewBooking.children,
      email: viewBooking.email,
      phone: viewBooking.phone,
      date: viewBooking.date,
    });
    reduxDispatch(setBookingList(tempBooklist));
  };

  return (
    <View style={styles.container}>
      <Text
        style={{
          color: 'white',
          textAlign: 'center',
          fontSize: 30,
          fontStyle: 'italic',
          textShadowColor: 'magenta',
          textShadowOffset: {width: 2, height: 2},
          textShadowRadius: 5,
          fontWeight: 'bold',
          textDecorationLine: 'underline',
        }}>
        Viewbooking
      </Text>
      <View style={styles.current}>
        <Text
          style={{
            color: 'white',
            textAlign: 'center',
            fontSize: 20,
            fontStyle: 'italic',
            textShadowColor: 'red',
            textShadowOffset: {width: 2, height: 2},
            textShadowRadius: 5,
            fontWeight: 'bold',
            textDecorationLine: 'underline',
            marginBottom:10
          }}>
          Current
        </Text>
        <View>
          {currentBooking.map(element => {
            return (
              <View>
                <Text
                  style={{
                    color: 'white',
                    textAlign: 'center',
                    fontWeight: 'bold',
                  }}>
                  Name: {element.username}
                </Text>
                <Text
                  style={{
                    color: 'white',
                    textAlign: 'center',
                    fontWeight: 'bold',
                  }}>
                  Date: {moment(element.date).format('DD/MM/YYYY')}
                </Text>
              </View>
            );
          })}
          {/* <Text srtyle = {{color:"white"}}>{currentDateBookingList.username}</Text> */}
        </View>
      </View>
      <View style={styles.previous}>
        <Text
          style={{
            color: 'white',
            textAlign: 'center',
            fontSize: 20,
            fontStyle: 'italic',
            textShadowColor: 'red',
            textShadowOffset: {width: 2, height: 2},
            textShadowRadius: 5,
            fontWeight: 'bold',
            textDecorationLine: 'underline',
            marginBottom:10
            //   marginTop:-25,
            //   marginRight:40
          }}>
          Previous
        </Text>
        <View>
          {previousBooking.map(element => {
            return (
              <View>
                <Text
                  style={{
                    color: 'white',
                    textAlign: 'center',
                    fontWeight: 'bold',
                  }}>
                  Name: {element.username}
                </Text>
                <Text
                  style={{
                    color: 'white',
                    textAlign: 'center',
                    fontWeight: 'bold',
                  }}>
                  Date: {moment(element.date).format('DD/MM/YYYY')}
                </Text>
              </View>
            );
          })}
          {/* <Text srtyle = {{color:"white"}}>{currentDateBookingList.username}</Text> */}
        </View>
      </View>
      <TouchableOpacity
          style={styles.opacity2}
          onPress={() => navigation.navigate('Home')}>
          <Text
            style={{
              color: 'magenta',
              textAlign: 'center',
              marginTop: 100,
              fontWeight: 'bold',
              fontSize: 22,
              fontStyle: 'italic',
              borderWidth:1,
              height:45,
              width:250,
              padding:5,
              borderColor:"white",
              borderRadius:10,
              marginLeft:70,
              textShadowColor: 'magenta',
              textShadowOffset: {width: 1, height: 1},
              textShadowRadius: 5,
            }}>
             Back to home page
          </Text>
        </TouchableOpacity>
    </View>
  );
};

export default Viewbooking;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  current: {
    borderWidth: 1,
    borderColor: 'white',
    height: 'auto',
    width: 350,
    marginLeft: 20,
    borderRadius: 10,
    marginTop: 30,
  },
  previous: {
    borderWidth: 1,
    borderColor: 'white',
    height: 'auto',
    width: 350,
    marginLeft: 20,
    borderRadius: 10,
    marginTop: 30,
  },
});
