import axios from 'axios';

// 통신에러
const handleApiError = (error: any): void => {
    if (axios.isCancel(error)) {
        console.log('Request canceled:', error.message);
        return;
    }
    if (error.response) {
        // 요청이 이루어졌으며 서버가 2xx의 범위를 벗어나는 상태 코드로 응답
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
    } else if (error.request) {
        // 요청이 이루어 졌으나 응답을 받지 못함
        console.log(error.request);
    } else {
        // 오류를 발생시킨 요청을 설정하는 중에 문제가 발생
        console.log('Error', error.message);
    }
    console.log(error.config);
    // window.location.replace('/error');
};

// 통신 성공했는데 에러 터짐
const handleConnectionError = (res: any): boolean => {
    // 에러 코드 없이 에러나면
    if (/.*error*./.test(res)) {
        errorMessage(`FATAL ERROR!!! 관리자에게 문의해주세요` + res, true);
        return false;
    }
    return true;
};

// 에러 메세지
const errorMessage = (msg: string, isErrorPage: any): void => {
    alert(msg);
    if (isErrorPage) {
        // window.location.replace('/error');
    }
};

export { handleApiError, handleConnectionError };
