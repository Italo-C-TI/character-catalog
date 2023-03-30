import { Paginated } from "models";

export const makePagination = (pagination: Partial<Paginated> = {}) => {
    return {
        info: {
            count: 10,
            pages: 5,
            next: null,
            prev: null,
        },
        results: [],
        ...pagination,
    };
};