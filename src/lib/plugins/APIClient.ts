import { BASE_URL } from "@/config/api";

type T = string | number | object;
export type API_RESPONSE_TYPE =
  | {
      [key: string]: object | Array<T> | string | number;
    }
  | {
      [key: string]: object | Array<T>;
    };

export type REQUEST_BODY_TYPE = {
  [key: string]: string | number | Array<T> | object;
};
// export type bodyRequest
/**
 * FetchAPI Class
 */
export class FetchAPI {
  /**
   *
   * @param url
   * @returns
   */
  async get(url: string) {
    const option: RequestInit = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const response = await fetch(BASE_URL + url, option);
      return await response.json();
    } catch (err) {
      throw err;
    }
  }

  /**
   *
   * @param url
   */
  async post(url: string, body: REQUEST_BODY_TYPE) {
    const option: RequestInit = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    };
    try {
      const response = await fetch(BASE_URL + url, option);
      return await response.json();
    } catch (err) {
      throw err;
    }
  }

  /**
   *
   * @param url
   */
  async patch(url: string, body: REQUEST_BODY_TYPE) {
    const option: RequestInit = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    };
    try {
      const response = await fetch(BASE_URL + url, option);
      return await response.json();
    } catch (err) {
      throw err;
    }
  }

  /**
   *
   * @param url
   */
  async delete(url: string) {
    const option: RequestInit = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const response = await fetch(BASE_URL + url, option);
      return await response.json();
    } catch (err) {
      throw err;
    }
  }
}

export default FetchAPI;
