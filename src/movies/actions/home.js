export const REQUEST_DATA_HOME = 'REQUEST_DATA_HOME';
// action la action se di qua middleware cua redux saga
// action nay khong truc tiep dc dispatch vao trong store
export const getRequestDataHome = page => ({
    type: REQUEST_DATA_HOME,
    page
});
// sau day la cac action cua redux saga khi nhan action tu ben ngoai truyen vao
// action cua redux se la action dc dispatch vao trong store
export const LOADING_REQUEST_DATA = 'LOADING_REQUEST_DATA';
export const loadingRequestDataHome = loading => ({
    type: LOADING_REQUEST_DATA,
    loading
});
export const REQUEST_DATA_HOME_SUCCESS = 'REQUEST_DATA_HOME_SUCCESS';
export const requestDataHomeSuccess = dataMovie => ({
    type: REQUEST_DATA_HOME_SUCCESS,
    dataMovie
});
export const REQUEST_DATA_HOME_FAILURE = 'REQUEST_DATA_HOME_FAILURE';
export const requestDataHomeFailure = error => ({
    type: REQUEST_DATA_HOME_FAILURE,
    error
});
