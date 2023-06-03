import baseService from ".";
import FetchAPI, { API_RESPONSE_TYPE, REQUEST_BODY_TYPE } from "@/lib/plugins/APIClient";

class ProductService implements baseService {
  private API = new FetchAPI();

  /**
   *
   * @param url
   * @param body
   * @returns
   */
  async index(url: string, id?: number) {
    try {
      return await this.API.get(url + id ? "/" + id : "");
    } catch (err) {
      throw err;
    }
  }
  /**
   *
   * @param url
   * @param body
   * @returns
   */
  async save(url: string, body: REQUEST_BODY_TYPE) {
    try {
      return await this.API.post(url, body);
    } catch (err) {
      throw err;
    }
  }
  /**
   *
   * @param url
   * @param body
   * @returns
   */
  async edit(url: string, body: REQUEST_BODY_TYPE, id?: number) {
    try {
      return await this.API.patch(url + id ? "/" + id : "", body);
    } catch (err) {
      throw err;
    }
  }
  /**
   *
   * @param url
   * @param body
   * @returns
   */
  async destroy(url: string, id?: number) {
    try {
      return await this.API.get(url + id ? "/" + id : "");
    } catch (err) {
      throw err;
    }
  }
}

const Product = new ProductService();

export default Product;
