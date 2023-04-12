import axios from "axios";

const axiosInstance = axios.create({
    // withCredentials: true,
    baseURL: "http://localhost:8080/api/",
});

export const importApi = {
    import(formData) {
        return axiosInstance.post(`import`, {formData});
    },
}

export const menuApi = {
    getAll(restaurantId) {
        return axiosInstance.get(`restaurant/${restaurantId}/menu`);
    },
}

export const tableApi = {
    getAll(restaurantId) {
        return axiosInstance.get(`restaurant/${restaurantId}/tables`);
    },
}