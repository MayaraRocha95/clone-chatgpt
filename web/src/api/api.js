import axios from 'axios';
const URL_API = 'http://localhost:5000/api/prompt'

export const makeRequest = async (message) => {
  console.log(message)
  try {
    const response = await axios.post(URL_API, message)
    const data = JSON.parse(response.data)
    return data
  } catch (error) {
    console.error('Error parsing JSON:', error)
  }
}