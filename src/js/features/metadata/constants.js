// Action
export const LOAD = 'METADATA/LOAD';
export const LOAD_USER = 'METADATA/LOAD_USER';
export const LOAD_USER_SUCCEEDED = 'METADATA/LOAD_USER/SUCCEEDED';
export const LOAD_USER_FAILED = 'METADATA/LOAD_USER/FAILED';
export const LOAD_OFFERS = 'METADATA/LOAD_OFFERS';
export const LOAD_OFFERS_SUCCEEDED = 'METADATA/LOAD_OFFERS/SUCCEEDED';
export const LOAD_OFFERS_FAILED = 'METADATA/LOAD_OFFERS/FAILED';
export const LOAD_USER_LOCATION = 'METADATA/LOAD_USER_LOCATION';
export const LOAD_USER_LOCATION_SUCCEEDED = 'METADATA/LOAD_USER_LOCATION/SUCCEEDED';
export const LOAD_USER_TRADE_NUMBER_SUCCEEDED = 'METADATA/LOAD_USER_TRADE_NUMBER/SUCCEEDED';

export const SET_CURRENT_USER = 'METADATA/SET_CURRENT_USER';

export const RESET_ADD_OFFER_STATUS = 'METADATA/RESET_ADD_OFFER_STATUS';
export const ADD_OFFER = 'METADATA/ADD_OFFER';
export const ADD_OFFER_SUCCEEDED = 'METADATA/ADD_OFFER/SUCCEEDED';
export const ADD_OFFER_FAILED = 'METADATA/ADD_OFFER/FAILED';
export const ADD_OFFER_PRE_SUCCESS = 'METADATA/ADD_OFFER/PRE_SUCCESS';

export const RESET_UPDATE_USER_STATUS = 'METADATA/RESET_UPDATE_USER_STATUS';
export const UPDATE_USER = 'METADATA/UPDATE_USER';
export const UPDATE_USER_SUCCEEDED = 'METADATA/UPDATE_USER/SUCCEEDED';
export const UPDATE_USER_FAILED = 'METADATA/UPDATE_USER/FAILED';
export const UPDATE_USER_PRE_SUCCESS = 'METADATA/UPDATE_USER/PRE_SUCCESS';

export const SIGN_MESSAGE = 'METADATA/SIGN_MESSAGE';
export const SIGN_MESSAGE_SUCCEEDED = 'METADATA/SIGN_MESSAGE_SUCCEEDED';
export const SIGN_MESSAGE_FAILED = 'METADATA/SIGN_MESSAGE_FAILED';

// Mapping
export const PAYMENT_METHODS = ['Cash (In person)', 'Bank Transfer', 'International wire'];
export const SORT_TYPES = ['Top rated', 'Most recent'];
