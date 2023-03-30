export const Endpoints = {
    authorization: () => '/v1/authorization',
    search: () => '/v1/search',

    character: {
        list: '/character',
        details: (id: string) => `/character/${id}`,
    },

    location: {
        list: '/location',
        details: (id: string) => `/location/${id}`,
    },

    episode: {
        list: '/episode',
        details: (id: string) => `/episode/${id}`,
    },
};
