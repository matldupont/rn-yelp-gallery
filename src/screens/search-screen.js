import * as React from 'react'
import axios from 'axios'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import { SearchBar } from '../components/search-bar'
import { ResultsList } from '../components/results-list'
import yelp from '../api/yelp'
import { useResults } from '../hooks/use-results'

const SearchScreen = () => {
  const [term, setTerm] = React.useState('')
  const [searchApi, results, errorMessage] = useResults()

  const groupedResults = results.reduce((group, current) => {
    const currentGroup = group[current.price] || []
    return {
      ...group,
      [current.price]: [...currentGroup, current]
    }
  }, {})

  

  return (
    <View style={styles.viewStyles}>
      <SearchBar
        term={term} 
        onTermChange={setTerm} 
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage.length > 0 ?  <Text>{errorMessage}</Text> : null}
      
      <ScrollView>
        <ResultsList results={groupedResults['$']} title="Cost Effective" />
        {/* <ResultsList results={groupedResults['$$']} title="Bit Pricier"/> */}
        {/* <ResultsList results={groupedResults['$$$']} title="Big Spender" /> */}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  viewStyles: {
    backgroundColor: 'white',
    height: '100%',
    flex: 1,
  }
})

export { SearchScreen }