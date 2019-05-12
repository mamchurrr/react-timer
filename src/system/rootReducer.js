import { combineReducers } from 'redux'
import timer from '../components/pages/Timer/reducer'
import header from '../components/Header/reducer'

export default combineReducers ({
    timer,
    header   
})