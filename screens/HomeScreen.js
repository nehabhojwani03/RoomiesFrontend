import { View, Text, StyleSheet, Image, TouchableOpacity,ActivityIndicator, ScrollView} from "react-native";
import React, {useState, useEffect} from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "@expo/vector-icons/Ionicons";
import axios from "axios";
import constant from "../constant";
import AppLoading from "expo-app-loading";
import AsyncStorage from "@react-native-async-storage/async-storage";

const HomeScreen = () => {

  const [loading, setIsLoading] = useState(true);
  const [name, setName] = useState("");
  const [photos, setPhotos] = useState("");
  const [token, setToken] = useState("");

  const getToken = () => {
    setIsLoading(true);
    AsyncStorage.getItem("userdata")
      .then((token) => {
        if (token != null) {
          // setIsLoading(false)
          console.log("Something" + token);
          setToken(token);
          getData(token);
        }
      })
      .catch((err) => {
        console.log("Profle" + err);
        setIsLoading(false);
      });
  };

  const getData = (token) => {
    setIsLoading(true);
    axios({
      method: "get",
      url: constant.BASE_URL + "/auth/me",
      headers: { Authorization: token },
    })
      .then((apiResponse) => {
        const { name,photos } = apiResponse.data.data;
        setName(name);
        setPhotos(photos);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log("Profile" + err);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    getToken();
  }, []);

  return (
    <View>
      <SafeAreaView>
        <View>
          <TouchableOpacity>
            <Image
              source={require("../assets/images/user.png")}
              style={styles.userImg}
            />
          </TouchableOpacity>
          <Text style={styles.text}>Welcome Back, {name}</Text>
          <TouchableOpacity>
            <Image
              source={require("../assets/images/notification.png")}
              style={styles.notificationImg}
            />
          </TouchableOpacity>
        </View>
      </SafeAreaView>

      <ScrollView>
      {/* Card 1 */}
      <View style={styles.card}>
        <Image source={require('../assets/images/Profile1.jpg')} style={styles.Img}/>
       <View style={{marginLeft: 170, marginTop: -170}}> 
        <Text style={{fontSize: 24, fontWeight: 'bold'}}> Tiffany </Text>
        <Text style={{marginTop: 10,fontSize: 16}}> Age: 20       Woman</Text>
        <TouchableOpacity>
        <Ionicons name="paper-plane-outline" size={25} style={{marginTop: 70, marginLeft: 100}}/>
        </TouchableOpacity>
        <TouchableOpacity>
        <Ionicons name="heart-outline" size={25} style={{marginTop: -25,marginLeft: 150}}/>
        </TouchableOpacity>
       </View>
      </View>

      {/* Card 2 */}
      <View style={styles.card}>
        <Image source={require('../assets/images/Profile2.jpg')} style={styles.Img}/>
       <View style={{marginLeft: 170, marginTop: -170}}> 
        <Text style={{fontSize: 24, fontWeight: 'bold'}}> Micheal </Text>
        <Text style={{marginTop: 10,fontSize: 16}}> Age: 22       Man</Text>
        <TouchableOpacity>
        <Ionicons name="paper-plane-outline" size={25} style={{marginTop: 70, marginLeft: 100}}/>
        </TouchableOpacity>
        <TouchableOpacity>
        <Ionicons name="heart-outline" size={25} style={{marginTop: -25,marginLeft: 150}}/>
        </TouchableOpacity>
       </View>
      </View>

      {/* Card 3 */}
      <View style={styles.card}>
        <Image source={require('../assets/images/Profile3.jpg')} style={styles.Img}/>
       <View style={{marginLeft: 170, marginTop: -170}}> 
        <Text style={{fontSize: 24, fontWeight: 'bold'}}> Timothy </Text>
        <Text style={{marginTop: 10,fontSize: 16}}> Age: 20       Man</Text>
        <TouchableOpacity>
        <Ionicons name="paper-plane-outline" size={25} style={{marginTop: 70, marginLeft: 100}}/>
        </TouchableOpacity>
        <TouchableOpacity>
        <Ionicons name="heart-outline" size={25} style={{marginTop: -25,marginLeft: 150}}/>
        </TouchableOpacity>
       </View>
      </View>

      {/* Card 4*/}
      <View style={styles.card}>
        <Image source={require('../assets/images/Profile4.jpg')} style={styles.Img}/>
       <View style={{marginLeft: 170, marginTop: -170}}> 
        <Text style={{fontSize: 24, fontWeight: 'bold'}}> Samantha </Text>
        <Text style={{marginTop: 10,fontSize: 16}}> Age: 19       woman</Text>
        <TouchableOpacity>
        <Ionicons name="paper-plane-outline" size={25} style={{marginTop: 70, marginLeft: 100}}/>
        </TouchableOpacity>
        <TouchableOpacity>
        <Ionicons name="heart-outline" size={25} style={{marginTop: -25,marginLeft: 150}}/>
        </TouchableOpacity>
       </View>
      </View>

      
      {/* Card 5*/}
      <View style={styles.card}>
        <Image source={require('../assets/images/Profile5.jpg')} style={styles.Img}/>
       <View style={{marginLeft: 170, marginTop: -170}}> 
        <Text style={{fontSize: 24, fontWeight: 'bold'}}> Olivia </Text>
        <Text style={{marginTop: 10,fontSize: 16}}> Age: 24      woman</Text>
        <TouchableOpacity>
        <Ionicons name="paper-plane-outline" size={25} style={{marginTop: 70, marginLeft: 100}}/>
        </TouchableOpacity>
        <TouchableOpacity>
        <Ionicons name="heart-outline" size={25} style={{marginTop: -25,marginLeft: 150}}/>
        </TouchableOpacity>
       </View>
      </View>

      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  userImg: {
    width: 50,
    height: 50,
    marginTop: -40,
    marginLeft: 5,
  },
  text: {
    padding: 10,
    fontSize: 16,
    fontWeight: "bold",
    marginTop: -44,
    marginLeft: 53,
  },
  notificationImg: {
    width: 30,
    height: 30,
    marginLeft: 370,
    marginTop: -35,
  },
  card:{
    width: 380,
    height: 200,
    marginLeft: 20,
    marginTop: 20,
    backgroundColor: 'white',
    borderRadius: 30,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    
  },
  Img:{
    width: 150,
    height: 200,
    borderRadius: 20,
  }
});
