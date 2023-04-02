export type Pagination = {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
};

export type Paginated<T = any> = {
    results: T[];
    info: Pagination;
};

export type PageParams = {
    page?: number;
    size?: number;
};

export type PaginationParams = {
    current?: number;
    pages?: number;
    size?: number;
    update?: (params: Required<PageParams>) => void;
};