import { FlatList, ScrollView, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { songs } from "../data";
import MusicList from "../components/MusicList";
import { SafeAreaView } from "react-native-safe-area-context";
import AsyncStorage from "@react-native-async-storage/async-storage";

const HomeScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");

  useEffect(() => {
    retrieveData();
  }, []);

  const retrieveData = async () => {
    try {
      const storedEmail = await AsyncStorage.getItem("email");
      const storedUsername = await AsyncStorage.getItem("username");

      if (storedEmail !== null) {
        setEmail(storedEmail);
      }

      if (!storedEmail || !storedUsername) {
        navigation.navigate("SignIn");
      }

      if (storedUsername !== null) {
        setUsername(storedUsername);
      }
    } catch (error) {
      console.log(error);
      // Handle error
    }
  };
  return (
    <SafeAreaView
      style={{
        backgroundColor: "#01020B",
        height: "100%",
      }}
    >
      <FlatList
        style={{}}
        data={songs}
        renderItem={({ item, index }) => {
          return <MusicList item={item} index={index} data={songs} />;
        }}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;
