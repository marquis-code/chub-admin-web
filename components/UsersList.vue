<template>
  <main>
    <table class="min-w-full table-fixed divide-y divide-gray-300">
      <thead>
        <tr>
          <th scope="col" class="relative px-7 sm:w-12 sm:px-6">
            <input
              :checked="indeterminate || selectedPeople.length === usersList.length"
              :indeterminate="indeterminate"
              @change="selectedPeople = $event.target.checked ? usersList.map((p) => p.email) : []"
              type="checkbox"
              class="custom-checkbox"
            />
          </th>
          <th scope="col" class="min-w-[12rem] py-3.5 pr-3 text-left text-sm font-medium text-[#1D1F2C]">Name
        </th>
        <th scope="col" class="px-3 py-3.5 text-left text-sm font-medium text-[#1D1F2C]">Email</th>
        <th scope="col" class="px-3 py-3.5 text-left text-sm font-medium text-[#1D1F2C]">Phone</th>
        <th scope="col" class="px-3 py-3.5 text-left text-sm font-medium text-[#1D1F2C]">Joined</th>
        <th scope="col" class="px-3 py-3.5 text-left text-sm font-medium text-[#1D1F2C]">Last login</th>
        <th scope="col" class="px-3 py-3.5 text-left text-sm font-medium text-[#1D1F2C]">Status</th>
        <th scope="col" class="px-3 py-3.5 text-left text-sm font-medium text-[#1D1F2C]">Challenges
          Completed</th>
        <th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-3 text-sm font-medium text-[#1D1F2C]">
          Action
        </th>
        </tr>
      </thead>
      <tbody class="divide-y divide-gray-200 bg-white">
        <tr
          v-for="(person, idx) in usersList"
          :key="person.email"
          class="cursor-pointer"
          :class="[selectedPeople.includes(person.email) && 'bg-gray-50']"
        >
          <td class="relative px-7 sm:w-12 sm:px-6">
            <div
              v-if="selectedPeople.includes(person.email)"
              class="absolute inset-y-0 left-0 w-0.5 bg-indigo-600"
            ></div>
            <input
              :value="person.email"
              v-model="selectedPeople"
              type="checkbox"
              class="custom-checkbox"
            />
          </td>
          <!-- Remaining data cells here -->
          <td @click="router.push(`/dashboard/user/${idx}`)" class="whitespace-nowrap py-4 pr-3 text-sm font-medium text-gray-900">
            <div class="flex items-center">
              <div class="h-11 w-11 flex-shrink-0">
                <img class="h-11 w-11 rounded-full"
                  :src="person?.photo?.image"
                  alt="">
              </div>
              <div class="ml-4">
                <div class="font-medium text-gray-900">{{ `${person?.firstName} ${person?.lastName}` ?? 'Nil' }}</div>
              </div>
            </div>
          </td>
          <td @click="router.push(`/dashboard/user/${idx}`)"
            :class="['whitespace-nowrap py-4 pr-3 text-sm font-medium', selectedPeople.includes(person.email) ? 'text-indigo-600' : 'text-gray-900']"
            class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ person?.email ?? 'Nil' }}</td>
          <td @click="router.push(`/dashboard/user/${idx}`)" class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ person?.phone ?? 'Nil' }}</td>
          <td @click="router.push(`/dashboard/user/${idx}`)" class="whitespace-nowrap px-3 py-4 text-sm text-gray-500"> {{ moment.utc(person?.createdAt).format('DD-MMM-YY') || 'Nil' }}</td>
          <td @click="router.push(`/dashboard/user/${idx}`)" class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">  {{ moment.utc(person?.lastSeen).format('DD-MMM-YY') || 'Nil' }}</td>
          <td @click="router.push(`/dashboard/user/${idx}`)" class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
            <span class="px-5 py-1.5 font-medium rounded-lg"
              :class="[person.status === 'ACTIVE' ? 'bg-[#E9FAF7] text-[#1A9882]' : person.status === 'DEACTIVATED' ? 'bg-[#FEECEE] text-[#EB3D4D]' : person.status === 'SUSPENDED' ? 'bg-[#F0F1F3] text-[#667085]' : 'bg-[#F0F1F3] text-[#667085]']">
              {{ person.status }}</span>
          </td>
          <td @click="router.push(`/dashboard/user/${idx}`)" class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ person?.challenge_completed ?? 'Nil' }}</td>
          <td
          class="py-4 px-5 relative whitespace-nowrap text-sm text-[#667185]"
        >
          <button
            @click="toggleDropdown(idx)"
            class="inline-flex items-center text-sm font-medium text-[#667185] hover:text-black"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.99609 10H10.0036"
                stroke="#292929"
                stroke-width="2.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M15 10H15.0075"
                stroke="#1D2739"
                stroke-width="2.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M5 10H5.00748"
                stroke="#1D2739"
                stroke-width="2.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
          <div
            v-if="activeDropdown === idx"
            class="absolute -top-2 right-10 z-50 mt-2 w-60 bg-white border border-gray-200 rounded-md -lg"
          >
            <ul
              class="py-1 text-sm text-gray-700 divide divide-y-[0.5px]"
            >
              <li>
                <a
                  @click.prevent="
                    handleDropdownClick('view', person)
                  "
                  href="#"
                  class="block flex items-center gap-x-2 px-4 py-3 hover:bg-gray-100 text-start"
                >
                  <!-- <img :src="dynamicIcons('view-property')" /> -->
                  View User
                </a>
              </li>
              <li>
                <a
                  @click.prevent="
                    handleDropdownClick('update', person)
                  "
                  href="#"
                  class="block flex items-center gap-x-2 px-4 py-3 text-sm hover:bg-gray-100 text-start"
                >
                  <!-- <img :src="dynamicIcons('edit-property')" /> -->
                  Update User
                </a>
              </li>
            </ul>
          </div>
        </td>
        </tr>
      </tbody>
    </table>

    <div
    v-if="activeDropdown !== null"
    @click="closeDropdown"
    class="fixed inset-0 z-40 bg-black opacity-25"
  ></div>

    <CoreBaseModal
    :show="showUpdateUserModal"
    @update:show="showUpdateUserModal = false"
  >
    <UserProfileUpdateForm :user="selectedUser" @close="showUpdateUserModal = false" />
  </CoreBaseModal>
  </main>
  </template>
  
  <script setup lang="ts">
  import moment from "moment";
  const props = defineProps({
    usersList: {
      type: Object,
      default: () => ({}),
    },
  });

  const showUpdateUserModal = ref(false)

  const selectedUser = ref({}) as any

