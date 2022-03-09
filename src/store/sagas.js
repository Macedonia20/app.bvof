import { all } from 'redux-saga/effects'

//public
import accountSaga from './auth/register/saga';
import loginSaga from './auth/login/saga';
import forgetSaga from './auth/forgetpwd/saga';
import LayoutSaga from './layout/saga';

//Calendar 
import calendarSaga from "./calendar/saga";

//chat
import chatSaga from "./chat/saga"

//Ecommerce saga
import ecommerceSaga from "./e-commerce/saga";

export default function* rootSaga() {
    yield all([

        //public
        accountSaga(),
        loginSaga(),
        forgetSaga(),
        LayoutSaga(),
        calendarSaga(),
        ecommerceSaga(),
        chatSaga(),
    ])
}