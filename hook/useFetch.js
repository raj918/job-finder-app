import { View, Text } from 'react-native'
import { useEffect, useState,} from 'react'
import axios from 'axios'



const useFetch = (endpoint, query) => {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  const options = {
    method: 'GET',
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    headers: {
      'x-rapidapi-key': '759eae42f5mshdbc39e2fad0b05ep1a949cjsn47d11103fe43',
      'x-rapidapi-host': 'jsearch.p.rapidapi.com'
    },
    params: {...query}
    
  };

  const fetchData = async () => {
    setIsLoading(true);

    try {
     const response = await axios.request(options);
     setData(response.data.data);
     setIsLoading(false);
    
    } catch (error) {
      setError(error)
      alert('there is an error')

    } finally {
      setIsLoading(false)
    }

  }
  
  useEffect(() => {
    fetchData();
  
  
  }, []);

  const refetch = () => {
    setIsLoading(true);
    fetchData();
  }

  return {
    data,
    isLoading,
    error,
    refetch
  }

}

export default useFetch