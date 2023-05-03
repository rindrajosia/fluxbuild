import axios from 'axios'

const getAll = async (name: string) => {
  return await axios.get( `http://universities.hipolabs.com/search?name=${name}`)
}

export default { getAll }
