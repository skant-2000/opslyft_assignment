import { SET_COUNTRY_DATA } from "./actionType";
import { initialState } from "./initialState";

export const reducer = (store = initialState, {type, payload}) => {
    switch(type) {
        case SET_COUNTRY_DATA: {
            return {
                ...store,
                countryData: payload
            }
        }
        default: {
            return store
        }
    }
}