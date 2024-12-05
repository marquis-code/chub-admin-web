<!-- <template>
  <div class="relative">
    <Datepicker
        v-model="internalPicked"
        ref="datepickerRef"
        :lowerLimit="today"
        class="border-[#E0E2E7] py-3 border rounded-md pl-3 w-full outline-none"
        @change="handleDateChange"
    />
    <img
        class="absolute right-3 top-3 cursor-pointer"
        src="@/assets/icons/date-picker.svg"
        alt="date picker"
        @click="openDatepicker"
    />
  </div>
</template>

<script setup>
import Datepicker from 'vue3-datepicker';
import { ref, watch } from 'vue';

const props = defineProps({
  modelValue: {
    type: [String, Date], // Supports both string and Date types
    default: '', // Initial value for the date
  },
});

const emit = defineEmits(['update:modelValue', 'dateSelected']);

const internalPicked = ref(props.modelValue);
const today = new Date(); // Current date for disabling past dates
today.setHours(0, 0, 0, 0); // Set to midnight for consistency

const datepickerRef = ref(null); // Ref for the datepicker instance

// Emit the date whenever it changes
const handleDateChange = (date) => {
  // console.log(date, 'date picked')
  internalPicked.value = date; // Update internalPicked with the new date
  emit('update:modelValue', internalPicked.value); // Sync with parent using v-model
  emit('dateSelected', internalPicked.value); // Emit custom event
};

// Open the date picker when the icon is clicked
const openDatepicker = () => {
  if (datepickerRef.value) {
    datepickerRef.value.open(); // Trigger the date picker to open
  }
};

// Watch for external changes in modelValue
watch(
    () => props.modelValue,
    (newValue) => {
      internalPicked.value = newValue;
    }
);
</script> -->


<template>
  <div class="relative">
    <!-- Datepicker with lowerLimit -->
    <Datepicker
        v-model="internalPicked"
        ref="datepickerRef"
        :lowerLimit="today"
        class="border-[#E0E2E7] py-3 border rounded-md pl-3 w-full outline-none"
        @change="handleDateChange"
    />
    <!-- Icon to open the date picker -->
    <img
        class="absolute right-3 top-3 cursor-pointer"
        src="@/assets/icons/date-picker.svg"
        alt="date picker"
        @click="openDatepicker"
    />
  </div>
</template>

<script setup>
import Datepicker from 'vue3-datepicker';
import { ref, watch } from 'vue';

const props = defineProps({
  modelValue: {
    type: [String, Date], // Supports both string and Date types
    default: '', // Initial value for the date
  },
});

const emit = defineEmits(['update:modelValue', 'dateSelected']);

const internalPicked = ref(props.modelValue);
const today = new Date(); // Current date for disabling past dates
today.setHours(0, 0, 0, 0); // Set to midnight for consistency

const datepickerRef = ref(null); // Ref for the datepicker instance

// Emit the date whenever it changes, formatted as 'YYYY-MM-DD'
const handleDateChange = (date) => {
  const formattedDate = formatDate(date);
  console.log(formattedDate, 'here')
  internalPicked.value = formattedDate; // Update internalPicked with the formatted date
  emit('update:modelValue', internalPicked.value); // Sync with parent using v-model
  emit('dateSelected', internalPicked.value); // Emit custom event
};

// Open the date picker when the icon is clicked
const openDatepicker = () => {
  if (datepickerRef.value) {
    datepickerRef.value.open(); // Trigger the date picker to open
  }
};

// Watch for external changes in modelValue
watch(
  () => props.modelValue,
  (newValue) => {
    internalPicked.value = newValue;
  }
);

// Helper function to format the date as 'YYYY-MM-DD'
const formatDate = (date) => {
  if (date instanceof Date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-based
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }
  return ''; // Return an empty string if the date is not valid
};
</script>
