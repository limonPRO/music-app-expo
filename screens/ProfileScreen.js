import {
  Text,
  View,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const ProfileScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");

  useEffect(() => {
    retrieveData();
    console.log("limon", email, username);
  }, []);

  const retrieveData = async () => {
    try {
      const storedEmail = await AsyncStorage.getItem("email");
      const storedUsername = await AsyncStorage.getItem("username");

      if (storedEmail !== null) {
        setEmail(storedEmail);
      }

      if (storedUsername !== null) {
        setUsername(storedUsername);
      }
    } catch (error) {
      console.log(error);
      // Handle error
    }
  };

  const hanndleLogout = () => {
    try {
      AsyncStorage.removeItem("email");
      AsyncStorage.removeItem("username");
      navigation.navigate("SignIn");
    } catch (error) {
      console.log("somethig is wrong");
    }
  };
  return (
    <SafeAreaView
      style={{
        backgroundColor: "#01020B",
        height: "100%",
      }}
    >
      <View>
        <Image
          style={{
            width: 100,
            height: 100,
            borderRadius: 200,
            alignSelf: "center",
            marginTop: 20,
          }}
          source={require("../songs/images/logo.jpg")}
        />
      </View>
      <View>
        <Text
          style={{
            color: "white",
            fontSize: 19,
            lineHeight: 22,
            fontWeight: "600",
            marginTop: 20,
            //   marginBottom: 20,
            //   marginLeft: 20,
            alignSelf: "center",
          }}
        >
          Profile
        </Text>
      </View>

      <View style={{ alignSelf: "center", marginTop: 10 }}>
        <MaterialCommunityIcons
          style={{ alignSelf: "center" }}
          name="face-man-profile"
          size={60}
          color="white"
        />
      </View>
      <View>
        <Text
          style={{
            alignSelf: "center",
            fontSize: 19,
            lineHeight: 22,
            color: "white",
            paddingTop: 20,
          }}
        >
          {username}
        </Text>
        <Text
          style={{
            alignSelf: "center",
            fontSize: 19,
            lineHeight: 22,
            color: "white",
            paddingTop: 30,
          }}
        >
          {email}
        </Text>
      </View>

      <TouchableOpacity
        style={{
          width: "90%",
          height: 50,
          backgroundColor: "#008080",
          justifyContent: "center",
          alignItems: "center",
          alignContent: "center",
          borderRadius: 5,
          marginTop: 50,
          alignSelf: "center",
          marginBottom: 40,
        }}
        onPress={hanndleLogout}
      >
        <Text style={{ color: "white", fontSize: 17 }}>
          logout
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default ProfileScreen;
