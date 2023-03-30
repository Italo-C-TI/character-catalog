import { AxiosError } from 'axios';

export const isAxiosError = (error: AxiosError | undefined) => !!error?.isAxiosError;
