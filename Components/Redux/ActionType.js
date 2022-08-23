import { FORM_DATA, SET_BOOKINGLIST, SET_FORMDATA } from './Action'
// import * as actionTypes from './ActionTypes'

export const formdata = (payload) => {
    return {
        type: FORM_DATA,
        payload
    }
}

export const setFormdata = (payload) => {
    return {
        type: SET_FORMDATA,
        payload
    }
}

export const setBookingList = (payload) => {
    return {
        type: SET_BOOKINGLIST,
        payload
    }
}