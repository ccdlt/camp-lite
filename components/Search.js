import React, { useState, useEffect } from 'react';
import { Picker } from '@react-native-picker/picker';
import CampSite from './CampSite';
import SelectDropdown from 'react-native-select-dropdown';
import { View, Text, StyleSheet, SafeAreaView, TextInput, ScrollView, Button } from 'react-native';
import axios from 'axios';

const Search = () => {
  const [state, setState] = useState('');
  const [amenity, setAmenity] = useState('');
  const [visible, setVisible] = useState(false);
  const [camps, setCamps] = useState([]);

  const states = ['Select State','Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Lousiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];

  const stateCode = [null, 'AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY'];

  const amenities = ['Select Amenity', 'Biking', 'Boating', 'Equipment Rental', 'Fishing', 'Golf', 'Hiking', 'Horseback Riding', 'Hunting', 'Recreational Activities', 'Scenic Trails', 'Sports', 'Beach/Water Activities', 'Winter Activities'];

  const amenityCode = [null, 4001, 4002, 4003, 4004, 4005, 4006, 4007, 4008, 4009, 4010, 4011, 4012, 4013];

  const handleOnPress = () => {
    const dataArray = [];
    const data = {state: state, amenity: amenity};

    axios.post(`http://10.0.0.18:3000/camping/campgrounds/`, {
      data: data,
    })
    .then(({ data }) => {
      console.log('IVE ARRIVED', data.resultset);
      if (data.resultset.result) {
        setCamps(data.resultset.result);
      } else {
        dataArray.push(data.resultset);
        setCamps(dataArray);
      }
    })
    .catch((err) => console.log('axios error', err))
    setVisible(!visible);
  }

  return(
    <SafeAreaView >
        <ScrollView
          showsVerticalScrollIndicator={false}
          alwaysBounceVertical={false}
          contentContainerStyle={styles.scrollViewContainer}>
              {!visible ?
            <View style={styles.container}>
              <Picker
                required
                selectedValue={state}
                style={styles.form}
                itemStyle={styles.item}
                onValueChange={(itemValue, itemIndex) => {
                  setState(itemValue)

                }}>
                {states.map((item, index) => {
                  return <Picker.Item label={item} value={stateCode[index]} key={stateCode[index]}/>
                })}
              </Picker>
              <Picker
                selectedValue={amenity}
                style={styles.form}
                itemStyle={styles.item}
                onValueChange={(itemValue, itemIndex) => {
                  setAmenity(itemValue)

                }}>
                {amenities.map((item, index) => {
                  return <Picker.Item label={item} value={amenityCode[index]} key={amenityCode[index]}/>
                })}
              </Picker>
              <View style={styles.button}>
                <Button
                  title="Search"
                  onPress={handleOnPress}
                  disabled={state ? false : true}/>
              </View>
            </View> : camps.map((camp, index) => {
              return <CampSite props={camp} key={index} />
            })}
        </ScrollView>
    </SafeAreaView>
  )
}

export default Search;

const styles = StyleSheet.create({
  form: {
    flex: 1,
    width: 200,
    height: 80,
    marginTop: '10%',
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: 'whitesmoke'
  },
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  item: {
    bottom: '90%',
    overflow: 'hidden',
  },
  scrollViewContainer: {
    flexGrow: 1,
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: "10%",
  },
  button: {
    marginTop: '10%',
    borderWidth: 2,
    borderRadius: 5,
    backgroundColor: 'whitesmoke',
    color: 'white',

  }
})