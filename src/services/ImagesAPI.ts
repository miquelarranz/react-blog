import axios, { AxiosResponse } from 'axios';
import { Image } from '../models/Image';
import { GET_IMAGE_ROUTE } from './routes';

export const fetchImage = async (): Promise<Image> => {
    try {
        const response: AxiosResponse = await axios.get(`${GET_IMAGE_ROUTE}`);

        const request = response && response.request;

        if (request) {
            const image: Image = { source: request.responseURL };
            return image;
        }
    } catch (error) {
        throw new Error(error);
    }
};
