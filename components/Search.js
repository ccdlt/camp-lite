import React, { useState, useRef, useEffect } from 'react';
import {Picker} from '@react-native-picker/picker';
import CampSite from './CampSite'
import SelectDropdown from 'react-native-select-dropdown';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { View, Text, StyleSheet, SafeAreaView, TextInput, ScrollView } from 'react-native';

const Search = () => {
  const [state, setState] = useState('');
  const [amenity, setAmenity] = useState('');
  const [waterfront, setWaterFront] = useState(false);

  const pickerRef = useRef();

  function open() {
    pickerRef.current.focus();
  }

  function close() {
    pickerRef.current.blur();
  }

  const states = ['Select State','Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Lousiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];

  const stateCode = [null, 'AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY'];

  const amenities = ['Select Amenity', 'Biking', 'Boating', 'Equipment Rental', 'Fishing', 'Golf', 'Hiking', 'Horseback Riding', 'Hunting', 'Recreational Activities', 'Scenic Trails', 'Sports', 'Beach/Water Activities', 'Winter Activities'];

  const amenityCode = [null, 4001, 4002, 4003, 4004, 4005, 4006, 4007, 4008, 4009, 4010, 4011, 4012, 4013];



  console.log('state', state)
  return(
    <SafeAreaView>
        <ScrollView
          showsVerticalScrollIndicator={false}
          alwaysBounceVertical={false}
          contentContainerStyle={styles.scrollViewContainer}>
          <Picker
            ref={pickerRef}
            selectedValue={state}
            style={styles.form}
            onValueChange={(itemValue, itemIndex) => {
              setState(itemValue)
              console.log('state', state)

            }}>
            {states.map((item, index) => {
              console.log(item, stateCode[index])
              return <Picker.Item label={item} value={stateCode[index]} />
            })}
          </Picker>
          <Picker
            ref={pickerRef}
            selectedValue={amenity}
            style={styles.form}
            onValueChange={(itemValue, itemIndex) => {
              setAmenity(itemValue)

            }}>
            {amenities.map((item, index) => {
              console.log(item, amenityCode[index])
              return <Picker.Item label={item} value={amenityCode[index]} />
            })}
          </Picker>
        </ScrollView>
    </SafeAreaView>
  )
}

export default Search;

const styles = StyleSheet.create({
  form: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: 'whitesmoke'
  },
  container: {},
  text: {},
  scrollViewContainer: {
    flexGrow: 1,
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: "10%",
  },
  dropdown1DropdownStyle: { backgroundColor: "#EFEFEF" },
  dropdown1RowStyle: {
    backgroundColor: "#EFEFEF",
    borderBottomColor: "#C5C5C5",
  },
})