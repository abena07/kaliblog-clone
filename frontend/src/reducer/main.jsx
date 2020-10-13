import React from "react";


export const initialStore = {
    isAuthenticated: false,
    loading: false
}


export const storeReducer = (state, action) => {
    switch (action.type) {
        case "SET_AUTH":
            return {
                ...state,
                isAuthenticated: action.is_authenticated
            }
        case "SET_LOADING":
            return {
                ...state,
                isLoading: action.is_loading
            }
        default:
            return initialStore
    }
}