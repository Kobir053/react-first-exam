import axios from "axios";
import { Mission } from "./types/MissionModel";

const API_URL: string = "https://reactexambackend.onrender.com/missions";
const API_KEY: string = "207593070";

export const getData = async (): Promise<Mission[]> => {
    try {
        const response = await axios.get<Mission[]>(`${API_URL}/${API_KEY}`);
        return response.data;
    } 
    catch (error: any) {
        throw new Error("could not get the data on GET request due to error: " + error.message);
    }
}

export const addData = async (newMission: Mission): Promise<Mission> => {
    try {
        const response = await axios.post<Mission>(`${API_URL}/${API_KEY}`, newMission);
        return response.data;
    }
     catch (error: any) {
        throw new Error("Could not post the new mission due to error: " + error.message);
    }
}

export const updateStatus = async (id: string): Promise<void> => {
    try {
        const response = await axios.post(`${API_URL}/${API_KEY}/progress/${id}`);
        console.log(response.data.message);
    } 
    catch (error: any) {
        throw new Error("could not update the mission due to error: " + error.message);
    }
}

export const deleteMission = async (id: string): Promise<void> => {
    try {
        const response = await axios.delete(`${API_URL}/${API_KEY}/${id}`);
        console.log("succeeded to delete: " + response.data);
    } 
    catch (error: any) {
        throw new Error("could not delete the mission due to error: " + error.message);
    }
}