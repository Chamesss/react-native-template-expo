import axios from 'axios'

const verifyToken = async (token) => {
    try {
        const response = await axios.get('http://localhost:8080/user/verify', {
            headers: token
        })
        return response.data
    } catch (error) {
        console.log(error)
    }
}

export { verifyToken }