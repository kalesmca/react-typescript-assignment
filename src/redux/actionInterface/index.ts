import {ActionType} from '../../config/actions';
import {Dog} from '../../config/interfaceList';
interface UpdateSpinnerAction {
    type: ActionType.UPDATE_SPINNER_STATUS;
    flag:boolean
  }

interface UpdateToast {
  type: ActionType.UPDATE_TOAST,
  toastMsg: String, 
  showToast:boolean
}

interface UpdateDogAction {
  type: ActionType.UPDATE_DOGS,
  data:Dog[],
  stateIndex:number,
  isBucketFull:boolean,
  allDataList: Dog[]
   
}

interface GetDogsAction { 
  type: ActionType.GET_DOGS,
  data:Dog[],
  flag:boolean,
  stateIndex:number
}

export type Action = UpdateSpinnerAction | UpdateToast | UpdateDogAction | GetDogsAction 

