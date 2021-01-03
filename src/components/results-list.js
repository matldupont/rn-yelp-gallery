import * as React from 'react'
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { ResultDetails } from './result-details'

const ResultsList = ({ title, results }) => {
  const navigation = useNavigation();
  if (!results?.length) return null

  return (
    <View style={styles.list}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        horizontal
        data={results}
        keyExtractor={results => results.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity onPress={() => navigation.navigate('Gallery', { id: item.id})}>
              <ResultDetails item={item} />
            </TouchableOpacity>
          )
        }}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  list: {
    marginBottom: 10
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    marginLeft: 15
  }
})



export { ResultsList }
