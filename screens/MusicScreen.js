import {
  FlatList,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Slider from "@react-native-community/slider";
import React, { useEffect, useRef, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRoute } from "@react-navigation/native";
import { AntDesign, Entypo, Feather } from "@expo/vector-icons";
import { songs } from "../data";
import { Audio } from "expo-av";

// const {height,width}=Dimensions.get('window')

const MusicScreen = () => {
  const route = useRoute();
  // console.log(route.params.data);
  const [currentSong, setCurrentSong] = useState(route.params.index);

  const ref = useRef();

  const [sound, setSound] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [position, setPosition] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      ref.current.scrollToIndex({
        animated: true,
        index: currentSong,
      });
    }, 500);
  }, []);

  useEffect(() => {
    if (sound) {
      sound.unloadAsync();
    }

    const loadAndPlaySong = async () => {
      const { sound: newSound } = await Audio.Sound.createAsync(
        songs[currentSong].url,
        { positionMillis: position }
      );
      setSound(newSound);
      await newSound.playAsync();
      setIsPlaying(true);
    };

    loadAndPlaySong();

    if (sound) {
      sound.setOnPlaybackStatusUpdate((status) => {
        if (status.isLoaded && status.isPlaying) {
          setPosition(status.positionMillis);
          setSliderPosition(status.positionMillis);
        }
      });
    }

    return () => {
      if (sound) {
        sound.unloadAsync();
      }
    };
  }, [currentSong]);

  const playPauseSong = async () => {
    if (sound) {
      if (isPlaying) {
        await sound.pauseAsync();
      } else {
        await sound.playAsync();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const playNextSong = () => {
    if (currentSong < songs.length - 1) {
      setCurrentSong(currentSong + 1);
      ref.current.scrollToIndex({
        animated: true,
        index: currentSong + 1,
      });
    }
  };

  const playPreviousSong = () => {
    if (currentSong > 0) {
      setCurrentSong(currentSong - 1);
      ref.current.scrollToIndex({
        animated: true,
        index: currentSong - 1,
      });
    }
  };
  const handleSliderValueChange = (value) => {
    setSliderPosition(value);
    if (sound) {
      sound.setPositionAsync(value);
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
        horizontal
        //  showsVerticalScrollIndicator={false}
        ref={ref}
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        style={{
          width: "70%",
          height: 200,
          alignSelf: "center",
          borderRadius: 10,
        }}
        data={songs}
        renderItem={({ item }) => {
          return (
            <View style={{}}>
              {/* <Text>{item.title}</Text> */}
              <Image
                source={item.artwork}
                style={{
                  width: 275,
                  height: 300,
                  borderRadius: 30,
                  marginTop: 10,
                }}
              />
            </View>
          );
        }}
      />

      <Text
        style={{
          color: "white",
          alignSelf: "center",
          fontSize: 15,
          marginTop: 20,
        }}
      >
        Now playing
      </Text>
      <Text
        style={{
          color: "white",
          alignSelf: "center",
          fontSize: 19,
          lineHeight: 22,
          marginTop: 20,
        }}
      >
        {songs[currentSong].title}
      </Text>
      <View>
        <Slider
          style={{ alignSelf: "center", width: "70%", marginTop: 20 }}
          value={sliderPosition}
          minimumValue={0}
          // maximumValue={sound ? sound.getDurationMillis() : 0}
          onValueChange={handleSliderValueChange}
        />
      </View>
      <View
        style={{
          width: "90%",
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "center",
          marginTop: 100,
          alignSelf: "center",
        }}
      >
        <TouchableOpacity onPress={playPreviousSong}>
          <AntDesign name="stepbackward" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity onPress={playPauseSong}>
          {isPlaying ? (
            <AntDesign name="pause" size={24} color="white" />
          ) : (
            <AntDesign name="play" size={24} color="white" />
          )}
        </TouchableOpacity>
        <TouchableOpacity onPress={playNextSong}>
          <AntDesign name="stepforward" size={24} color="white" />
        </TouchableOpacity>
      </View>
      <View
        style={{
          width: "90%",
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "center",
          marginTop: 100,
          alignSelf: "center",
          marginBottom: 100,
        }}
      >
        <TouchableOpacity>
          <Entypo name="shuffle" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Feather name="repeat" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default MusicScreen;
