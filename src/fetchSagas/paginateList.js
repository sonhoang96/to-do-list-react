import * as types from '../constant'
export default function callAPI(activePage){
    return new Promise((resovle, reject) => {
        fetch(types.URL + `?_page=${activePage}&_limit=4`, {
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