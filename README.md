# 채용정보들을 한눈에 볼수있는 사이트

## 폴더구조

### src
> 1. apis 통신 코드 모음
>> axios.ts 

    baseUrl 설정

        const instance = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}`,
        });

2. assests 
    