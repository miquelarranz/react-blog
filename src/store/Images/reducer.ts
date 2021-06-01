import { ImageActions, GET_IMAGE } from './types';
import { AppState } from '../index';
import { Image } from '../../models/Image';

export interface IImageState {
    items: Image[];
}
export const INITIAL_STATE: IImageState = {
    items: [],
};

export default function (state = INITIAL_STATE, action: ImageActions) {
    switch (action.type) {
        case GET_IMAGE:
            return { ...state, items: state.items.concat(action.payload.image) };

        default:
            return state;
    }
}
export const selectImages = (state: AppState) => state.user.items;
