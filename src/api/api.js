import http from './http';
export const baseUrl = "http://192.168.50.125:9101";


//解析token
export const checkToken = () => {
    return http.requestGet(baseUrl + '/uc/account/token');
};
//登录
export const doLogin = (verifyCode, user) => {
    return http.requestPost('/uc/account/' + verifyCode + 'from=p', user);
};