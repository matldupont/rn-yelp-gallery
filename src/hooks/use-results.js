import * as React from 'react'
import yelp from '../api/yelp'

const useResults = () => {

  const [results, setResults] = React.useState([])
  const [errorMessage, setErrorMessage] = React.useState('')

  const searchApi = async searchTerm => {

    try {
      const { data: { businesses } } = await yelp.get('/search', {
        params: {
          limit: 50,
          term: searchTerm,
          location: 'Ottawa'
        }
      })
      setResults(businesses)
      setErrorMessage('')
    } catch(e) {
      console.log('error!', e.message)
      setErrorMessage('Something went Wrong')
    }
  }

  React.useEffect(() => {
    searchApi('poutine')
  },[])

  return [searchApi, results, errorMessage]
}

export { useResults }