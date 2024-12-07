<script setup lang="ts">
import { useCreateAdminRole } from "@/composables/admin-mgt/createAdminRole";
import { useSuperAdminActivityLogs } from "@/composables/admin-mgt/getSuperAdminActivityLogs";
import { useAdminUserDistribution } from "@/composables/admin-mgt/fetchAdminUsersDistribution";
import { useAdminTeams } from "@/composables/admin-mgt/getAdminTeam";
import { useGetAuditLogs } from "@/composables/admin-mgt/getAuditLogos";
import { useSuspendAdmin } from "@/composables/admin-mgt/suspendAdmin";
import { useAssignRoleToAdmin } from "@/composables/admin-mgt/assignRoleToAdmin";
import { useUpdateAdminProfile } from "@/composables/admin-mgt/updateAdminProfile";
import imageOne from "@/assets/img/admin-stat1.png";
import imageTwo from "@/assets/img/admin-stat2.png";
import imageThree from "@/assets/img/admin-stat3.png";
import { useCreateRole } from '@/composables/roles/useCreateRoles'
const {  loading: processing,
        rolePayload,
        createRole,
        setRolePayload } = useCreateRole()

definePageMeta({
  layout: "dashboard",
    // middleware: 'auth'
});

const { loading: loadingTeamStats, adminUserDistribution } =
  useAdminUserDistribution();
const { adminTeams, loading: loadingAdminTeams, searchQuery, querySearchTeams } = useAdminTeams();
const { loading: loadingAuditLogs, auditLogsList } = useGetAuditLogs();
const { suspendAdmin, loading: suspending } = useSuspendAdmin();
const { assignRoleToAdmin, loading, payload, setPayload } =
  useAssignRoleToAdmin();
const {
  updateAdminProfile,
  loading: updating,
  setUpdatePayload,
} = useUpdateAdminProfile();
const {
  getAdminActivityLogs,
  loading: loadingLogs,
  adminActivityLogs,
} = useSuperAdminActivityLogs();
const {
  createAdminRole,
  loading: creatingRole,
  setRoleObj,
} = useCreateAdminRole();

const userStats = ref([
  {
    image: imageOne,
    key: "",
    title: "USER ADMIN",
    count: "0",
  },
  {
    image: imageTwo,
    key: "",
    title: "USER ADMIN",
    count: "0",
  },
  {
    image: imageThree,
    key: "",
    title: "USER ADMIN",
    count: "0",
  },
  {
    image: imageOne,
    key: "",
    title: "USER ADMIN",
    count: "0",
  },
]);

const payloadObj = ref({
  name: "",
  color: "",
  permissions: [],
});


const handleSubmit = async () => {

  // Set the role object and proceed
  setRolePayload(payloadObj.value);
  await createRole()
  showAddRoleModal.value = false

};

const handleSelectedColor = (item: any) => {
  console.log(item, 'color selected')
  payloadObj.value.color = item;
};

const handlePermissionOptions = (item: any) => {
  console.log(item, 'permissions')
  payloadObj.value.permissions = item?.permissions;
};

const activeTab = ref("all");
const setTab = (item: string) => {
  activeTab.value = item;
};

// Computed property to filter adminTeams based on the activeTab value
const filteredAdminTeams = computed(() => {
  if (activeTab.value === "all") {
    return adminTeams.value;
  } else {                                          
    return adminTeams.value.filter((member) => {
      switch (activeTab.value) {
        case "admin":
          return member.role === "ADMIN";
        case "super-admin":
          return member.role === "SUPER_ADMIN";
        case "content-admin":
          return member.role === "CONTENT_ADMIN";
        case "challenge-admin":
          return member.role === "CHALLENGE_ADMIN";
        case "user-admin":
          return member.role === "USER_ADMIN";
        default:
          return false;
      }
    });
  }
});

const showAddAdminModal = ref(false);
const showAddRoleModal = ref(false);


const addTeamMember = () => {
  showAddAdminModal.value = true;
};

const handleAddRole = () => {
  showAddRoleModal.value = true;
};

const handleEditRole = (key: any) => {
  if(key !== 'totalCount'){
    showAddRoleModal.value = true;
    payloadObj.value.name = key
  }
  // handleEditRole
}

const handleAdminActivityDetails = (member: any) => {
  console.log(member, "here");
  getAdminActivityLogs(member.id);
};
</script>

<template>
  <main>
    <section
      class="bg-white -sm border border-gray-50 rounded-2xl lg:flex justify-between items-center px-6"
    >
      <h1>Overview</h1>
      <div class="relative flex gap-x-3 w-full lg:w-3/12 py-6">
       <div class="w-full">
        <input
          type="search"
          placeholder="Search...."
          class="w-full border-b pl-9 pb-2 text-sm outline-none"
        />
        <svg class="absolute left-0 top-6" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z" fill="#C7CACD"/>
