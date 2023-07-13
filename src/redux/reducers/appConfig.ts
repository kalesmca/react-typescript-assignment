import { AppConfig } from '../../config/interfaceList';
import { Action } from '../actionInterface';
import {ActionType} from '../../config/actions';


const initState: AppConfig = {
   showSpinner : false,
   toastMsg:"",
   showToast:false
         
}


const appConfig = (state:AppConfig =initState, action:Action) =>{
    switch(action.type) {
        
        case ActionType.UPDATE_SPINNER_STATUS:{
            return {
                ...state, 
                showSpinner: action.flag
            }
        }
        case ActionType.UPDATE_TOAST:{
            return {
                ...state, 
                toastMsg: action.toastMsg,
                showToast: action.showToast
            }
        }

               
        default :{
            return { ...state}
        }
    }

}

export default appConfig;