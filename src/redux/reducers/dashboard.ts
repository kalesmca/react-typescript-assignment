import { Dashboard } from '../../config/interfaceList';
import { Action } from '../actionInterface';
import {ActionType} from '../../config/actions';

const initState: Dashboard = {
    dogList: [],
    isBucketFull:false,
    paginationIndex:0,
    sortBy:"nameAsc",
    allDataList:[]
         
}

const dashboard = (state:Dashboard=initState, action:Action) =>{
    switch(action.type) {
        case ActionType.GET_DOGS :{
            return {...state, dogList:[...state.dogList, ...action.data], isBucketFull: action.flag, paginationIndex:action.stateIndex}
        }
        case ActionType.UPDATE_DOGS:{
            return {
                ...state, 
                dogList: action.data, 
                isBucketFull: action.isBucketFull, 
                paginationIndex:action.stateIndex,
                allDataList:action.allDataList
            }
        }
               
        default :{
            return { ...state}
        }
    }

}

export default dashboard;