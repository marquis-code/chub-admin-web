<template>
  <div>
    <datepicker
      v-model="selectedDate"
      @selected="emitSelectedDate"
      :disabled-dates="mergedDisabledDates"
      :highlighted="highlightedDates"
      :placeholder="placeholder"
    />
  </div>
</template>

<script setup>
import moment from "moment";
import { ref, defineProps, defineEmits, computed } from 'vue';
import Datepicker from 'vuejs3-datepicker';

// Props that will be passed to the component from the parent
const props = defineProps({
  placeholder: {
    type: String,
    default: 'Select a date',
  },
  inline: {
    type: Boolean,
    default: false,
  },
  disabledDates: {
    type: Object,
    default: () => ({}),
  },
  highlightedDates: {
    type: Object,
    default: () => ({}),
  },
});

// Emits the selected date to the parent component
const emit = defineEmits(['selectedDate']);

// Local state to manage the selected date
const selectedDate = ref(null);

// Get today's date and set it as the minimum valid date
const today = new Date();
const disabledDates = ref({
  to: new Date(today.setDate(today.getDate() - 1)), // Disable all dates before today, not including today
});

// Computed property to merge the default disabledDates with any passed props
const mergedDisabledDates = computed(() => {
  // If `disabledDates` prop is passed, override the default
  return { ...disabledDates.value, ...props.disabledDates };
});

// Emit the selected date to the parent
const emitSelectedDate = (date) => {
  console.log(date, 'selected date');
  const formatted = moment.utc(date).format("YYYY-MM-DDTHH:mm:ss.SSS[Z]");
  emit('selectedDate', formatted);
};
</script>

<style scoped>
/* You can style your Datepicker here */
</style>
