import { fileUploadAxiosInstance  } from "../axios.config";

export const uploadApiFactory = {
	$_upload_file: (data: any) => {
    return fileUploadAxiosInstance.post('https://file-manager.thechub.app', data);
  }
};
