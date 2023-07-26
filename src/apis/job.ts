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

export { getSaraminList };
