import axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',//базовый url будет автоматически приклеиваться к строке
    withCredentials: true,
    headers: {
        'API-KEY': 'd26e77b0-fffd-47c6-b626-b4aa9e3fa7eb'
    }
})

//там где нет объекта с методами там нет this!
//Поэтому если функции нужен для запроса currentPage то передаем currentPage через параметры функции
//Создаем объект в котором есть метод getUsers, вспомогательный объект который не содержит данных но содержит метод.
export const usersAPI = {
    getUsers(currentPage: number = 1, pageSize: number = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
    }
}

export const followAPI = {
    postFallow(userId: string) {
        return instance.post(`follow/${userId}`).then(response => response.data)
    }
}
export const unFollowAPI = {
    deleteFallow(userId: string) {
        return instance.delete(`follow/${userId}`).then(response => response.data)
    }
}

export const profileAPI = {
    getProfile(userId: number) {
        return instance.get(`profile/` + userId).then(response => response.data)
    }
}
export const headerAPI = {
    getHeader() {
        return instance.get(`auth/me`)
    },
    getProfileId(id: number) {
        return instance.get(`profile/` + id).then(response => response.data)
    }
}
