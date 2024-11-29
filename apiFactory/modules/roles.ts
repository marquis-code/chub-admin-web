import { axiosInstance } from "../axios.config";

export const rolesApiFactory = {
  $_get_roles() {
    let endpoint = `/admin/roles`;
    return axiosInstance.get(endpoint);
  },
  $_create_role(payload: any) {
    let endpoint = `/admin/roles`;
    return axiosInstance.post(endpoint, payload);
  },
  $_update_role(id: string, payload: any) {
    let endpoint = `/admin/roles/${id}`;
    return axiosInstance.put(endpoint, payload);
  },

}

