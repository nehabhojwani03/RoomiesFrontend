import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity,
  FlatList,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import ImagePicker from "react-native-image-picker";

const ProfileScreen = () => {
  const navigation = useNavigation();
  const data = [
    { id: "1", title: "Profile", icon: "person-circle-outline" },
    { id: "2", title: "Privacy & Settings", icon: "lock-closed-outline" },
    { id: "3", title: "Preferences", icon: "heart" },
    { id: "4", title: "Co-living Management Tools", icon: "flash-outline" },
    { id: "5", title: "App Update Available", icon: "phone-portrait-outline" },
    { id: "6", title: "Logout", icon: "log-out" },
  ];

  const ListItem = ({ title, icon, fullWidth }) => {
    return (
      <TouchableOpacity onPress={() => handleItemClick(title)}>
        <View
          style={[styles.itemCard, fullWidth ? styles.fullWidthCard : null]}
        >
          <Ionicons name={icon} size={30} color="black" />
          <Text style={styles.itemTitle}>{title}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  const handleItemClick = (title) => {
    if (title === "Profile") {
      navigation.navigate("EditProfile", { headerColor: "#AA336A" });
    }
    if (title === "Privacy & Settings") {
      navigation.navigate("Privacy");
    }
    if (title === "Preferences") {
      navigation.navigate("Preference");
    }
    if (title === "Co-living Management Tools") {
      navigation.navigate("Tools");
    }
    if (title === "App Update Available") {
      navigation.navigate("AppUpdate");
    }
    if (title === "Logout") {
      Alert.alert(
        "Logout",
        "Are you sure you want to logout",
        [
          {
            text: "Cancel",
            style: "cancel",
          },
          {
            text: "OK",
            onPress: () => {
              navigation.navigate("Login");
            },
          },
        ],
        { cancelable: true }
      );
    }
  };

  const [profileImage, setProfileImage] = useState(
    require("../assets/images/user.png")
  );

  const showImagePickerOptions = (launchFunction) => {
    const options = {
      mediaType: "photo",
      quality: 0.7,
      storageOptions: {
        skipBackup: true,
        path: "images",
      },
    };

    launchFunction(options, (response) => {
      if (response.didCancel) {
        console.log("User cancelled image picker");
      } else if (response.error) {
        console.log("ImagePicker Error: ", response.error);
      } else {
        const source = { uri: response.uri };
        setProfileImage(source);
      }
    });
  };

  const handleEditPress = () => {
    Alert.alert("Edit Profile Picture", "Choose an option", [
      {
        text: "Take Photo",
        onPress: () => showImagePickerOptions(ImagePicker.launchCamera),
      },
      {
        text: "Choose from Gallery",
        onPress: () => showImagePickerOptions(ImagePicker.launchImageLibrary),
      },
      {
        text: "Delete",
        onPress: () => setProfileImage(require("../assets/images/user.png")),
        style: "destructive",
      },
      {
        text: "Cancel",
        style: "cancel",
      },
    ]);
  };
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <LinearGradient colors={["#F7DBA7", "#F0AB86"]} style={styles.card}>
          <View>
            <Image
              source={require("../assets/images/user.png")}
              style={styles.userImg}
            />
          </View>

          <TouchableOpacity onPress={handleEditPress}>
            <Text style={styles.editText}>Edit</Text>
          </TouchableOpacity>

          <View>
            <Text style={styles.usernameText}>Neha Bhojwani</Text>
          </View>
        </LinearGradient>
      </View>

      <FlatList
        style={{ padding: 10 }}
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            icon={item.icon}
            fullWidth={item.fullWidth}
          />
        )}
      />
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 270,
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  card: {
    backgroundColor: "#f5f5dc",
    padding: 16,
    width: 380,
    height: 210,
    alignItems: "center",
    borderRadius: 50,
    marginTop: -280,
    position: "fixed",
  },
  userImg: {
    width: 100,
    height: 100,
  },
  usernameText: {
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 10,
    marginLeft: 22,
  },
  editText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#AA336A",
    marginLeft: 5,
    marginTop: 10,
  },
  itemCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 10,
    padding: 16,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  fullWidthCard: {
    width: "100%",
  },
  itemTitle: {
    marginLeft: 15,
    fontSize: 18,
  },
  cardText: {
    fontSize: 16,
    textAlign: "center",
  },
  icon: {
    width: 50, // adjust width as needed
    height: 50, // adjust height as needed
    marginBottom: 10,
    alignSelf: "center",
  },
});
