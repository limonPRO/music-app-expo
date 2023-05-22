import {ScrollView, Text, TextInput, TouchableOpacity, View} from "react-native";
import React, {useState} from "react";
import SignInUser from "./SignInScreen";


const SignUpUser = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const handleSubmit = () => {
  //   navigation()
  // };

  return (
    <ScrollView
      style={{
        backgroundColor: "#01020B",
        height: "100%",
      }}
    >
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
           Sign up
          </Text>
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
            Create your password
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
            placeholder="Password"
            placeholderTextColor="rgba(235, 235, 245, 0.6)"
            value={password}
            onChangeText={(text) => setPassword(text)}
            secureTextEntry={true}
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
              () => navigation.navigate("SignIn")
            }
          >
            <Text style={{ color: "white", fontSize: 17 }}>
                signup
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default SignUpUser;