<path d="M21.3001 22.0005C21.1201 22.0005 20.9401 21.9305 20.8101 21.8005L18.9501 19.9405C18.6801 19.6705 18.6801 19.2305 18.9501 18.9505C19.2201 18.6805 19.6601 18.6805 19.9401 18.9505L21.8001 20.8105C22.0701 21.0805 22.0701 21.5205 21.8001 21.8005C21.6601 21.9305 21.4801 22.0005 21.3001 22.0005Z" fill="#292D32"/>
</svg>

       </div>
        <img
          src="@/assets/icons/notifications.svg"
          alt=""
          class="top-5 h-6 w-6"
        />
      </div>
    </section>
    <section class="py-4">
      <CoreHeaderWithStats
        :statData="adminUserDistribution"
        @add="addTeamMember"
        title="Manage your team"
        description="Create and manage admins, content admins and challenge admins"
        :stats="userStats"
      />
    </section>

    <section class="bg-white -sm border border-gray-50 rounded-2xl">
      <div class="border-b border-gray-50">
        <div
          class="lg:flex justify-between items-center px-6 pt-5 border-b-[0.5px] border-gray-100 pb-3"
        >
          <h1 class="text-xl font-semibold">Team members</h1>
          <div class="lg:flex justify-end items-end">
            <div class="lg:flex gap-x-5 space-y-3 lg:space-y-0">
              <div
                class="border rounded-md text-xs flex overflow-x-auto hide-scrollbar"
              >
                <div>
                  <button
                    @click="setTab('super-admin')"
                    :class="[
                      activeTab === 'super-admin'
                        ? 'text-[#690571] bg-[#FFEFFE]'
                        : 'text-[#667085]',
                    ]"
                    class="px-4 py-3 my-0.5 rounded-lg font-semibold block"
                  >
                    Super Admin
                  </button>
                </div>
                <div>
                  <button
                    @click="setTab('content-admin')"
                    :class="[
                      activeTab === 'content-admin'
                        ? 'text-[#FF2BEA] bg-[#F4ECFB]'
                        : 'text-[#667085]',
                    ]"
                    class="px-4 py-3 my-0.5 rounded-lg font-semibold block"
                  >
                    Content Admin
                  </button>
                </div>
                <div>
                  <button
                    @click="setTab('challenge-admin')"
                    :class="[
                      activeTab === 'challenge-admin'
                        ? 'text-[#FF9E2B] bg-[#FFF3E0]'
                        : 'text-[#667085]',
                    ]"
                    class="px-4 py-3 my-0.5 rounded-lg font-semibold block"
                  >
                    Challenge Admin
                  </button>
                </div>
                <div>
                  <button
                    @click="setTab('user-admin')"
                    :class="[
                      activeTab === 'user-admin'
                        ? 'text-[#2BB2FE] bg-[#EAF8FF]'
                        : 'text-[#667085]',
                    ]"
                    class="px-4 py-3 my-0.5 rounded-lg font-semibold block"
                  >
                    User Admin
                  </button>
                </div>
              </div>
              <div class="relative">
                <img
                  src="@/assets/icons/search.svg"
                  alt="date-picker"
                  class="absolute left-3 top-2"
                />
                <input
                  v-model="searchQuery"
                  type="text"
                  placeholder="Search admins. . ."
                  class="px-4 py-3 pl-10 outline-none  text-sm border rounded-md flex-grow"
                />
              </div>
            </div>
          </div>
        </div>

        <div v-if="!loadingAdminTeams">
          <section v-if="!searchQuery?.length">
                <div
                  v-if="filteredAdminTeams.length === 0"
                  class="p-6 text-center flex justify-center items-center h-44 rounded-md"
                >
                  <p class="text-gray-500">
                    No team members found for this role. {{ activeTab }}
                  </p>
                </div>
                <div
                  v-else
                  class="flex gap-4 overflow-x-auto p-2 lg:p-6"
                  style="scroll-snap-type: x mandatory;"
                >
                  <TeamManagementTeamMemberCard
                    class="cursor-pointer w-[100%] md:w-[30%]  lg:w-[25%] flex-shrink-0"
                    :activeTab="activeTab"
                    :member="member"
                    v-for="(member, index) in filteredAdminTeams"
                    :key="index"
                    :avatar="member.photo?.image"
                    :id="member.id"
                    :online="member.online"
                    :name="member.name"
                    :firstName="member.firstName"
                    :lastName="member.lastName"
                    :role="member.role"
                    :roleClass="member.roleClass"
                    :email="member.email"
                    :textColor="member.textColor"
                    :bgColor="member.bgColor"
                    :lastSeen="member.lastSeen"
                    :lastActive="member.lastActive"
                    @click="handleAdminActivityDetails(member)"
                    style="scroll-snap-align: start;"
                  />
                </div>
          </section>
          <section v-if="searchQuery?.length">
                <div
                  v-if="querySearchTeams.length === 0"
                  class="p-6 text-center flex justify-center items-center h-44 rounded-md"
                >
                  <p class="text-gray-500">
                    No search query available for "{{ querySearchTeams }}"
                  </p>
                </div>
                <div
                  v-else
                  class="flex gap-4 overflow-x-auto p-2 lg:p-6"
                  style="scroll-snap-type: x mandatory;"
                >
                  <TeamManagementTeamMemberCard
                    class="cursor-pointer w-[100%] md:w-[30%]  lg:w-[25%] flex-shrink-0"
                    :activeTab="activeTab"
                    :member="member"
                    v-for="(member, index) in querySearchTeams"
                    :key="index"
                    :avatar="member.photo?.image"
                    :id="member.id"
                    :online="member.online"
                    :name="member.name"
                    :firstName="member.firstName"
                    :lastName="member.lastName"
                    :role="member.role"
                    :roleClass="member.roleClass"
                    :email="member.email"
                    :textColor="member.textColor"
                    :bgColor="member.bgColor"
                    :lastSeen="member.lastSeen"
                    :lastActive="member.lastActive"
                    @click="handleAdminActivityDetails(member)"
                    style="scroll-snap-align: start;"
                  />
                </div>
          </section>
        </div>

        <div
          v-else
          class="h-44 w-full bg-slate-300 animate-pulse rounded"
        ></div>
      </div>
    </section>

    <div class="mt-6">
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div class="lg:col-span-1">
          <TeamManagementAllAdminsSummary
            :statData="adminUserDistribution"
            @addRole="handleAddRole"
             @editRole="handleEditRole"
          />
        </div>
        <div class="lg:col-span-2">
          <TeamManagementActivityFeed
            v-if="!loadingAuditLogs"
            :logs="auditLogsList"
          />
          <div
            v-else
            class="h-44 w-full bg-slate-300 animate-pulse rounded"
          ></div>
        </div>
      </div>
    </div>

    <CoreBaseModal
      :show="showAddAdminModal"
      @update:show="showAddAdminModal = false"
    >
      <TeamManagementCreateAdminForm @close="showAddAdminModal = false" />
    </CoreBaseModal>


    <CoreSideDrawer :showAddRoleModal="false" title="Create Role" description="Define role and its permissions" @close="showAddRoleModal = false" :show="showAddRoleModal" >
      <template #content>
        <section class="px-4">
        <div class="">
          <div class="mb-6">
            <section>
              <h5 class="text-xs text-[#A3A9B6] font-medium mt-4">
                ROLE INFORMATION
              </h5>
              <div class="mt-4 max-w-7xl">
                <label for="role-name" class="block text-[#777980] text-sm"
                  >Name</label
                >
                <input
                  type="text"
                  id="role-name"
                  v-model="payloadObj.name"
                  placeholder="Type name here..."
                  class="mt-1 p-2 py-2.5 border rounded w-full outline-none font-light text-sm"
                />
              </div>
            </section>
            <TeamManagementColorTags @update:color="handleSelectedColor" />
          </div>

          <!-- <TeamManagementPermissionTabs
            @permissionOptions="handlePermissionOptions"
          /> -->
          <TeamManagementPermissionTabs @update:permissions="handlePermissionOptions" />
        </div>
      </section>
      </template>

    <template #action-btn>
      <div
            class="flex justify-between items-center"
          >
            <div>
              <button
                type="button"
                @click="showAddRoleModal = false"
                class="mr-4 px-6 py-2 bg-white border border-[#858D9D] rounded-lg text-sm font-light"
              >
                Cancel
              </button>
            </div>
            <div>
              <button
                type="button"
                @click="handleSubmit"
                :disabled="processing"
                class="px-6 py-2 disabled:cursor-not-allowed disabled:opacity-25 bg-[#690571] text-white rounded-lg text-sm font-medium"
              >
                {{ processing ? "processing..." : "Save Role" }}
              </button>
            </div>
          </div>
    </template>
     </CoreSideDrawer>
  </main>
  <CoreFullScreenLoader
      :visible="loadingAuditLogs"
      text="Fetching data..."
      logo="/path-to-your-logo.png"
  />
</template>
