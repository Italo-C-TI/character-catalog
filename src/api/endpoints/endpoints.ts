export const Endpoints = {
    character: {
        list: '/character',
        details: (id: string) => `/character/${id}`,
    }
};
