import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
const MusicList = ({ item, index, data }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={{
        backgroundColor: "#3A3A3C",
        height: 70,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        marginBottom: 10,
        flexDirection: "row",
        alignItems: "center",
        paddingLeft: 10,
        justifyContent: "space-between", // Add this line
      }}
      onPress={() => navigation.navigate("Music", { data: item, index: index })}
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Image
          style={{
            width: 50,
            height: 50,
            borderRadius: 25,
            marginRight: 10,
          }}
          source={item.artwork}
        />
        <View>
          <Text style={{ color: "white" }}>{item.artist}</Text>
          <Text style={{ color: "white" }}>{item.title}</Text>
        </View>
      </View>
      <AntDesign
        name="play"
        size={24}
        color="black"
        style={{ paddingRight: 20 }}
      />
    </TouchableOpacity>
  );
};

export default MusicList;
