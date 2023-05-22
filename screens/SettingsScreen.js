import {FlatList, ScrollView, Text, View} from "react-native";
import React, {useState} from "react";
import { songs } from "../data";
import MusicList from "../components/MusicList";
import { SafeAreaView } from "react-native-safe-area-context";



const SettingsScreen = ({ navigation }) => {
  return (
    <SafeAreaView
      style={{
        backgroundColor: "#01020B",
        height: "100%",
      }}
    >

    </SafeAreaView>
  );
};

export default SettingsScreen;