const activeDropdown = ref<number | null>(null);

const closeDropdown = () => {
  activeDropdown.value = null;
};

const handleDropdownClick = (action: any, item: any) => {
  if (action === "view") {
    localStorage.setItem('selected-user', JSON.stringify(item))
    return router.push(`/dashboard/user/${item.id}`);
  }

  if (action === "update") {
    selectedUser.value = item
    showUpdateUserModal.value = true
    // return router.push(`/dashboard/tenant-mgt/${item.id}`);
  }
  closeDropdown();
};

const toggleDropdown = (index: number) => {
  if (activeDropdown.value === index) {
    activeDropdown.value = null;
  } else {
    activeDropdown.value = index;
  }
};
  
  const router = useRouter();
  const openDropdownIndex = ref(null);
  
  // function toggleDropdown(index: any) {
  //   openDropdownIndex.value = openDropdownIndex.value === index ? null : index;
  // }
  
  // const showUpdateUserModal = ref(false);
  const selectedPeople = ref([]);
  const indeterminate = computed(
    () =>
      selectedPeople.value.length > 0 &&
      selectedPeople.value.length < props.usersList.length
  );
  
  const showEditModal = ref(false);
  
  const handleUserAction = (user: any, action: string) => {
    openDropdownIndex.value = null;
    if (action === "edit") {
      showEditModal.value = true;
    }
  };
  </script>
  
  <style scoped>
  .custom-checkbox {
    appearance: none;
    width: 24px;
    height: 24px;
    background-color: #690571; /* Purple background */
    border-radius: 8px; /* Rounded corners */
    display: inline-flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    position: relative;
    border: none; /* Remove default border */
  }
  
  .custom-checkbox:checked {
    background-color: #690571; /* Purple color for checked state */
  }
  
  .custom-checkbox:checked::after {
    content: "";
    width: 10px;
    height: 10px;
    border: solid white;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
    position: absolute;
    top: 5px;
    left: 8px;
  }
  </style>
  