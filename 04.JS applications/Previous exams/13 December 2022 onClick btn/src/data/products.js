import { del, get, post, put } from './api.js';

export async function getAllProducts() {
  return await get('/data/products?sortBy=_createdOn%20desc');
}

export async function createProduct(dataObj) {
  await post('/data/products', dataObj);
}

export async function getProductById(productId) {
  return await get('/data/products/' + productId);
}

export async function deleteProductById(productId) {
  await del('/data/products/' + productId);
}

export async function editProductById(productId, dataObj) {
  await put('/data/products/' + productId, dataObj);
}
