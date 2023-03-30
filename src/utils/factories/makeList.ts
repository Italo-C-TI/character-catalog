export const makeList = (obj: object, listSize: number): object[] => {
    const list = [];

    for (let i = 0; i < listSize; i++) {
        list.push(obj);
    }

    return list;
}