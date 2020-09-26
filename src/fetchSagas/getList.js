import * as types from '../constant'
export default function callAPI(){
    return new Promise((resovle, reject) => {
        fetch(types.URL, {
            method: "GET"
        })
        .then((respone) => respone.json())
        .then((res) => {
            resovle(res)
        })
        .catch((error) => {
            reject(error)
        })
    })
}