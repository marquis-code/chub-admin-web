import { ref, computed, onMounted, watch } from 'vue';
import { contentApiFactory } from '@/apiFactory/modules/content';

const contentReports = ref([]) as any; // Store all reports
const filteredReports = ref([]) as any; // Store filtered reports
const loading = ref(false);
const searchQuery = ref(''); // Search query for filtering
const filters = ref({
    status: '',
    contentType: '',
    reason: ''
});

export const useGetContentReports = () => {
    const getContentReports = async () => {
        contentReports.value = [];
        filteredReports.value = [];
        loading.value = true;

        const response = await contentApiFactory.$_get_content_reports(filters.value) as any;
        console.log(response, 'here');
        if (response.type !== 'ERROR') {
            contentReports.value = response.data.data.reports ?? [];
        }
        loading.value = false;
    };

    // Watch searchQuery and filter the data internally
    const filteredContentReports = computed(() => {
        if (!searchQuery.value.trim()) {
            return contentReports.value;
        }
        return contentReports.value.filter((report: any) =>
            Object.values(report).some((value) =>
                String(value).toLowerCase().includes(searchQuery.value.toLowerCase())
            )
        );
    });

    onMounted(() => {
        getContentReports();
    });

    // Watch the filters for changes and trigger the API call when they change
    watch(filters, () => {
        getContentReports();
    }, { deep: true }); // Ensure deep watching of the filters object

    return {
        getContentReports,
        loading,
        contentReports,
        filteredContentReports,
        searchQuery,
        filters
    };
};
