import * as React from 'react'
import { View, Image, Text, StyleSheet } from 'react-native'

const ResultsDetail = ({ item: { image_url, name, review_count, rating } }) => {
  return (
    <View style={styles.container}>
      {image_url ? <Image style={styles.image} source={{ uri: image_url }} /> : null}
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.reviews}>{`${rating} Stars, ${review_count} Reviews`}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 5,
    marginLeft: 15
  },
  image: {
    height: 120,
    width: 250,
    borderRadius: 4,
    marginBottom: 5
  },
  name: {
    fontWeight: 'bold'
  },
  reviews: {
    color: '#888'
  }
})

export { ResultsDetail }
