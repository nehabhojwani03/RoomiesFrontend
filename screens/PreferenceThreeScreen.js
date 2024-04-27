import React , {useState} from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Alert
} from "react-native";
import { ArrowLeftIcon } from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";
import { Button } from "react-native-elements";

const RadioButton = ({ label, selected, onSelect }) => (
  <TouchableOpacity style={styles.radioButton} onPress={onSelect}>
    <View style={styles.radioCircle}>
      {selected && <View style={styles.selectedRadioCircle} />}
    </View>
    <Text style={styles.radioLabel}>{label}</Text>
  </TouchableOpacity>
);

const PreferenceThreeScreen = () => {
  const navigation = useNavigation();

  const [foodPreference, setfoodPreference] = useState(null);
  const [drinkingPreference, setdrinkingPreference] = useState(null);

  const handlefoodPreferenceSelect = (preference) => {
    setfoodPreference(preference);
  };

  
  const handledrinkingPreferenceSelect = (preference) => {
      setdrinkingPreference(preference);
  };


  const handleContinuePress = () => {
    if (foodPreference && drinkingPreference) {
      navigation.navigate("PreferenceFour");
    } else {
      Alert.alert("Please select both Food and Drinking preferences.");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          className="bg-400 p-2 w-10 rounded-tr-2xl rounded-bl-2xl ml-4"
          style={{ backgroundColor: "#AA336A", marginTop: 15 }}
        >
          <ArrowLeftIcon size="20" color="white" />
        </TouchableOpacity>
      </View>
      
      <View style={{marginTop: 40}}>
        <Text style={{fontSize: 26, fontWeight: 'bold', padding: 10, color: '#AA336A'}}> Share your personal details to find roommate</Text>
      </View>


    {/* Divorce Preference */}

      <View style={{marginTop: 40}}>
        <Text style={{fontSize: 18, fontWeight:'bold', padding: 20}}>Food preferences</Text>
        <View style={styles.radioGroup}>
          <RadioButton
            label="Vegetarian"
            selected={foodPreference === "Vegetarian"}
            onSelect={() => handlefoodPreferenceSelect("Vegetarian")}
          />
          <RadioButton
            label="Non-Vegetarian"
            selected={foodPreference === "Non-Vegetarian"}
            onSelect={() => handlefoodPreferenceSelect("Non-Vegetarian")}
          />
          <RadioButton
            label="Eggetarian"
            selected={foodPreference === "Eggetarian"}
            onSelect={() => handlefoodPreferenceSelect("Eggetarian")}
          />
          
        </View>
      </View>

    {/* pet Preference */}

      <View style={{marginTop: 40}}>
        <Text style={{fontSize: 18, fontWeight:'bold', padding: 20}}>Drinking preferences</Text>
        <View style={styles.radioGroup}>
          <RadioButton
            label="Never"
            selected={drinkingPreference === "Never"}
            onSelect={() => handledrinkingPreferenceSelect("Never")}
          />
          <RadioButton
            label="Occasionally"
            selected={drinkingPreference === "Occasionally"}
            onSelect={() => handledrinkingPreferenceSelect("Occasionally")}
          />
          <RadioButton
            label="Regularly"
            selected={drinkingPreference === "Regularly"}
            onSelect={() => handledrinkingPreferenceSelect("Regularly")}
          />
        </View>
      </View>


      <View
          className="form space-y-2 mx-16 my-8"
          style={{marginTop: 180,  marginLeft: 60}}
        >
          <Button
            title="Continue"
            onPress={handleContinuePress}
            buttonStyle={styles.buttonStyling}
          />
        </View>

    </SafeAreaView>
  );
  };

export default PreferenceThreeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  text: {
    fontSize: 26,
    fontWeight: "bold",
  },
  radioButton: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    marginLeft: 30
  },
  radioCircle: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  selectedRadioCircle: {
    height: 12,
    width: 12,
    borderRadius: 6,
    backgroundColor: "#AA336A",
  },
  radioLabel: {
    fontSize: 16,
  },
  radioGroup: {
    marginTop: 10,
    
  },
  buttonStyling: {
    backgroundColor: "#AA336A",
    borderRadius: 30,
    height: 50,
  },
});
