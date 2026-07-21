import axios from 'axios';
import { API_ENDPOINTS } from '../../config/api';

export function fetchProducts() {
  return axios.get(API_ENDPOINTS.PRODUCTS);
}