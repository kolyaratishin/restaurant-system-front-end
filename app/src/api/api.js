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
    save(meal){
        return axiosInstance.post(`meal`, meal);
    }
}

export const tableApi = {
    getAll(restaurantId) {
        return axiosInstance.get(`restaurant/${restaurantId}/tables`);
    },
}

export const receiptApi = {
    getReceiptById(id) {
        return axiosInstance.get(`receipt/${id}`);
    },
    addMealToReceipt(mealId, receiptId){
        return axiosInstance.post(`receipt/meal`, {
            mealId,
            receiptId
        });
    },
    deleteMealFromReceipt(mealId, receiptId){
        return axiosInstance.delete(`receipt/${receiptId}/meal/${mealId}`);
    }
}