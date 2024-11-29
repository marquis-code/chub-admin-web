import { rolesApiFactory } from '@/apiFactory/modules/roles';
import { useCustomToast } from '@/composables/core/useCustomToast';
const { showToast } = useCustomToast();

const rolePayload = ref({
    name: "",
    color: "",
    permissions: []
}) as any; // Store all reports
const loading = ref(false);

export const useCreateRole = () => {
    const createRole = async () => {
        loading.value = true;

        const response = await rolesApiFactory.$_create_role(rolePayload.value) as any;
        console.log(response, 'here')
        if (response.status === 200 || response.status === 201) {
            showToast({
                title: "Success",
                message: "Roles was created successfully",
                toastType: "success",
                duration: 3000,
              });
        } else {
            showToast({
              title: "Error",
              message: "Something went wrong",
              toastType: "error",
              duration: 3000,
            });
          }
        loading.value = false;
    };

    const setRolePayload = (data: any) => {
        rolePayload.value.name = data.name
        rolePayload.value.color = data.color
        rolePayload.value.permissions = data.permissions
    }

    return {
        loading,
        rolePayload,
        createRole,
        setRolePayload
    };
};
