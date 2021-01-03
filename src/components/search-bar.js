import * as React from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'
import { Feather } from '@expo/vector-icons'; 

const SearchBar = ({ term, onTermChange, onTermSubmit}) => {
  return (
    <View style={styles.backgroundStyle}>
      <Feather name="search" style={styles.iconStyle} color="black" />
      <TextInput 
        autoCapitalize="none" 
        autoCorrect={false} 
        value={term} 
        onChangeText={onTermChange} 
        onEndEditing={onTermSubmit}
        style={styles.inputStyle} 
        placeholder="Search"
      />
    </View>
  )
}

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: '#F0EEEE',
    height: 50,
    borderRadius: 5,
    flexDirection: 'row',
    marginVertical: 10,
    marginHorizontal: 15
  },
  iconStyle: {
    fontSize: 35,
    marginHorizontal: 15,
    alignSelf: 'center'
  },
  inputStyle: {
    fontSize: 18,
    flex: 1
  }
})

export { SearchBar}