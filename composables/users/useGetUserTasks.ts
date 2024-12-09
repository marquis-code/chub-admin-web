import { ref, computed, onMounted } from 'vue'
import { userApiFactory } from '@/apiFactory/modules/user'
const route = useRoute() as any

const userTasks = ref([])
const loading = ref(false)

export const useGetUserTasks = () => {
    const route = useRoute() as any
    const getUserTasks = async () => {
        loading.value = true
        userTasks.value = []

        const response = await userApiFactory.$_fetch_user_tasks(route?.params?.id) as any
          console.log(response, 'user profile obj')
        if (response.type !== 'ERROR') {
            userTasks.value = response?.data?.data?.tasks ?? []
        }
        loading.value = false
    }

    onMounted(() => {
        getUserTasks()
    })

    return { getUserTasks, loading, userTasks}
}
