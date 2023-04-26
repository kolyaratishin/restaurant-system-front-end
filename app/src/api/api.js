import axios from "axios";

const axiosInstance = axios.create({
    withCredentials: true,
    baseURL: "http://localhost:8080/api/",
});

export const importApi = {
    import(formData, restaurantId) {
        return axiosInstance.post(`import/restaurant/${restaurantId}`, formData,
            {
                headers: {
                    authorization: "Basic " + localStorage.getItem("userData"),
                }
            });
    },
    export(restaurantId) {
        return axiosInstance.get(`export/csv/${restaurantId}`,
            {
                responseType: 'blob',
                headers: {
                    authorization: "Basic " + localStorage.getItem("userData"),
                }
            });
    },
}

export const menuApi = {
    getAll(restaurantId) {
        return axiosInstance.get(`restaurant/${restaurantId}/menu`, {
            headers: {
                authorization: "Basic " + localStorage.getItem("userData"),
            }
        });
    },
    save(meal) {
        return axiosInstance.post(`meal`, meal, {
            headers: {
                authorization: "Basic " + localStorage.getItem("userData"),
            }
        });
    },
    removeMealFromMenuGroup(menuGroupId, mealId) {
        return axiosInstance.delete(`group/${menuGroupId}/meal/${mealId}`, {
            headers: {
                authorization: "Basic " + localStorage.getItem("userData"),
            }
        });
    },
    getMealGroupById(menuGroupId) {
        return axiosInstance.get(`group/${menuGroupId}`, {
            headers: {
                authorization: "Basic " + localStorage.getItem("userData"),
            }
        });
    },
    addMenuGroup(groupName, restaurantId) {
        return axiosInstance.post(`group`, {
            name: groupName,
            restaurantId
        }, {
            headers: {
                authorization: "Basic " + localStorage.getItem("userData"),
            }
        });
    },
    removeMenuGroup(groupId) {
        return axiosInstance.delete(`group/${groupId}`, {
            headers: {
                authorization: "Basic " + localStorage.getItem("userData"),
            }
        });
    }
}

export const tableApi = {
    getAll(restaurantId) {
        return axiosInstance.get(`restaurant/${restaurantId}/tables`, {
            headers: {
                authorization: "Basic " + localStorage.getItem("userData"),
            }
        });
    },
    addTable(tableName, restaurantId) {
        return axiosInstance.post(`table`, {
            name: tableName,
            restaurantId
        }, {
            headers: {
                authorization: "Basic " + localStorage.getItem("userData"),
            }
        });
    },
    getTableById(id) {
        return axiosInstance.get(`table/${id}`, {
            headers: {
                authorization: "Basic " + localStorage.getItem("userData"),
            }
        });
    },
    changeStatus(status,id) {
        return axiosInstance.post(`table/status/${id}?status=${status}`, {},{
            headers: {
                authorization: "Basic " + localStorage.getItem("userData"),
            }
        });
    },
}

export const receiptApi = {
    getReceiptById(id) {
        return axiosInstance.get(`receipt/${id}`, {
            headers: {
                authorization: "Basic " + localStorage.getItem("userData"),
            }
        });
    },
    addMealToReceipt(mealId, receiptId) {
        return axiosInstance.post(`receipt/meal`, {
            mealId,
            receiptId
        }, {
            headers: {
                authorization: "Basic " + localStorage.getItem("userData"),
            }
        });
    },
    deleteMealFromReceipt(mealId, receiptId) {
        return axiosInstance.delete(`receipt/${receiptId}/meal/${mealId}`, {
            headers: {
                authorization: "Basic " + localStorage.getItem("userData"),
            }
        });
    },
    countReceipt(receiptId) {
        return axiosInstance.post(`receipt/count/${receiptId}`, {}, {
            headers: {
                authorization: "Basic " + localStorage.getItem("userData"),
            }
        });
    }
}

export const userApi = {
    login(username, password) {
        localStorage.setItem(
            "userData",
            window.btoa(username + ":" + password)
        );
        return axiosInstance.get(`user/login`, {
            headers: {
                authorization: "Basic " + localStorage.getItem("userData"),
            }
        });
    },
    getUserByUsername(username) {
        return axiosInstance.get(`user?username=${username}`, {
            headers: {
                authorization: "Basic " + localStorage.getItem("userData"),
            }
        });
    },
    register(username, password) {
        return axiosInstance.post(`user/registration`, {
            username,
            password
        });
    },
}

export const statisticsApi = {
    getAllMealsInOrder(restaurantId) {
        return axiosInstance.get(`statistics/meals/count/order?restaurantId=${restaurantId}`, {
            headers: {
                authorization: "Basic " + localStorage.getItem("userData"),
            }
        });
    },
    getAllMealsGroupInOrder(restaurantId) {
        return axiosInstance.get(`statistics/mealsGroup/count/order?restaurantId=${restaurantId}`, {
            headers: {
                authorization: "Basic " + localStorage.getItem("userData"),
            }
        });
    },
}

export const employeeApi = {
    getAllEmployees(adminUsername) {
        return axiosInstance.get(`user/employee?username=${adminUsername}`, {
            headers: {
                authorization: "Basic " + localStorage.getItem("userData"),
            }
        });
    },
    addEmployee(employee, adminUsername) {
        return axiosInstance.post(`user/employee?username=${adminUsername}`, employee, {
            headers: {
                authorization: "Basic " + localStorage.getItem("userData"),
            }
        });
    },
    removeUser(id) {
        return axiosInstance.delete(`user/${id}`, {
            headers: {
                authorization: "Basic " + localStorage.getItem("userData"),
            }
        });
    },
}