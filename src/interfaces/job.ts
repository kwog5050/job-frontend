export interface JobData {
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

export interface JobSlice {
    isLoading: boolean;
    error: string | undefined;
    searchingList: JobData[] | undefined;
}
