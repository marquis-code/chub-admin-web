import { axiosInstance } from "../axios.config";

export const contentApiFactory = {
  $_get_content_reports(filters?: any) {
    let endpoint = `/admin/content/reports`;
    if (filters.status) {
        endpoint += `?status=${encodeURIComponent(filters.status)}`;
    }

    if (filters.contentType) {
      endpoint += `?contentType=${encodeURIComponent(filters.contentType)}`;
  }

  if (filters.reason) {
    endpoint += `?reason=${encodeURIComponent(filters.reason)}`;
}
    return axiosInstance.get(endpoint);
},
  $_update_content_report_status(id: string | number, payload: any) {
    let endpoint = `/admin/content/reports/${id}`;
    return axiosInstance.patch(endpoint, payload);
  }
}

