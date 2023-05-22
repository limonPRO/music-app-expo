import {Image, ScrollView, Text, TextInput, TouchableOpacity, View} from "react-native";
import React, {useState} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import ToastManager, { Toast } from 'toastify-react-native'

const SignInUser = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");

  
const handleSubmit = async () => {
  console.log(email, username);
  if(!email || !username){
    Toast.error('please enter login credential')
    // navigation.navigate("SignIn")
  }else{
    try {
      await AsyncStorage.setItem("email", email);
      await AsyncStorage.setItem("username", username);
      setEmail("")
      setUsername("")
      navigation.navigate("Home")
      
    } catch (error) {
      console.log(error);
      // Handle error
    }
  }
 

};

  return (
    <ScrollView
      style={{
        backgroundColor: "#01020B",
        height: "100%",
      }}
    >
       <ToastManager position="top" duration={2000}/>
        <View>
          <Image style={{width: 275, height: 200, borderRadius:200, alignSelf:'center',marginTop:20 }}
          source={require('../songs/images/logo.jpg')}/>
        </View>
        <View>
          <View>
          <Text
            style={{
              color: "white",
              fontSize: 19,
              lineHeight: 22,
              fontWeight: "600",
              marginTop: 20,
              marginBottom: 20,
              marginLeft: 20,
            }}
          >
           Enter your email
          </Text>
          <TextInput
            keyboardAppearance="dark"
            style={{
              height: 50,
              marginBottom: 16,
              marginHorizontal: 20,
              fontSize: 17,
              textAlignVertical: "center",
              paddingTop: 20,
              backgroundColor: "rgba(94, 94, 102, 0.24)",
              padding: 14,
              borderRadius: 11,
              color: "white",
            }}
            placeholder="Email"
            placeholderTextColor="rgba(235, 235, 245, 0.6)"
            value={email}
            onChangeText={(text) => {
              setEmail(text);
            }}
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
              marginBottom: 20,
              marginLeft: 20,
            }}
          >
            Create your username
          </Text>
          <TextInput
            keyboardAppearance="dark"
            style={{
              height: 50,
              marginBottom: 16,
              marginHorizontal: 20,
              fontSize: 17,
              textAlignVertical: "center",
              paddingTop: 20,
              backgroundColor: "rgba(94, 94, 102, 0.24)",
              padding: 14,
              borderRadius: 11,
              color: "white",
            }}
            placeholder="username"
            placeholderTextColor="rgba(235, 235, 245, 0.6)"
            value={username}
            onChangeText={(text) => setUsername(text)}
            
          />
          <TouchableOpacity
            style={{
              width: "90%",
              height: 50,
              backgroundColor: "#008080",
              justifyContent: "center",
              alignItems: "center",
              alignContent: "center",
              borderRadius: 5,
              marginTop: 10,
              alignSelf: "center",
              marginBottom: 40,
            }}
            onPress={
              handleSubmit
              // () => navigation.navigate("Home")
            }
          >
            <Text style={{ color: "white", fontSize: 17 }}>
                sign in
              {/* {signUpMutation.isLoading ? 'Please wait...' : 'Create my account'} */}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* <ToastContainer /> */}
    </ScrollView>
  );
};

export default SignInUser;