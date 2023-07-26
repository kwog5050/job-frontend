export interface JobData {
    companyName: string;
    title: string;
    detailOption: {
        area: string;
        career: string;
        academic: string;
        typeOfEmployment: string;
    };
}

export interface JobSlice {
    isLoading: boolean;
    error: string | undefined;
    searchingList: JobData[];
}
