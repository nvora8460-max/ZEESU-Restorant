import { axiosInstance } from "../config/axios";

export const reservationApi = async (reservationData) => {
    const res = await axiosInstance.post("/reservation/send", reservationData);
    return res;
}