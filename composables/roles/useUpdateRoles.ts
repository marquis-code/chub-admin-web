import { rolesApiFactory } from '@/apiFactory/modules/roles';
import { useCustomToast } from '@/composables/core/useCustomToast';
const { showToast } = useCustomToast();

const rolePayload = ref({
    name: "",
    color: "",
    permissions: [
      {
        "name": "string",
        "status": true
      }
    ]
}) as any; // Store all reports
const loading = ref(false);

export const useUpdateeRole = () => {
    const createRole = async (id: string) => {
        loading.value = true;
        const response = await rolesApiFactory.$_update_role(id, rolePayload.value) as any;
        console.log(response, 'here')
        if (response.type !== 'ERROR') {
            showToast({
                title: "Success",
                message: "Roles was updated successfully",
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

    const setPayload = (data: any) => {
        rolePayload.value.name = data.name
        rolePayload.value.color = data.color
        rolePayload.value.permissions = data.permissions
    }

    return {
        loading,
        rolePayload,
        createRole,
        setPayload
    };
};
