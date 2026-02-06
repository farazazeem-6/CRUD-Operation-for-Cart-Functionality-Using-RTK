import axios from 'axios'

export function fetchItems() {
    return axios.get('http://localhost:3000/cart')
}
export function addItems(item) {
    return axios.post('http://localhost:3000/cart', item)
}
// export function updateItems(id, updateItem) {
//     return axios.patch(`http://localhost:3000/cart/${id}`, updateItem)
// }
export function deleteItems(id) {
    return axios.delete(`http://localhost:3000/cart/${id}`)
}