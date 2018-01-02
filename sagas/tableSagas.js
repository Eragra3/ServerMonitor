import { put, call } from 'redux-saga/effects';
import { makeData } from '../Api/api';
import * as types from '../constants/actionTypes';

export function* getTableData({ payload }){
    try{
        const data = yield call(makeData, payload);
        yield put({ type: types.GET_TABLE_DATA_SUCCESS, data});
    } catch(error){
        yield put({ type:types.GET_TABLE_DATA_ERROR, error });
    }
}