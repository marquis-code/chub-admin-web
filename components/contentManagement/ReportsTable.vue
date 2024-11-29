<template>
   <main>
    <div class="flex-1 bg-white -md rounded-lg m-4 border border-gray-50">
        <div :class="[showSideContent ? 'flex flex-col' : 'flex']" class="border-b px-4 gap-x-4 pt-4">
         <div class="flex items-center gap-x-3 mb-4 w-full">
           <h1 class="text-lg font-medium text-[#1D1F2C]">Reports</h1>
           <p class="bg-[#E9FAF7] text-[#1A9882] rounded-lg px-6 py-3 text-sm">+2 reports</p>
         </div>
         <div class="lg:flex flex-wrap space-y-3 lg:space-x-4 w-full mb-4">
           <div class="relative w-full">
             <img src="@/assets/icons/search.svg" alt="date-picker" class="absolute left-3 top-3" />
             <input type="text" v-model="searchQuery" placeholder="Search for a challenge" class="px-4 w-full outline-none py-3 pl-10 text-sm border rounded-md flex-grow" />
            </div>
            <div>
             <button class="px-6 py-2.5 text-gray-500 border rounded-md text-xs flex items-center gap-x-3">
               <img src="@/assets/icons/date-picker.svg" alt="date-picker" />
               <input type="date" />
              </button>
            </div>
          <div>
          <!-- <div class="w-full"> -->
            <!-- <button class="px-10 py-2.5 text-gray-500 border rounded-md text-xs w-full flex items-center gap-x-3">
             <img src="@/assets/icons/filter.svg" alt="date-picker" />
             Filters</button> -->
             <select class="" v-model="selectedStatus">
              <option value="PENDING">Pending</option>
              <option value="APPROVED">Approved</option>
              <option value="REMOVED">Removed</option>
             </select>
          </div>
          </div>
        </div>
             <div class="flow-root px-4">
               <div  v-if="!loading && contentReports.length"  class="-mx-4 -my-2 overflow-x-auto">
                 <div class="inline-block min-w-full py-2 align-middle">
                   <div class="overflow-hidden">
                     <table class="min-w-full divide-y divide-gray-100">
                       <thead class="bg-[#F9F9FC]">
                         <tr>
                           <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-[#1D1F2C] sm:pl-6">Content</th>
                           <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-[#1D1F2C]">Reported by</th>
                           <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-[#1D1F2C]">Created by</th>
                           <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-[#1D1F2C]">Date</th>
                           <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-[#1D1F2C]">Time</th>
                           <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-[#1D1F2C]">Status</th>
                         </tr>
                       </thead>
                       <tbody class="divide-y divide-gray-200 bg-white">
                         <tr  v-for="report in contentReports" :key="report">
                           <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                             <div class="flex">
                               <div><img src="@/assets/img/reportIcon.png" class="h-10 w-10" alt="" /></div>
                              <div> 
                               <p class="text-[#1D1F2C] text-sm font-semibold">Image</p>
                               <p class="text-[#667085] text-xs">Challenge name</p>
                             </div>
                             </div>
                           </td>
                           <td class="whitespace-nowrap px-3 py-4 text-sm text-[#883DCF]">Johnathan Daniel</td>
                           <td class="whitespace-nowrap px-3 py-4 text-sm text-[#667085]">John doe</td>
                           <td class="whitespace-nowrap px-3 py-4 text-sm text-[#667085]">23 Sept 2024</td>
                           <td class="whitespace-nowrap px-3 py-4 text-sm text-[#667085]">12:00</td>
                           <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                             <div class="flex gap-x-3">
                               <button @click="handleUpdate(report, 'REMOVED')" class="flex flex-col items-center">
                                 <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                   <rect x="1" y="0.5" width="23" height="23" rx="11.5" stroke="#EB3D4D"/>
                                   <path d="M8.5 8L16.5 16" stroke="#EB3D4D" stroke-width="1.5" stroke-linecap="round"/>
                                   <path d="M8.5 16L16.5 8" stroke="#EB3D4D" stroke-width="1.5" stroke-linecap="round"/>
                                   </svg>
                                   <span class="text-xs font-medium text-[#000000]">Remove</span>
                               </button>
                               <button @click="handleUpdate(report, 'APPROVED')" class="flex flex-col items-center">
                                 <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                   <rect x="0.5" y="0.5" width="23" height="23" rx="11.5" stroke="#1A9882"/>
                                   <path d="M5 11.5043L9.8 16.2L18 8" stroke="#1A9882" stroke-width="1.5" stroke-linecap="round"/>
                                   </svg>
       <span class="text-xs font-medium text-[#000000]">Approve</span>                            
                               </button>
                             </div>
                           </td>
                         </tr>
                       </tbody>
                     </table>
                   </div>
                 </div>
               </div>
               <div
          v-if="loading && !contentReports.length"
          class="h-44 w-full bg-slate-300 animate-pulse rounded"
        ></div>
        <div v-else class="flex-1 bg-white -md rounded-lg m-4 border w- border-gray-50">
          <div class="border py-20 rounded-lg flex justify-center items-center text-gray-600">No Content Report available</div>
        </div>
             </div>
         </div>
   </main>
</template>

<script setup lang="ts">
import { useUpdateContentReportStatus } from '@/composables/content/updateContentReport'
import { useGetContentReports } from '@/composables/content/getContentReport'
const { loading, contentReports, filteredContentReports, searchQuery, selectedStatus } = useGetContentReports()
const { updateContentReports, loading: updatating, setPayload } = useUpdateContentReportStatus()
const props = defineProps({
  showSideContent: {
    type: Boolean
  }
})

const handleUpdate = async (report: any, status: string) => {
  const payload = {
    status: status,
    reviewNote: ''
  }
  setPayload(payload)
  await updateContentReports(report.id)
}

</script>