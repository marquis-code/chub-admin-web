import { rolesApiFactory } from '@/apiFactory/modules/roles';

const rolesList = ref([]) as any; // Store all reports
const loading = ref(false);

export const useGetRoles = () => {
    const getRoles = async () => {
        loading.value = true;

        const response = await rolesApiFactory.$_get_roles() as any;
        console.log(response, 'here')
        if (response.type !== 'ERROR') {
            rolesList.value = response?.data?.data?.roles ?? [];
        }
        loading.value = false;
    };


    onMounted(() => {
        getRoles();
    });

    return {
        loading,
        rolesList
    };
};
