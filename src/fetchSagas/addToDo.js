import * as types from '../constant'
export default function callAPI(data){
    return new Promise((resolve, reject) => {
        fetch(types.URL, {
            method: "POST",
            headers: {"Content-type": "application/json"},
            body: JSON.stringify(data)
        })
        .then((response) => response.json())
        .then((res) => {
            resolve(res)
        })
        .catch((error) => {
            reject(error)
        })
    })
}