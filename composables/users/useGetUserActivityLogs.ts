import { ref, computed, onMounted } from 'vue'
import { userApiFactory } from '@/apiFactory/modules/user'
const route = useRoute() as any

const userActivityLogs = ref([])
const loading = ref(false)

export const useGetUserActivityLogs = () => {
    const route = useRoute() as any
    const getUserActivityLogs = async () => {
        loading.value = true
        userActivityLogs.value = []

        const response = await userApiFactory.$_fetch_user_activity_logs(route?.params?.id) as any
          console.log(response, 'user profile obj')
        if (response.type !== 'ERROR') {
            userActivityLogs.value = response?.data?.data?.logs ?? []
        }
        loading.value = false
    }

    onMounted(() => {
        getUserActivityLogs()
    })

    return { getUserActivityLogs, loading, userActivityLogs}
}
