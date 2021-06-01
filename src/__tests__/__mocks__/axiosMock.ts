import axios from 'axios';

jest.mock('axios');
export const axiosMock = axios as jest.Mocked<typeof axios>;

export const clearAxiosMock = () => {
    axiosMock.get.mockClear();
};
