import { ref } from "vue";

export function useFetch(apiCall){
    const loading = ref(false);
    const data = ref(null);
    const error = ref(null);

    async function fetchData(apiCall) {
        apiCall()
        .then((response) => {
            loading.value = true;
            data.value = response
            return true;
        })
        .catch((err) => (error.value = err))
        .finally(() => (loading.value = false));
    }
   

    return ( loading, data, error, fetchData );
}

