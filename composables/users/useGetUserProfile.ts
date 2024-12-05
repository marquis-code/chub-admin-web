import { ref, computed, onMounted } from 'vue'
import { userApiFactory } from '@/apiFactory/modules/user'
const route = useRoute() as any

const userProfileObj = ref({})
const loading = ref(false)

export const useGetUserProfile = () => {
    const route = useRoute() as any
    const getUserProfile = async () => {
        loading.value = true
        userProfileObj.value = {}

        const response = await userApiFactory.$_fetch_user_profile(route?.params?.id) as any
          console.log(response, 'user profile obj')
        if (response.type !== 'ERROR') {
            userProfileObj.value = response.data.data ?? {}
        }
        loading.value = false
    }

    onMounted(() => {
        getUserProfile()
    })

    return { getUserProfile, loading, userProfileObj}
}
