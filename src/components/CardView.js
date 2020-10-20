import React, { Component } from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const COLOR = "rgba(96,149,19,1)";

function CardView(props) {
  return (
    <View style={styles.container}> 
        <View style={styles.rect}>
          <Text style={styles.details}>Details:</Text>
          <Text style={styles.loremIpsum}>
            In my area, dustbins are not cleaned regularly.....
          </Text>
          <Text style={styles.details}>Pic:</Text>
          <View style={styles.image2Row}>
            <Image
              source={require("../assets/images/download.jpg")}
              resizeMode="stretch"
              style={styles.image2}
            ></Image>
            <Image
              source={require("../assets/images/02.jpg")}
              resizeMode="stretch"
              style={styles.image3}
            ></Image>
          </View>
          <View style={styles.image4Row}>
            <Image
              source={require("../assets/images/03.jpg")}
              resizeMode="stretch"
              style={styles.image4}
            ></Image>
            <Image
              source={require("../assets/images/04.jpg")}
              resizeMode="stretch"
              style={styles.image5}
            ></Image>
          </View>
          <View style={styles.locationStack}>
            <Text style={styles.location}>Location:</Text>
            <Text style={styles.loremIpsum3}>West Malibag, Road 22</Text>
          </View>
          <View style={styles.locationStack}>
            <Text style={styles.location}>Submission date:</Text>
            <Text style={styles.loremIpsum3}>23rd September, 2020</Text>
          </View>
          <View style={styles.locationStack}>
            <Text style={styles.location}>Status:</Text>
            <Text style={styles.loremIpsum3}>Submitted</Text>
          </View>
          <Text style={styles.problemType}>Query Type:</Text>
          <Text style={styles.loremIpsum5}>Road is dirty</Text>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 13,

    justifyContent: 'flex-start',
    paddingVertical: 10
  },
  rect: {
    width: 340,
    backgroundColor: "#E6E6E6",
    borderRadius: 17,
    shadowColor: "rgba(96,149,19,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 1,
    shadowRadius: 0,
    paddingLeft: 5
  },
  details: {
    fontWeight: '700',
    color: "rgba(96,149,19,1)",
    marginTop: 10,
    marginLeft: 12
  },
  loremIpsum: {
    
    color: "#121212",
    marginTop: 6,
    marginLeft: 14
  },
  image2: {
    width: 111,
    height: 90,
    marginTop: 1
  },
  image3: {
    width: 111,
    height: 90,
    marginLeft: 12
  },
  image2Row: {
    height: 91,
    flexDirection: "row",
    marginTop: 2,
    marginLeft: 12,
    marginRight: 94
  },
  image4: {
    width: 111,
    height: 90
  },
  image5: {
    width: 111,
    height: 90,
    marginLeft: 10
  },
  image4Row: {
    height: 90,
    flexDirection: "row",
    marginTop: 9,
    marginLeft: 14,
    marginRight: 94
  },
  location: {
    top: 0,
    left: 0,
    position: "absolute",
    fontWeight: '700',
    color: "rgba(96,149,19,1)"
  },
  loremIpsum3: {
    top: 18,
    left: 2,
    position: "absolute",
    fontWeight: '500',
    color: "#121212"
  },
  locationStack: {
    width: 143,
    height: 37,
    marginTop: 8,
    marginLeft: 11
  },
  submission: {
    fontWeight: '700',
    color: "rgba(96,149,19,1)"
  },
  current: {
    fontWeight: '700',
    color: "rgba(96,149,19,1)",
    marginLeft: 81
  },
  submissionRow: {
    height: 19,
    flexDirection: "row",
    marginTop: 17,
    marginLeft: 12,
    marginRight: 27
  },
  loremIpsum4: {
    
    color: "#121212"
  },
  submitted2: {
    fontWeight: '700',
    color: "#121212",
    marginLeft: 68
  },
  loremIpsum4Row: {
    height: 19,
    flexDirection: "row",
    marginLeft: 13,
    marginRight: 51
  },
  problemType: {
    color: "rgba(96,149,19,1)",
    fontWeight: '700',
    marginTop: 17,
    marginLeft: 16
  },
  loremIpsum5: {
    
    color: "#121212",
    marginTop: 4,
    marginLeft: 14,
    paddingBottom: 10
  }
});

export default CardView;