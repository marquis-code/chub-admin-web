<template>
  <div class="max-w-4xl mx-auto mt-8">
    <!-- Tab Navigation -->
    <div class="flex space-x-4 border-b border-gray-300 mb-6">
      <button
        v-for="(tab, index) in tabs"
        :key="index"
        type="button"
        @click="selectTab(tab.name)"
        :class="{
          'text-[#690571] border-b-2 border-[#690571]': activeTab === tab.name,
          'text-gray-600 border-b-2 border-transparent': activeTab !== tab.name
        }"
        class="block py-2 px-4 text-xs font-semibold transition-all"
      >
        {{ tab.label }}
      </button>
    </div>

    <!-- Tab Content -->
    <div v-if="activeTab === 'administrator'" class="space-y-4">
      <div v-for="(permission, index) in administratorPermissions" :key="index" class="flex items-center justify-between">
        <div>
          <span class="text-gray-900 text-sm block">{{ permission.name }}</span>
          <span class="text-[#858D9D] text-sm block max-w-sm font-light">{{ permission.desc }}</span>
        </div>
        <label
              :for="`administrator-${permission.name}`"
              class="inline-flex items-center space-x-4 cursor-pointer dark:text-gray-100"
            >
              <span class="relative">
                <input
                 :id="`administrator-${permission.name}`"
                  placeholder="Type name here. . ."
                  type="checkbox"
                  class="hidden peer"
                  v-model="permission.status"
                   @change="emitPermissions"
                />
                <div
                  class="w-10 h-6 rounded-full -inner dark:bg-[#F2F4F7] peer-checked:dark:bg-[#690571]"
                ></div>
                <div
                  class="absolute inset-y-0 left-0 w-4 h-4 m-1 rounded-full  peer-checked:right-0 peer-checked:left-auto dark:bg-[#F2F4F7]"
                ></div>
              </span>
            </label>
      </div>
    </div>

    <div v-if="activeTab === 'challengeManagement'" class="space-y-4">
      <div v-for="(permission, index) in challengeManagementPermissions" :key="index" class="flex items-center justify-between">
        <div>
          <span class="text-gray-900 text-sm block">{{ permission.name }}</span>
          <span class="text-[#858D9D] text-sm max-w-sm block font-light">{{ permission.desc }}</span>
        </div>
        <label
              :for="`challengeManagement-${permission.name}`"
              class="inline-flex items-center space-x-4 cursor-pointer dark:text-gray-100"
            >
              <span class="relative">
                <input
                 :id="`challengeManagement-${permission.name}`"
                  placeholder="Type name here. . ."
                  type="checkbox"
                  class="hidden peer"
                  v-model="permission.status"
                   @change="emitPermissions"
                />
                <div
                  class="w-10 h-6 rounded-full -inner dark:bg-[#F2F4F7] peer-checked:dark:bg-[#690571]"
                ></div>
                <div
                  class="absolute inset-y-0 left-0 w-4 h-4 m-1 rounded-full  peer-checked:right-0 peer-checked:left-auto dark:bg-[#F2F4F7]"
                ></div>
              </span>
            </label>
      </div>
    </div>

    <div v-if="activeTab === 'contentManagement'" class="space-y-4">
      <div v-for="(permission, index) in contentManagementPermissions" :key="index" class="flex items-center justify-between">
        <div>
          <span class="text-gray-900 text-sm block">{{ permission.name }}</span>
          <span class="text-[#858D9D] text-sm max-w-sm block font-light">{{ permission.desc }}</span>
        </div>
        <label
              :for="`contentManagement-${permission.name}`"
              class="inline-flex items-center space-x-4 cursor-pointer dark:text-gray-100"
            >
              <span class="relative">
                <input
                 :id="`contentManagement-${permission.name}`"
                  placeholder="Type name here. . ."
                  type="checkbox"
                  class="hidden peer"
                  v-model="permission.status"
                   @change="emitPermissions"
                />
                <div
                  class="w-10 h-6 rounded-full -inner dark:bg-[#F2F4F7] peer-checked:dark:bg-[#690571]"
                ></div>
                <div
                  class="absolute inset-y-0 left-0 w-4 h-4 m-1 rounded-full  peer-checked:right-0 peer-checked:left-auto dark:bg-[#F2F4F7]"
                ></div>
              </span>
            </label>
      </div>
    </div>

    <div v-if="activeTab === 'userManagement'" class="space-y-4">
      <div v-for="(permission, index) in userManagementPermissions" :key="index" class="flex items-center justify-between">
        <div>
          <span class="text-gray-900 text-sm block">{{ permission.name }}</span>
          <span class="text-[#858D9D] text-sm max-w-sm block font-light">{{ permission.desc }}</span>
        </div>
        <label
              :for="`userManagement-${permission.name}`"
              class="inline-flex items-center space-x-4 cursor-pointer dark:text-gray-100"
            >
              <span class="relative">
                <input
                  :id="`userManagement-${permission.name}`"
                  placeholder="Type name here. . ."
                  type="checkbox"
                  class="hidden peer"
                  v-model="permission.status"
                   @change="emitPermissions"
                />
                <div
                  class="w-10 h-6 rounded-full -inner dark:bg-[#F2F4F7] peer-checked:dark:bg-[#690571]"
                ></div>
                <div
                  class="absolute inset-y-0 left-0 w-4 h-4 m-1 rounded-full  peer-checked:right-0 peer-checked:left-auto dark:bg-[#F2F4F7]"
                ></div>
              </span>
            </label>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';

