
import { screen, fireEvent } from '@testing-library/react';
import ToastComponent from './toastComponent';
import { RenderWithRtl } from '../../config/testUtils';
import {Map} from 'immutable'
const mockToastData = () => {

    const AppConfig = {
        showSpinner : false,
        toastMsg:"my toast",
        showToast:true
    };
  
    const mockState = Map({
        appConfig: AppConfig,
        dashboard: {dogList: [],
            isBucketFull:false,
            paginationIndex:0,
            sortBy:"nameAsc",
            allDataList:[]}
    });
  
    return { mockState };
  }
describe("toast component", ()=>{
    beforeEach(()=>{
        jest.resetAllMocks()
    })
    it("should render initial toast component", async()=>{
        const {mockState} = mockToastData();
        RenderWithRtl(<ToastComponent/>,  {initialState: mockState})
        const containerElement = screen.getByTestId('toastContainer');
        expect(containerElement).toBeInTheDocument();
    })

    it("should render mock toast data", async()=>{
        const {mockState} = mockToastData();
        RenderWithRtl(<ToastComponent/>,  {initialState: mockState})
        const button = screen.getByRole('button');
        fireEvent.click(button)
    })

    it("should close toast action", async()=>{
        const {mockState} = mockToastData();
        const close = jest.fn();
        RenderWithRtl(<ToastComponent/>,  {initialState: mockState})
        const toastHeaderElement = screen.getByText('Show Toast');
        expect(toastHeaderElement).toBeInTheDocument();
        
    })

   
})