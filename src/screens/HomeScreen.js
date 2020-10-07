import React, { Component } from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import ItemHeader from "../components/ItemHeader";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import QueryButton from "../components/QueryButton";

function HomeScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.itemHeaderStack}>
        <ItemHeader style={styles.itemHeader}></ItemHeader>
        <Image
          source={require("../assets/images/DSCC-logo-final.png")}
          resizeMode="contain"
          style={styles.image}
        ></Image>
      </View>
      <View style={styles.iconRow}>
        <MaterialCommunityIcons
          name="lightbulb"
          style={styles.icon}
        ></MaterialCommunityIcons>
        <Text style={styles.loremIpsum}>রাস্তার বৈদ্যুতিক{"\n"}লাইট</Text>
        <MaterialCommunityIcons
          name="account-multiple-plus-outline"
          style={styles.icon5}
        ></MaterialCommunityIcons>
        <Text style={styles.dob}>জন্ম নিবন্ধন</Text>
      </View>
      <View style={styles.icon1Row}>
        <MaterialCommunityIcons
          name="hospital-building"
          style={styles.icon1}
        ></MaterialCommunityIcons>
        <Text style={styles.hospital}>হাসপাতাল</Text>
        <MaterialCommunityIcons
          name="car"
          style={styles.icon6}
        ></MaterialCommunityIcons>
        <Text style={styles.loremIpsum3}>রাস্তার গাড়ি পার্কিং</Text>
      </View>
      <View style={styles.icon2Row}>
        <MaterialCommunityIcons
          name="hospital-building"
          style={styles.icon2}
        ></MaterialCommunityIcons>
        <Text style={styles.dscchospital}>DSCC হাসপাতাল</Text>
        <MaterialCommunityIcons
          name="home-minus"
          style={styles.icon7}
        ></MaterialCommunityIcons>
        <Text style={styles.community}>কমিউনিটি সেন্টার</Text>
      </View>
      <View style={styles.icon3Row}>
        <MaterialCommunityIcons
          name="highway"
          style={styles.icon3}
        ></MaterialCommunityIcons>
        <Text style={styles.loremIpsum2}>রাস্তা / নদমা{"\n"}/ ফুটপাত</Text>
        <MaterialCommunityIcons
          name="bus-side"
          style={styles.icon8}
        ></MaterialCommunityIcons>
        <Text style={styles.bus}>বাস টার্মিনাল</Text>
      </View>
      <View style={styles.icon4Row}>
        <MaterialCommunityIcons
          name="home-modern"
          style={styles.icon4}
        ></MaterialCommunityIcons>
        <Text style={styles.bazar}>বাজার</Text>
        <MaterialCommunityIcons
          name="delete"
          style={styles.icon9}
        ></MaterialCommunityIcons>
        <Text style={styles.publictoilet}>পাবলিক টয়লেট</Text>
      </View>
      <QueryButton style={styles.queryButton}></QueryButton>
      <View style={styles.icon10Row}>
        <MaterialCommunityIcons
          name="school"
          style={styles.icon10}
        ></MaterialCommunityIcons>
        <Text style={styles.publictoilet1}>
          স্কুল, কলেজ, {"\n"}বিশ্ববিদ্যালয় ও মাদ্রাসা
        </Text>
        <MaterialCommunityIcons
          name="map-marker-radius"
          style={styles.icon11}
        ></MaterialCommunityIcons>
        <Text style={styles.park}>পার্ক</Text>
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  itemHeader: {
    position: "absolute",
    top: 174,
    left: 20,
    height: 60,
    width: 160
  },
  image: {
    top: 0,
    width: 200,
    height: 200,
    position: "absolute",
    left: 0
  },
  itemHeaderStack: {
    width: 200,
    height: 234,
    marginTop: 1,
    marginLeft: 88
  },
  icon: {
    color: "rgba(96,149,19,1)",
    fontSize: 24,
    marginTop: 2
  },
  loremIpsum: {
    color: "rgba(96,149,19,1)",
    marginLeft: 7,
    marginTop: 1
  },
  icon5: {
    color: "rgba(96,149,19,1)",
    fontSize: 24,
    marginLeft: 62
  },
  dob: {
    color: "rgba(96,149,19,1)",
    fontSize: 14,
    marginLeft: 9,
    marginTop: 1
  },
  iconRow: {
    height: 39,
    flexDirection: "row",
    marginTop: 34,
    marginLeft: 20,
    marginRight: 62
  },
  icon1: {
    color: "rgba(96,149,19,1)",
    fontSize: 24
  },
  hospital: {
    color: "rgba(96,149,19,1)",
    marginLeft: 7,
    marginTop: 3
  },
  icon6: {
    color: "rgba(96,149,19,1)",
    fontSize: 24,
    marginLeft: 95
  },
  loremIpsum3: {
    color: "rgba(96,149,19,1)",
    marginLeft: 9,
    marginTop: 3
  },
  icon1Row: {
    height: 26,
    flexDirection: "row",
    marginTop: 19,
    marginLeft: 20,
    marginRight: 25
  },
  icon2: {
    color: "rgba(96,149,19,1)",
    fontSize: 24
  },
  dscchospital: {
    color: "rgba(96,149,19,1)",
    marginLeft: 7
  },
  icon7: {
    color: "rgba(96,149,19,1)",
    fontSize: 24,
    marginLeft: 57
  },
  community: {
    color: "rgba(96,149,19,1)",
    marginLeft: 9,
    marginTop: 1
  },
  icon2Row: {
    height: 26,
    flexDirection: "row",
    marginTop: 23,
    marginLeft: 20,
    marginRight: 26
  },
  icon3: {
    color: "rgba(96,149,19,1)",
    fontSize: 24,
    marginTop: 2
  },
  loremIpsum2: {
    color: "rgba(96,149,19,1)",
    marginLeft: 7
  },
  icon8: {
    color: "rgba(96,149,19,1)",
    fontSize: 24,
    marginLeft: 84
  },
  bus: {
    color: "rgba(96,149,19,1)",
    marginLeft: 9,
    marginTop: 3
  },
  icon3Row: {
    height: 38,
    flexDirection: "row",
    marginTop: 25,
    marginLeft: 20,
    marginRight: 59
  },
  icon4: {
    color: "rgba(96,149,19,1)",
    fontSize: 24,
    marginTop: 2
  },
  bazar: {
    color: "rgba(96,149,19,1)",
    marginLeft: 7,
    marginTop: 6
  },
  icon9: {
    color: "rgba(96,149,19,1)",
    fontSize: 24,
    marginLeft: 119
  },
  publictoilet: {
    color: "rgba(96,149,19,1)",
    marginLeft: 9,
    marginTop: 4
  },
  icon4Row: {
    height: 28,
    flexDirection: "row",
    marginTop: 18,
    marginLeft: 20,
    marginRight: 39
  },
  queryButton: {
    height: 60,
    width: 296,
    marginTop: 83,
    marginLeft: 40
  },
  icon10: {
    color: "rgba(96,149,19,1)",
    fontSize: 24
  },
  publictoilet1: {
    color: "rgba(96,149,19,1)",
    marginLeft: 7,
    marginTop: 4
  },
  icon11: {
    color: "rgba(96,149,19,1)",
    fontSize: 24,
    marginLeft: 27
  },
  park: {
    color: "rgba(96,149,19,1)",
    marginLeft: 9,
    marginTop: 3
  },
  icon10Row: {
    height: 42,
    flexDirection: "row",
    marginTop: -123,
    marginLeft: 20,
    marginRight: 107
  }
});

export default HomeScreen;
