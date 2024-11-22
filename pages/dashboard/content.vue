<template>
  <CoreOverviewHeader  />
  <div class="min-h-screen mt-6">
    <!-- Main Grid -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <!-- Left Column: Content Header and Reports -->
      <div class="md:col-span-2 space-y-6">
        <!-- Content Header -->
        <div class="bg-white rounded-lg shadow p-6">
          <h1 class="text-4xl font-medium text-[#161721] max-w-xs">Manage user content</h1>
          <p class="text-[#777980] mt-2 max-w-xs">
            Create and manage admins, content admins and challenge admins
          </p>
        </div>

        <!-- Reports Table -->
        <div class="bg-white rounded-lg shadow">
          <!-- Table Header -->
          <div class="flex items-center justify-between px-4 pt-4">
            <div class="flex items-center gap-2">
              <h2 class="text-lg font-medium text-[#1D1F2C]">Reports</h2>
              <span class="text-sm font-medium text-[#1A9882] bg-[#E9FAF7] px-3 py-1 rounded-md">
                {{ contentReports?.length }} report{{ contentReports.length > 1 ? 's' : '' }}
              </span>
            </div>

            <!-- Search and Filters -->
            <div class="flex items-center gap-2">
              <div class="relative">
                <input type="text" placeholder="Search for a challenge"
                  class="border-[#E0E2E7]  border-[0.5px] pl-10 rounded-lg py-2 text-sm w-480" />
                <span class="absolute inset-y-0 left-2 flex items-center text-gray-400">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_6637_6237)">
                      <path
                        d="M17.8045 16.8619L13.8252 12.8825C14.9096 11.5563 15.4428 9.86392 15.3144 8.15556C15.1861 6.44721 14.406 4.85354 13.1356 3.7042C11.8652 2.55486 10.2016 1.93778 8.48895 1.9806C6.77632 2.02343 5.14566 2.72287 3.93426 3.93426C2.72287 5.14566 2.02343 6.77632 1.9806 8.48895C1.93778 10.2016 2.55486 11.8652 3.7042 13.1356C4.85354 14.406 6.44721 15.1861 8.15556 15.3144C9.86392 15.4428 11.5563 14.9096 12.8825 13.8252L16.8619 17.8045C16.9876 17.926 17.156 17.9932 17.3308 17.9916C17.5056 17.9901 17.6728 17.92 17.7964 17.7964C17.92 17.6728 17.9901 17.5056 17.9916 17.3308C17.9932 17.156 17.926 16.9876 17.8045 16.8619ZM8.66652 13.9999C7.61169 13.9999 6.58054 13.6871 5.70348 13.101C4.82642 12.515 4.14283 11.682 3.73916 10.7075C3.3355 9.73296 3.22988 8.6606 3.43567 7.62604C3.64145 6.59147 4.14941 5.64117 4.89529 4.89529C5.64117 4.14941 6.59147 3.64145 7.62604 3.43567C8.6606 3.22988 9.73296 3.3355 10.7075 3.73916C11.682 4.14283 12.515 4.82642 13.101 5.70348C13.6871 6.58054 13.9999 7.61169 13.9999 8.66652C13.9983 10.0805 13.4359 11.4362 12.436 12.436C11.4362 13.4359 10.0805 13.9983 8.66652 13.9999Z"
                        fill="#858D9D" />
                    </g>
                    <defs>
                      <clipPath id="clip0_6637_6237">
                        <rect width="16" height="16" fill="white" transform="translate(2 2)" />
                      </clipPath>
                    </defs>
                  </svg>

                </span>
              </div>
              <input
                class="flex items-center gap-2 border-[0.5px] outline-none rounded-lg px-4 py-2 text-sm text-gray-500"
                type="date" />
              <button
                class="flex items-center gap-2 border-[0.5px] border-gray-100 rounded-lg px-4 py-2 text-sm text-gray-500">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_6637_6246)">
                    <path
                      d="M2.66757 5.16715H4.49138C4.85135 6.49158 6.21681 7.27344 7.54124 6.91348C8.39187 6.68228 9.05637 6.01779 9.28756 5.16715H17.3328C17.7009 5.16715 17.9994 4.86871 17.9994 4.50056C17.9994 4.13241 17.7009 3.83397 17.3328 3.83397H9.28756C8.9276 2.50951 7.56214 1.72765 6.23771 2.08762C5.38708 2.31881 4.72258 2.98331 4.49138 3.83394H2.66757C2.29942 3.83394 2.00098 4.13238 2.00098 4.50053C2.00098 4.86868 2.29942 5.16715 2.66757 5.16715Z"
                      fill="#858D9D" />
                    <path
                      d="M17.3328 9.3346H15.5089C15.1497 8.01036 13.785 7.22806 12.4607 7.58727C11.6094 7.81822 10.9444 8.48325 10.7134 9.3346H2.66757C2.29942 9.3346 2.00098 9.63304 2.00098 10.0012C2.00098 10.3693 2.29942 10.6678 2.66757 10.6678H10.7134C11.0727 11.992 12.4374 12.7743 13.7616 12.4151C14.6129 12.1842 15.278 11.5191 15.5089 10.6678H17.3328C17.7009 10.6678 17.9994 10.3693 17.9994 10.0012C17.9994 9.63304 17.7009 9.3346 17.3328 9.3346Z"
                      fill="#858D9D" />
                    <path
                      d="M17.3328 14.832H9.28756C8.9276 13.5076 7.56214 12.7257 6.23771 13.0857C5.38708 13.3169 4.72258 13.9814 4.49138 14.832H2.66757C2.29942 14.832 2.00098 15.1304 2.00098 15.4986C2.00098 15.8667 2.29942 16.1652 2.66757 16.1652H4.49138C4.85135 17.4896 6.21681 18.2714 7.54124 17.9115C8.39187 17.6803 9.05637 17.0158 9.28756 16.1652H17.3328C17.7009 16.1652 17.9994 15.8667 17.9994 15.4986C17.9994 15.1304 17.7009 14.832 17.3328 14.832Z"
                      fill="#858D9D" />
                  </g>
                  <defs>
                    <clipPath id="clip0_6637_6246">
                      <rect width="16" height="16" fill="white" transform="translate(2 2)" />
                    </clipPath>
                  </defs>
                </svg>

                Filters
              </button>
            </div>
          </div>

          <!-- Reports Table Content -->
          <div class="overflow-x-auto mt-6">
            <table v-if="!loading && contentReports.length" class="min-w-full text-sm text-left">
              <thead>
                <tr class="border-b bg-[#F0F1F3]">
                  <th class="py-4 px-4 text-xs font-medium">Content</th>
                  <th class="py-4 px-4 text-xs font-medium">Reported by</th>
                  <th class="py-4 px-4 text-xs font-medium">Created by</th>
                  <th class="py-4 px-4 text-xs font-medium">Date</th>
                  <th class="py-4 px-4 text-xs font-medium">Reason</th>
                  <th class="py-4 px-4 text-xs font-medium">Time</th>
                  <th class="py-4 px-4 text-xs font-medium">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(report, index) in contentReports" :key="index"
                  class="border-b-[0.5px] border-gray-100 last:border-b-0">
                  <td class="py-4 text-xs text-[#667085] px-3">{{ report?.content?.body?.message || 'Nil' }}</td>
                  <td class="py-4 text-xs text-[#1D1F2C] px-3 text-[#883DCF] font-medium">{{
                    report?.reportedBy?.firstName }} {{ report?.reportedBy?.lastName }}</td>
                  <td class="py-4 text-xs text-[#667085] px-3">{{ report?.contentBy || 'Nil' }}</td>
                  <td class="py-4 text-xs text-[#667085] px-3">{{ moment.utc(report.createdAt).format('DD MMM YYYY') ||
                    'Nil' }}</td>
                  <td class="py-4 text-xs text-[#667085] px-3">{{ report?.reportReason || 'Nil' }}</td>
                  <td class="py-4 text-xs text-[#667085] px-3">{{ moment.utc(report.createdAt).format('HH:mm') || 'Nil'
                    }}</td>
                  <td class="py-4 text-xs text-[#667085] px-3">
                    <div v-if="report.status === 'PENDING'" class="flex items-center gap-2">
                      <button @click="handleUpdate(report, 'REMOVED')"
                        class="text-red-600 flex justify-center items-center flex-col text-xs gap-y-1">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect x="0.5" y="0.5" width="23" height="23" rx="11.5" stroke="#EB3D4D" />
                          <path d="M8 8L16 16" stroke="#EB3D4D" stroke-width="1.5" stroke-linecap="round" />
                          <path d="M8 16L16 8" stroke="#EB3D4D" stroke-width="1.5" stroke-linecap="round" />
                        </svg>

                        Remove</button>
                      <button @click="handleUpdate(report, 'APPROVED')"
                        class="text-green-600 flex justify-center items-center flex-col text-xs gap-y-1">
                        <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect x="1" y="0.5" width="23" height="23" rx="11.5" stroke="#1A9882" />
                          <path d="M5.5 11.5043L10.3 16.2L18.5 8" stroke="#1A9882" stroke-width="1.5"
                            stroke-linecap="round" />
                        </svg>

                        Approve</button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
            <!-- <div
          v-if="loading && !contentReports.length"
          class="h-44 w-full bg-slate-300 animate-pulse rounded"
        ></div>
        <div v-else class="flex-1 bg-white shadow-md rounded-lg m-4 border w- border-gray-50">
          <div class="border py-20 rounded-lg flex justify-center items-center text-gray-600">No Content Report available</div>
        </div> -->
          </div>
        </div>

      </div>

      <!-- Right Column: Featured Content -->
      <div class="bg-white rounded-lg shadow p-6">
        <div class="flex justify-between items-center">
          <h2 class="text-lg font-semibold text-[#1D1F2C]">Featured Content</h2>
          <button @click="showFeatureContentModal = true"
            class="bg-[#690571] text-white text-xs font-medium px-4 py-3 rounded-lg">
            Feature content
          </button>
        </div>

        <!-- Featured Items -->
        <div class="mt-6 space-y-4">
          <div v-for="(item, index) in featuredContent" :key="index"
            class="flex items-center justify-between border-b pb-4 last:border-none">
            <!-- Icon and Details -->
            <div class="flex items-center gap-4">
              <!-- Icon -->
              <div class="h-12 w-12 flex items-center justify-center">
                <img src="@/assets/img/attachment.svg" alt="Icon" class="h-10 w-10" />
              </div>
              <!-- Text Details -->
              <div>
                <h3 class="font-medium text-gray-900 text-xs">{{ item.title }}</h3>
                <p class="text-xs text-gray-500">
                  Target group: <span class="text-purple-600 font-medium">{{ item.targetGroup }}</span>
                </p>
              </div>
            </div>

            <!-- End Date and Actions -->
            <div class="flex items-center gap-4">
              <div class="text-right">
                <p class="text-xs text-gray-500">End date</p>
                <p class="font-medium text-xs text-gray-900">{{ item.endDate }}</p>
              </div>
              <!-- Icons -->
              <div class="flex items-center gap-2">
                <button>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M2.42012 12.7132C2.28394 12.4975 2.21584 12.3897 2.17772 12.2234C2.14909 12.0985 2.14909 11.9015 2.17772 11.7766C2.21584 11.6103 2.28394 11.5025 2.42012 11.2868C3.54553 9.50484 6.8954 5 12.0004 5C17.1054 5 20.4553 9.50484 21.5807 11.2868C21.7169 11.5025 21.785 11.6103 21.8231 11.7766C21.8517 11.9015 21.8517 12.0985 21.8231 12.2234C21.785 12.3897 21.7169 12.4975 21.5807 12.7132C20.4553 14.4952 17.1054 19 12.0004 19C6.8954 19 3.54553 14.4952 2.42012 12.7132Z"
                      stroke="#858D9D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path
                      d="M12.0004 15C13.6573 15 15.0004 13.6569 15.0004 12C15.0004 10.3431 13.6573 9 12.0004 9C10.3435 9 9.0004 10.3431 9.0004 12C9.0004 13.6569 10.3435 15 12.0004 15Z"
                      stroke="#858D9D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>

                </button>
                <button>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M12 20.0002H21M3 20.0002H4.67454C5.16372 20.0002 5.40832 20.0002 5.63849 19.945C5.84256 19.896 6.03765 19.8152 6.2166 19.7055C6.41843 19.5818 6.59138 19.4089 6.93729 19.063L19.5 6.50023C20.3285 5.6718 20.3285 4.32865 19.5 3.50023C18.6716 2.6718 17.3285 2.6718 16.5 3.50023L3.93726 16.063C3.59136 16.4089 3.4184 16.5818 3.29472 16.7837C3.18506 16.9626 3.10425 17.1577 3.05526 17.3618C3 17.5919 3 17.8365 3 18.3257V20.0002Z"
                      stroke="#858D9D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>

                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-if="showFeatureContentModal" class="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
    <ContentManagementModal @close="showFeatureContentModal = false" />
  </div>
</template>



<script lang="ts" setup>
import moment from 'moment';
import { useUpdateContentReportStatus } from '@/composables/content/updateContentReport'
import { useGetContentReports } from '@/composables/content/getContentReport'
const { loading, contentReports, filteredContentReports, searchQuery, selectedStatus } = useGetContentReports()
const { updateContentReports, loading: updatating, setPayload } = useUpdateContentReportStatus()
definePageMeta({
  layout: "dashboard",
  // middleware: 'auth'
});

const showFeatureContentModal = ref(false);

const handleUpdate = async (report: any, status: string) => {
  const payload = {
    status: status,
    reviewNote: ''
  }
  setPayload(payload)
  await updateContentReports(report.id)
}

const featuredContent = [
  {
    title: "Create 15 comics",
    targetGroup: "John something",
    endDate: "12 Sept 2024",
  },
  {
    title: "Create 15 comics",
    targetGroup: "John something",
    endDate: "12 Sept 2024",
  },
  {
    title: "Create 15 comics",
    targetGroup: "John something",
    endDate: "12 Sept 2024",
  },
];
</script>
