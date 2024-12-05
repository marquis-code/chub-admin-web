import { ref } from 'vue';
import { uploadApiFactory } from '@/apiFactory/core/upload';

export const useUploadFile = () => {
  const loading = ref(false);
  const uploadResponse = ref({} as any);

  const { $_upload_file } = uploadApiFactory

  const encodeFileToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        resolve(reader.result as string);
      };
      reader.onerror = (error) => reject(error);
      reader.readAsDataURL(file);
    });
  };

  const uploadFile = async (file: File, newDimensions: string) => {
    loading.value = true;
    try {
      // Encode the file content to Base64
      const base64Content = await encodeFileToBase64(file);
      
      // Construct the payload with the required structure
      const payload = {
        fileType: file.type.split('/')[0], // Extract file type (image, document, video)
        fileName: file.name,
        newDimensions,
        fileContent: base64Content.split(',')[1]  // Strip out the 'data:image/jpeg;base64,' part
      };
       console.log(payload, 'paylaod here')
      // Make the API call with the structured payload
      const res = await $_upload_file(payload) as any;
       console.log(res, 'res heee')
      if (res.type !== 'ERROR') {
        uploadResponse.value = res.data.data ?? {};
      }
    } catch (error) {
      console.error('Error uploading file:', error);
    } finally {
      loading.value = false;
    }
  };

  return { uploadFile, loading, uploadResponse };
};
