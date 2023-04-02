export const Endpoints = {
    character: {
        list: '/character',
        mutipleCharacters: (ids: number[]) => `/character/${ids}`,
        details: (id: string) => `/character/${id}`,
    }
};
