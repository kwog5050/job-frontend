import axios from './axios';
import { handleApiError } from './handleError';

// 사람인 데이터 가져오기
const getSaraminList = async (data: string): Promise<any> => {
    try {
        const res = await axios.post('/saramin', data);
        return res.data;
    } catch (error) {
        handleApiError(error);
    }
};

// 잡코리아 데이터 가져오기
const getJobkoreaList = async (data: string): Promise<any> => {
    try {
        const res = await axios.post('/jobkorea', data);
        return res.data;
    } catch (error) {
        handleApiError(error);
    }
};

// 통합 데이터 가져오기
const getAllList = async (data: string): Promise<any> => {
    try {
        const res = await axios.post('/all', data);
        return res.data;
    } catch (error) {
        handleApiError(error);
    }
};

export { getSaraminList, getJobkoreaList, getAllList };
