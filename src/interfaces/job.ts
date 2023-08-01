export interface Keyword {
    keyword: string;
    page: number;
}

export interface JobData {
    view: boolean;
    siteName: string;
    companyName: string;
    title: string;
    day: string;
    href: string | undefined;
    sector: string[];
    detailOption: {
        area: string;
        career: string;
        academic: string;
        typeOfEmployment: string;
    };
}

export interface CrawlingData {
    pagination: number[];
    searchList: JobData[];
}

export interface JobSlice {
    isLoading: boolean;
    error: string | undefined;
    crawlingData: CrawlingData;
}
