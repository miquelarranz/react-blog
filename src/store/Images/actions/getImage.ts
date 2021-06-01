import { IGetImageAction, GET_IMAGE } from '../types';
import { Dispatch } from 'react';
import { fetchImage } from '../../../services/ImagesAPI';
import { Image } from '../../../models/Image';

export function getImage(): (dispatch: Dispatch<IGetImageAction>) => void {
    return async (dispatch: Dispatch<IGetImageAction>) => {
        const image: Image = await fetchImage();
        dispatch(receiveImage(image));
    };
}

const receiveImage = (image: Image): IGetImageAction => {
    return {
        type: GET_IMAGE,
        payload: {
            image,
        },
    };
};
