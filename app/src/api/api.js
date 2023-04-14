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
    save(meal) {
        return axiosInstance.post(`meal`, meal);
    },
    removeMealFromMenuGroup(menuGroupId, mealId) {
        return axiosInstance.delete(`group/${menuGroupId}/meal/${mealId}`);
    },
    getMealGroupById(menuGroupId) {
        return axiosInstance.get(`group/${menuGroupId}`);
    },
    addMenuGroup(groupName, restaurantId) {
        return axiosInstance.post(`group`, {
            name: groupName,
            restaurantId
        });
    },
    removeMenuGroup(groupId) {
        return axiosInstance.delete(`group/${groupId}`);
    }
}

export const tableApi = {
    getAll(restaurantId) {
        return axiosInstance.get(`restaurant/${restaurantId}/tables`);
    },
    addTable(tableName, restaurantId) {
        return axiosInstance.post(`table`, {
            name: tableName,
            restaurantId
        });
    },
}

export const receiptApi = {
    getReceiptById(id) {
        return axiosInstance.get(`receipt/${id}`);
    },
    addMealToReceipt(mealId, receiptId) {
        return axiosInstance.post(`receipt/meal`, {
            mealId,
            receiptId
        });
    },
    deleteMealFromReceipt(mealId, receiptId) {
        return axiosInstance.delete(`receipt/${receiptId}/meal/${mealId}`);
    },
    countReceipt(receiptId) {
        return axiosInstance.post(`receipt/count/${receiptId}`);
    }
}