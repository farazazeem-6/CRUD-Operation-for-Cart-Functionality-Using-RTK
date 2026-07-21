import axios from 'axios';
import { API_ENDPOINTS } from '../../config/api';

export function fetchItems() {
  return axios.get(API_ENDPOINTS.CART);
}

export function addItems(item) {
  return axios.post(API_ENDPOINTS.CART, item);
}

export function deleteItems(id) {
  return axios.delete(`${API_ENDPOINTS.CART}/${id}`);
}