
import { screen, fireEvent } from '@testing-library/react';
import Spinner from './spinnerComponents';
import { RenderWithRtl } from '../../config/testUtils';
const mockData = () => {

    const AppConfig = {
        showSpinner : true,
        toastMsg:"my toast",
        showToast:false
    };
  
    const mockState = {
        appConfig: AppConfig,
        dashboard: {dogList: [],
            isBucketFull:false,
            paginationIndex:0,
            sortBy:"nameAsc",
            allDataList:[]}
    };
  
    return { mockState };
  }
describe("Spinner component", ()=>{
    beforeEach(()=>{
        jest.resetAllMocks()
    })
    it("should render spinner", async()=>{
        const {mockState} = mockData();
        RenderWithRtl(<Spinner/>,  {initialState: mockState})
        const spinnerElement = screen.getByTestId('spinner-container');
        expect(spinnerElement).toBeInTheDocument();
    })

    

   
})