export const GET_IMAGE = 'GET_IMAGE';
export type GET_IMAGE = typeof GET_IMAGE;
import { Image } from '../../models/Image';

export interface IGetImageAction {
    type: GET_IMAGE;
    payload: {
        image: Image;
    };
}

export type ImageActions = IGetImageAction;
