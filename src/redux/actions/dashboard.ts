import dogsAPI from "../API/dogsAPI"
import * as actions from '../../config/actions';
import * as CONSTANTS from '../../config/constants';
import { getSortedList } from "../../config/utils";
import {ActionType} from '../../config/actions';
import { Action } from "../actionInterface";
import { Dispatch } from "redux";

import { Dog } from "../../config/interfaceList";


export const getDogsByBreedName = (query:string, isScrolling:boolean = false, currentState:any, sortByKey:string) =>async (dispatch:any) => {
    try{
        dispatch(updateSpinnerStatus(true))
        const selectedTabObj = CONSTANTS.SORT_TAP_LIST[sortByKey]

        let stateIndex = currentState.paginationIndex;
        stateIndex = isScrolling ? stateIndex+1 : 0;
        let dogsResp:any = []
        if(query){
            dogsResp = await dogsAPI.getDogByQuery(query, CONSTANTS.LIMIT, stateIndex);
        } else {
            dogsResp = await dogsAPI.getAllDogs(CONSTANTS.LIMIT,stateIndex);
        }
        
        console.log(dogsResp)
        if(dogsResp?.data && dogsResp.data?.length){
            dogsResp.data.map((data:any)=>{
                data.filteredHeight = parseInt(data.height.imperial.substring(0,2))
                data.filteredLife = parseInt(data.life_span.substring(0,2))
            })
            const sortedList = await getSortedList(dogsResp.data, selectedTabObj.key, selectedTabObj.type)
            // const unSortedList = 
            const result = sortedList.slice(0,  (stateIndex+1)*CONSTANTS.LIMIT)
            let bucketFull = result?.length< dogsResp?.data?.length ? false : true;
            dispatch(updateDogsList(result,sortedList, stateIndex, bucketFull))
            dispatch(updateSpinnerStatus(false))

        } 
        else {
            dispatch(updateDogsList([],[],0, true))
            dispatch(updateSpinnerStatus(false))

        }
    }
    catch(err){
        
        dispatch(updateSpinnerStatus(false))
        dispatch(updateToast(true, "Please try some other time."))

    }
}

export const getDogs =(data:Dog[], flag:boolean=false, stateIndex:number)=> {

    return async (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.GET_DOGS,
            data,
            flag,
            stateIndex
        });
    }
}

export const updateDogsList = (data:Dog[], sortedList:any[], stateIndex:number, isBucketFull:boolean) =>{
    return async (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.UPDATE_DOGS,
            data,
            stateIndex,
            isBucketFull,
            allDataList:sortedList
        });
    }
}

export const getSortedListByKey = (currentState:any, sortBy:string) => async(dispatch:any) =>{
    const selectedTabObj = CONSTANTS.SORT_TAP_LIST[sortBy]
    const sortedList = await getSortedList(currentState.allDataList, selectedTabObj.key, selectedTabObj.type)
    let stateIndex = 0;
    const result = sortedList.slice(0,  (stateIndex+1)*CONSTANTS.LIMIT)
    dispatch(updateDogsList(result,currentState.allDataList,stateIndex,false))
    
}

export const updateSpinnerStatus = (flag: boolean) =>{
    return async (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.UPDATE_SPINNER_STATUS,
            flag
        });
    }
    
}

export const updateToast = (flag: boolean, message:String) =>{
    return async (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.UPDATE_TOAST,
            toastMsg: message, 
            showToast:flag
        });
    }
}