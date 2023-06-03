import { BASE_URL } from "@/config/api";
import { API_RESPONSE_TYPE, REQUEST_BODY_TYPE } from "@/lib/plugins/APIClient";

type T = string | number | object;

/**
 * Abstract Class of Service will implements on any service as minimum requirement
 */
abstract class baseService {
  abstract index(url: string, id?: number): Promise<Response>;
  abstract save(url: string, body: REQUEST_BODY_TYPE, id?: number): Promise<Response>;
  abstract edit(url: string, body: REQUEST_BODY_TYPE): Promise<Response>;
  abstract destroy(url: string, id?: number): Promise<Response>;
}

export default baseService;
