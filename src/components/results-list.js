import * as React from 'react'
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import { ResultsDetail } from './ResultsDetail'
import { withNavigation } from 'react-navigation'

const ResultsList = withNavigation(({ title, results, navigation }) => {
  if (!results?.length) return null

  return (
    <View style={styles.list}>
      <Text style={styles.title}>{title}</Text>
      {/* <Text>{`Found ${results?.length || 0} results`}</Text> */}
      <FlatList
        horizontal
        data={results}
        keyExtractor={results => results.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity onPress={() => navigation.navigate('ResultsShow', { id: item.id})}>
              <ResultsDetail item={item} />
            </TouchableOpacity>
          )
        }}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  )
})

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
