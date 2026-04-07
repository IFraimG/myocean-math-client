import { AppEnums } from './../../constants/types';

export type setModalType = { type: typeof AppEnums.SET_MODAL, payload: boolean }
export const setModalAction = (isModal: boolean): setModalType => ({ type: AppEnums.SET_MODAL, payload: isModal })