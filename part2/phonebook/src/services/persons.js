import axios from 'axios'

const baseUrl = 'http://localhost:3000/persons'

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

const create = (newObject) => {
    const request = axios.post(baseUrl, newObject)
    return request.then(response => response.data)
}

const deletePerson = (id, name) => {
    const request = axios.delete(`${baseUrl}/${id}`, {
        data: {
            name: name
        }
    })
    return request.then(response => response.data)
}

export default { getAll, create, deletePerson }