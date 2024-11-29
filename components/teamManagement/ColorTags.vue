<template>
  <main>
    <div class="mt-4 border-b border-gray-100 pb-5">
      <label class="block text-gray-700 text-sm">Color</label>
      <div class="mt-1 flex space-x-3">
        <!-- Color Picker Input -->
        <div>
          <input
            type="color"
            v-model="selectedColor"
            @input="emitColor"
            class="w-8 h-8 cursor-pointer rounded-full"
          />
        </div>
        
        <!-- Predefined Color Swatches -->
        <div class="flex space-x-3">
          <div
            v-for="color in colors"
            :key="color"
            :style="{
              backgroundColor: color,
              borderColor: selectedColor === color ? color : '#ddd',
              borderWidth: selectedColor === color ? '4px' : '2px'
            }"
            class="w-8 h-8 rounded-full cursor-pointer border-2 transition-all duration-200 ease-in-out"
            @click="selectColor(color)"
          ></div>
        </div>
      </div>
    </div>

    <CoreColorPicker :show="showColorModal" @close="closeColorPicker" />
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const activeTag = ref('super-admin')
const showColorModal = ref(false)

// Define the emit event to send the selected color to the parent
const emit = defineEmits<{
  (e: 'update:color', color: string): void;
  (e: 'role-tag'): void
}>();

// List of predefined colors
const colors = ['#690571', '#FF2BEA', '#FF9E2B', '#2BB2FE', '#34D399', '#F59E0B'];

// Ref to store the selected color
const selectedColor = ref<string>('#690571'); // Default color

// Emit the color to the parent whenever the color changes
const emitColor = () => {
  emit('update:color', selectedColor.value);
};

// Function to handle the selection of a predefined color
const selectColor = (color: string) => {
  selectedColor.value = color;
  emitColor();  // Emit the color when a predefined color is selected
};
</script>

<style scoped>
/* Optional: You can add any extra custom styling here */
</style>
