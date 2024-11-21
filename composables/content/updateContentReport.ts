import { contentApiFactory } from "@/apiFactory/modules/content";
import { useCustomToast } from '@/composables/core/useCustomToast'
const { showToast } = useCustomToast();


const contentReportPayload = ref({
  status: "",  //PENDING APPROVED REMOVED
  reviewNote: "",
}) as any;

const loading = ref(false);

export const useUpdateContentReportStatus = () => {
  const updateContentReports = async (id: string) => {
    loading.value = true;

    const response = (await contentApiFactory.$_update_content_report_status(id, contentReportPayload.value)) as any;
    if (response.type !== "ERROR") {
        showToast({
            title: "Success",
            message: "Content report status was updated successfully",
            toastType: "success",
            duration: 3000
          });
    } else {
        showToast({
            title: "Error",
            message: "Something went wrong",
            toastType: "error",
            duration: 3000
          });
    }
    loading.value = false;
  };

  const setPayload = (data: any) => {
    contentReportPayload.value.status = data.contentReportPayload
    contentReportPayload.value.reviewNote = data.reviewNote
  }

  return { updateContentReports, loading, setPayload };
};
