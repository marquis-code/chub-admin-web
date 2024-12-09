import { axiosInstance } from "../axios.config";

export const userApiFactory = {
  $_get_users() {
    const url = `/admin/users`;
    return axiosInstance.get(url);
  },
  $_get_users_stats() {
    const url = `/admin/users/stats`;
    return axiosInstance.get(url);
  },
  $_update_user_profile(id: string, payload: any) {
    const url = `/admin/users/update-profile/${id}`;
    return axiosInstance.patch(url, payload);
  },
  $_fetch_user_profile(id: string) {
    const url = `/admin/users/${id}/profile`;
    return axiosInstance.get(url);
  },
  $_fetch_user_activity_logs(id: string) {
    const url = `/admin/users/${id}/activity-logs`;
    return axiosInstance.get(url);
  },
  $_fetch_user_challenges(id: string) {
    const url = `/admin/users/${id}/challenges`;
    return axiosInstance.get(url);
  },
  $_fetch_user_tasks(id: string) {
    const url = `/admin/users/${id}/tasks`;
    return axiosInstance.get(url);
  }
};
