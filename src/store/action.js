import { SET_COUNTRY_DATA, SET_COUNTRY_DATA_TO_SHOW, SET_FROM_DATE, SET_FROM_INDEX, SET_TO_DATE, SET_TO_INDEX } from "./actionType";

export const setCountryData = (data) => ({
    type: SET_COUNTRY_DATA,
    payload: data
})

export const setFromDate = (date) => ({
    type: SET_FROM_DATE,
    payload: date
})

export const setToDate = (date) => ({
    type: SET_TO_DATE,
    payload: date
})

export const setFromIndex = (index) => ({
    type: SET_FROM_INDEX,
    payload: index
})

export const setToIndex = (index) => ({
    type: SET_TO_INDEX,
    payload: index
})

export const setCountryDataToShow = (data) => ({
    type: SET_COUNTRY_DATA_TO_SHOW,
    payload: data
})