// Define the custom event
const emit = defineEmits<{
  (event: 'update:permissions', value: { permissions: { name: string; status: boolean }[] }): void;
}>();

// Define the tabs
const activeTab = ref('administrator');

const tabs = [
  { name: 'administrator', label: 'Administrator' },
  { name: 'challengeManagement', label: 'Challenge Management' },
  { name: 'contentManagement', label: 'Content Management' },
  { name: 'userManagement', label: 'User Management' },
];

// Permissions data for each tab
const administratorPermissions = ref([
  { name: 'teamManagement', status: false, desc: 'Add, edit, remove team members, assign roles, manage permissions' },
  { name: 'contentManagement', status: true, desc: 'Create, edit, delete challenges, manage media requirements, review user-generated content' },
  { name: 'userManagement', status: false, desc: 'Access all app functionalities, view analytics, configure user accounts (reset password, delete account).' }
]);

const challengeManagementPermissions = ref([
  { name: 'challengeCreation', status: true, desc: 'Create draft challenges with titles, descriptions, goals, deadlines, and media requirements.' },
  { name: 'scheduleChallenge', status: false, desc: 'Schedule the publishing of challenges for specific dates and times.' },
  { name: 'challengeManagement', status: true, desc: 'Review and edit already published challenges.' },
  { name: 'archiveChallenge', status: false, desc: 'Archive older challenges.' }
]);

const contentManagementPermissions = ref([
  { name: 'userGeneratedContent', status: true, desc: 'Moderate or remove inappropriate user-generated content' },
  { name: 'featureContent', status: false, desc: 'Feature specific user-generated content or challenges.' },
  { name: 'announcements', status: true, desc: 'Send announcements or targeted messages to specific user groups.' }
]);

const userManagementPermissions = ref([
  { name: 'userAccounts', status: true, desc: 'Search for specific users, reset forgotten passwords, or manage user account statuses.' },
  { name: 'userEngagement', status: false, desc: 'Access basic user engagement data, including challenge participation rates and completion metrics' },
  { name: 'userFeedback', status: true, desc: 'Access detailed user feedback data.' }
]);

// Function to handle tab selection
const selectTab = (tabName: string) => {
  activeTab.value = tabName;
};

// Function to emit permissions data
const emitPermissions = () => {
  // Gather all permissions and convert names to PascalCase
  const allPermissions = [
    ...administratorPermissions.value,
    ...challengeManagementPermissions.value,
    ...contentManagementPermissions.value,
    ...userManagementPermissions.value,
  ];

  const finalResponse = {
    permissions: allPermissions.map(permission => ({
      name: toPascalCase(permission.name),
      status: permission.status,
    }))
  };

  // Emit the final response (you can customize the event name as needed)
  emit('update:permissions', finalResponse);
};

// Helper function to convert string to PascalCase
const toPascalCase = (str: string): string => {
  return str.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, (match, index) =>
    index === 0 ? match.toLowerCase() : match.toUpperCase()
  ).replace(/\s+/g, '');
};
</script>

<style scoped>
/* Tailwind CSS for toggle styles */
.toggle-checkbox {
  cursor: pointer;
  transition: all 0.3s;
  transform: scale(1.2);
}

.toggle-checkbox:checked {
  background-color: #4ade80;
  border-color: #4ade80;
}
</style>
