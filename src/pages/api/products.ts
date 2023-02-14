import { ProductModel } from "@/types/productTypes";
import axios from "axios";

export class ProductsApi {
private url = 'http://localhost:3333/products/';

async getProducts(): Promise<ProductModel[]> {
    // make the api call
    return await axios.get<ProductModel[]>(`${this.url}all`, {headers: {"Access-Control-Allow-Origin": "*"}})
    .then(response => response.data)
    .catch(error => {
        console.log(error);
        return [];
    });
  }
}

// Singleton instance of the API for convenience
export const api = new ProductsApi();