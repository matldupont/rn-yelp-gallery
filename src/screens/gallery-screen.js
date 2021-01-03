import * as React from 'react'
import { View, Text, Image, StyleSheet, FlatList } from 'react-native'
import yelp from '../api/yelp'

const ResultsShowScreen = ({ navigation }) => {
  const [result, setResult] = React.useState()
  const id = navigation.getParam('id')

  const getResult = async id => {
    const {data } = await yelp.get(id)
    setResult(data)
  }

  React.useEffect(() => {
    getResult(id)
  }, [])

  if (!result)
    return null

    console.log(result)
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{result.name}</Text>
      <FlatList 
        data={result.photos}
        keyExtractor={(photo) => photo}
        renderItem={({item}) => <Image source={{uri: item}} style={styles.image} />}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  name: {
    alignSelf: 'flex-start',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10
  },  
  container: {
    padding: 20,
    alignItems: 'flex-start'
  },
  image: {
    height: 200,
    width: 300,
    marginBottom: 10,
    borderRadius: 4
  }
})

export { ResultsShowScreen }
