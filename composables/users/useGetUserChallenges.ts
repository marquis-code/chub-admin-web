import { ref, computed, onMounted } from 'vue'
import { userApiFactory } from '@/apiFactory/modules/user'
const route = useRoute() as any

const userChallenges = ref([])
const loading = ref(false)

export const useGetUserChallenges = () => {
    const route = useRoute() as any
    const getUserChallenges = async () => {
        loading.value = true
        userChallenges.value = []

        const response = await userApiFactory.$_fetch_user_challenges(route?.params?.id) as any
          console.log(response, 'user profile obj')
        if (response.type !== 'ERROR') {
            userChallenges.value = response?.data?.data?.challenges ?? []
        }
        loading.value = false
    }

    onMounted(() => {
        getUserChallenges()
    })

    return { getUserChallenges, loading, userChallenges}
}
