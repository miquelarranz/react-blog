import { GET_IMAGE, IGetImageAction } from '../types';
import reducer, { IImageState } from '../reducer';

describe('Image Reducer Test', () => {
    it('Should add a new image to the state after having received a GET_IMAGE action', () => {
        const firstImage = { source: 'image' };
        const newImage = { source: 'test' };

        const state: IImageState = {
            items: [firstImage],
        };

        const expectedState: IImageState = {
            items: [firstImage, newImage],
        };

        const action: IGetImageAction = {
            type: GET_IMAGE,
            payload: { image: newImage },
        };

        expect(reducer(state, action)).toEqual(expectedState);
    });
});
