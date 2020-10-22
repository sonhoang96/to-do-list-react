import * as types from "../constant"
export default function loginAPI(data){
    return new Promise((resolve, reject) => {
        fetch(types.URL + `login`,{
            method: "POST",
            headers: {"Content-Type" : "application/json"},
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