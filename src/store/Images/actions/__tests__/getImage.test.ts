import { generateMockStore } from '../../../../__tests__/__mocks__/mockStore';
import { axiosMock, clearAxiosMock } from '../../../../__tests__/__mocks__/axiosMock';
import { GET_IMAGE } from '../../types';
import { MockStore } from 'redux-mock-store';
import { AppState } from '../../../index';
import { getImage } from '../getImage';

let store: MockStore<AppState | {}, any>;

describe('Get Image Action Tests', () => {
    beforeEach(() => {
        store = generateMockStore({});
        clearAxiosMock();
    });

    it('Should dispatch a GET_IMAGE action with the new image source', async () => {
        const fakeUrl = 'url';
        axiosMock.get.mockResolvedValue({ request: { responseURL: fakeUrl } });

        const expectedActions = [
            {
                type: GET_IMAGE,
                payload: { image: { source: fakeUrl } },
            },
        ];

        await store.dispatch(getImage());

        expect(axiosMock.get).toHaveBeenCalledTimes(1);
        expect(store.getActions()).toEqual(expectedActions);
    });
});
