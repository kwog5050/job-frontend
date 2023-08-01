import axios from './axios';
import { handleApiError } from './handleError';
import { JobData, Keyword } from 'interfaces/job';

// 사람인 데이터 가져오기
const getSaraminList = async (data: Keyword): Promise<JobData[] | null> => {
    try {
        const res = await axios.get(`/saramin?keyword=${data.keyword}&page=${data.page}`);
        return res.data;
    } catch (error) {
        handleApiError(error);
        return null;
    }
};

// 잡코리아 데이터 가져오기
const getJobkoreaList = async (data: Keyword): Promise<JobData[] | null> => {
    try {
        const res = await axios.get(`/jobkorea?keyword=${data.keyword}&page=${data.page}`);
        return res.data;
    } catch (error) {
        handleApiError(error);
        return null;
    }
};

// 통합 데이터 가져오기
const getAllList = async (data: Keyword): Promise<JobData[] | null> => {
    try {
        const res = await axios.get(`/all?keyword=${data.keyword}&page=${data.page}`);
        return res.data;
    } catch (error) {
        handleApiError(error);
        return null;
    }
};

export { getSaraminList, getJobkoreaList, getAllList };
