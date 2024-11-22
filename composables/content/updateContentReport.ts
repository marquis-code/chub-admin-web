// import { contentApiFactory } from "@/apiFactory/modules/content";
// import { useCustomToast } from '@/composables/core/useCustomToast'
// const { showToast } = useCustomToast();


// const contentReportPayload = ref({
//   status: "",  //PENDING APPROVED REMOVED
//   reviewNote: "",
// }) as any;

// const loading = ref(false);

// export const useUpdateContentReportStatus = () => {
//   const updateContentReports = async (id: string) => {
//     loading.value = true;

//     const response = (await contentApiFactory.$_update_content_report_status(id, contentReportPayload.value)) as any;
//     if (response.type !== "ERROR") {
//         showToast({
//             title: "Success",
//             message: "Content report status was updated successfully",
//             toastType: "success",
//             duration: 3000
//           });
//           window.location.reload()
//     } else {
//         showToast({
//             title: "Error",
//             message: "Something went wrong",
//             toastType: "error",
//             duration: 3000
//           });
//     }
//     loading.value = false;
//   };

//   const setPayload = (data: any) => {
//     contentReportPayload.value.status = data.contentReportPayload
//     contentReportPayload.value.reviewNote = data.reviewNote
//   }

//   return { updateContentReports, loading, setPayload };
// };


import { contentApiFactory } from "@/apiFactory/modules/content";
import { useCustomToast } from '@/composables/core/useCustomToast';

const { showToast } = useCustomToast();

const contentReportPayload = ref({
  status: "",  // PENDING, APPROVED, REMOVED
  reviewNote: "",
}) as any;

// Track loaders per report by ID
const loadingReports = ref<Record<string, boolean>>({});

export const useUpdateContentReportStatus = () => {
  const updateContentReports = async (id: string) => {
    // Set loader for this specific report ID
    loadingReports.value[id] = true;

    try {
      const response = (await contentApiFactory.$_update_content_report_status(id, contentReportPayload.value)) as any;

      if (response.type !== "ERROR") {
        showToast({
          title: "Success",
          message: "Content report status was updated successfully",
          toastType: "success",
          duration: 3000,
        });
        // Optionally, reload the page or handle the UI state here
        // window.location.reload();
      } else {
        showToast({
          title: "Error",
          message: "Something went wrong",
          toastType: "error",
          duration: 3000,
        });
      }
    } catch (error) {
      console.error("Error updating content report status:", error);
      showToast({
        title: "Error",
        message: "An unexpected error occurred",
        toastType: "error",
        duration: 3000,
      });
    } finally {
      // Clear loader for this specific report ID
      loadingReports.value[id] = false;
    }
  };

  const setPayload = (data: any) => {
    contentReportPayload.value.status = data.contentReportPayload;
    contentReportPayload.value.reviewNote = data.reviewNote;
  };

  // Helper to check if a report is loading
  const isReportLoading = (id: string) => !!loadingReports.value[id];

  return { updateContentReports, setPayload, isReportLoading };
};
