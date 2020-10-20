import React from 'react';
import { StyleSheet, Text, SafeAreaView, ScrollView, View, Image, TouchableOpacity } from 'react-native';
import ServiceList from '../components/ServiceList';
const COLOR = "rgba(96,149,19,1)";

const Dashboard = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={{ alignItems: 'center',}}> 
            <Image
            source={require("../assets/images/DSCC-logo-final.png")}
            resizeMode="contain"
            style={styles.image}
            ></Image>
        </View>
        <View style={{alignItems: 'center', paddingBottom: 15}}> 
            <Text style={{fontWeight: '900', fontSize: 19, color:'rgba(96,149,19,1)'}}>
                SERVICES
            </Text>
        </View>
        <ServiceList 
            leftIcon="lightbulb" 
            leftTitle="STREET LIGHT" 
            rightIcon="account-multiple-plus-outline" 
            rightTitle="BIRTH REGISTRY"
        />
        <ServiceList 
            leftIcon="hospital-building" 
            leftTitle="HOSPITAL" 
            rightIcon="car" 
            rightTitle="PARKING"
        />
        <ServiceList 
            leftIcon="hospital-building" 
            leftTitle="DSCC HOSPITAL" 
            rightIcon="home-minus" 
            rightTitle="COMMUNITY HOSPITAL"
        />
        <ServiceList 
            leftIcon="highway" 
            leftTitle='ROAD/FOOTPATH' 
            rightIcon="bus-side" 
            rightTitle="BUS TERMINAL "
        />
        <ServiceList 
            leftIcon="home-modern" 
            leftTitle="BAZAR" 
            rightIcon="delete" 
            rightTitle="PUBLIC TOILET"
        />
        <ServiceList 
            leftIcon="school" 
            leftTitle="SCHOOL, COLLEGE" 
            rightIcon="map-marker-radius" 
            rightTitle="PARK "
        />
        
        <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('QueryDetailsHome')}
        >
            <Text style={{color: 'white', fontWeight: '500', fontSize: 15}}>SUBMIT YOUR QUERY HERE</Text>
        </TouchableOpacity>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30
  },
  scrollView: {
    marginHorizontal: 10,
  },
  image: {
    width: 180,
    height: 180,
  },
  button: {
    alignItems: "center",
    backgroundColor: COLOR,
    padding: 20,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 1,
    shadowRadius: 0,
    borderRadius: 25
  },

});

export default Dashboard;
