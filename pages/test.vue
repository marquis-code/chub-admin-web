<template>
    <div class="min-h-screen bg-gray-50 p-4 md:p-8">
      <!-- Main Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <!-- Left Column: Content Header and Reports -->
        <div class="md:col-span-2 space-y-6">
          <!-- Content Header -->
          <div class="bg-white rounded-lg shadow p-6">
            <h1 class="text-2xl font-semibold">Manage user content</h1>
            <p class="text-gray-500 mt-2">
              Create and manage admins, content admins and challenge admins
            </p>
          </div>
  
          <!-- Reports Table -->
          <div class="bg-white rounded-lg shadow p-6">
            <div class="flex justify-between items-center">
              <h2 class="text-lg font-semibold">Reports</h2>
              <button class="text-blue-600 text-sm font-medium">+2 reports</button>
            </div>
  
            <!-- Search and Filters -->
            <div class="flex flex-wrap items-center gap-4 mt-4">
              <input
                type="text"
                placeholder="Search for a challenge"
                class="flex-1 border rounded-lg px-4 py-2 text-sm"
              />
              <input
                type="date"
                class="border rounded-lg px-4 py-2 text-sm"
              />
              <button class="text-blue-600 text-sm">Filters</button>
            </div>
  
            <!-- Reports Table -->
            <div class="overflow-x-auto mt-6">
              <table class="min-w-full text-sm text-left">
                <thead>
                  <tr class="border-b">
                    <th class="py-2 px-4">Content</th>
                    <th class="py-2 px-4">Reported by</th>
                    <th class="py-2 px-4">Created by</th>
                    <th class="py-2 px-4">Date</th>
                    <th class="py-2 px-4">Reason</th>
                    <th class="py-2 px-4">Time</th>
                    <th class="py-2 px-4">Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(report, index) in reports" :key="index" class="border-b">
                    <td class="py-2 px-4">{{ report.content }}</td>
                    <td class="py-2 px-4 text-blue-600 font-medium">{{ report.reportedBy }}</td>
                    <td class="py-2 px-4">{{ report.createdBy }}</td>
                    <td class="py-2 px-4">{{ report.date }}</td>
                    <td class="py-2 px-4">{{ report.reason }}</td>
                    <td class="py-2 px-4">{{ report.time }}</td>
                    <td class="py-2 px-4">
                      <div class="flex items-center gap-2">
                        <button class="text-red-600">Remove</button>
                        <button class="text-green-600">Approve</button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
  
        <!-- Right Column: Featured Content -->
        <div class="bg-white rounded-lg shadow p-6">
          <div class="flex justify-between items-center">
            <h2 class="text-lg font-semibold">Featured Content</h2>
            <button class="bg-purple-600 text-white text-sm font-medium px-4 py-2 rounded-lg">
              Feature content
            </button>
          </div>
  
          <!-- Featured Items -->
          <div class="mt-6 space-y-4">
            <div
              v-for="(item, index) in featuredContent"
              :key="index"
              class="border-b pb-4 last:border-none"
            >
              <div class="flex items-start gap-4">
                <div class="flex-shrink-0">
                  <div class="h-12 w-12 bg-pink-200 rounded-lg"></div>
                </div>
                <div>
                  <h3 class="font-medium">{{ item.title }}</h3>
                  <p class="text-sm text-gray-500">Target group: {{ item.targetGroup }}</p>
                  <p class="text-sm text-gray-500">End date: {{ item.endDate }}</p>
                  <div class="flex items-center gap-2 mt-2">
                    <button class="text-blue-600 text-sm">Edit</button>
                    <button class="text-gray-500 text-sm">View</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  

  <script lang="ts" setup>
  const reports = [
    {
      content: "Image",
      reportedBy: "Johnathan Daniel",
      createdBy: "John Doe",
      date: "23 Sept 2024",
      reason: "Inappropriate Content",
      time: "12:00",
    },
    {
      content: "Text",
      reportedBy: "Johnathan Daniel",
      createdBy: "John Doe",
      date: "23 Sept 2024",
      reason: "Harassment/Bullying",
      time: "22:00",
    },
    {
      content: "Video",
      reportedBy: "Johnathan Daniel",
      createdBy: "John Doe",
      date: "23 Sept 2024",
      reason: "Harassment/Bullying",
      time: "12:00",
    },
    {
      content: "Document",
      reportedBy: "Johnathan Daniel",
      createdBy: "John Doe",
      date: "23 Sept 2024",
      reason: "Harassment/Bullying",
      time: "22:00",
    },
  ];
  
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
  