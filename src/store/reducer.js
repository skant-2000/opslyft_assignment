import { SET_COUNTRY_DATA, SET_COUNTRY_DATA_TO_SHOW, SET_FROM_DATE, SET_FROM_INDEX, SET_TO_DATE, SET_TO_INDEX } from "./actionType";
import { initialState } from "./initialState";

export const reducer = (store = initialState, {type, payload}) => {
    switch(type) {
        case SET_COUNTRY_DATA: {
            return {
                ...store,
                countryData: payload
            }
        }
        case SET_FROM_DATE: {
            return {
                ...store,
                fromDate: payload
            }
        }
        case SET_TO_DATE: {
            return {
                ...store,
                toDate: payload
            }
        }
        case SET_FROM_INDEX: {
            return {
                ...store,
                fromDateIndex: payload
            }
        }
        case SET_TO_INDEX: {
            return {
                ...store,
                toDateIndex: payload
            }
        }
        case SET_COUNTRY_DATA_TO_SHOW: {
            return {
                ...store,
                countryDataToShow: payload
            }
        }
        default: {
            return store
        }
    }
}