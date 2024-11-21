import { axiosInstance } from "../axios.config";

export const contentApiFactory = {
  $_get_content_reports(status?: string) {
    let endpoint = `/admin/content/reports`;
    if (status) {
        endpoint += `?status=${encodeURIComponent(status)}`;
    }
    return axiosInstance.get(endpoint);
},
  $_update_content_report_status(id: string | number, payload: any) {
    let endpoint = `/admin/content/reports/${id}`;
    return axiosInstance.patch(endpoint, payload);
  }
}

