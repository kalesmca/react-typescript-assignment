
import { screen, fireEvent } from '@testing-library/react';
import DashboardComponent from './dashboardComponent';
import { RenderWithRtl } from '../../config/testUtils';
const mockDashboardData = (noData:boolean = false) => {

    const AppConfig = {
        showSpinner : false,
        toastMsg:"my toast",
        showToast:true
    };
    const mockDogData= [
        {
            "weight": {
                "imperial": "6 - 13",
                "metric": "3 - 6"
            },
            "height": {
                "imperial": "9 - 11.5",
                "metric": "23 - 29"
            },
            "id": 1,
            "name": "Affenpinscher",
            "bred_for": "Small rodent hunting, lapdog",
            "breed_group": "Toy",
            "life_span": "10 - 12 years",
            "temperament": "Stubborn, Curious, Playful, Adventurous, Active, Fun-loving",
            "origin": "Germany, France",
            "reference_image_id": "BJa4kxc4X",
            "image": {
                "id": "BJa4kxc4X",
                "width": 1600,
                "height": 1199,
                "url": "https://cdn2.thedogapi.com/images/BJa4kxc4X.jpg"
            }
        }
    ]
  
    const mockState = {
        appConfig: AppConfig,
        dashboard: {dogList: noData? []:mockDogData,
            isBucketFull:false,
            paginationIndex:0,
            sortBy:"nameAsc",
            allDataList:noData? []:mockDogData}
    };
  
    return { mockState };
  }
describe("Dashboard component", ()=>{
    beforeEach(()=>{
        jest.resetAllMocks()
    })
    it("should render initial dasboard component", async()=>{
        const {mockState} = mockDashboardData();
        RenderWithRtl(<DashboardComponent/>,  {initialState: mockState})
        const containerElement = screen.getByTestId('dashboard-testId');
        expect(containerElement).toBeInTheDocument();
        
        const sortingElement = screen.getByText(/SortBy:/i);
        expect(sortingElement).toBeInTheDocument();
    })

    it("Should be able to search breed", async()=>{
        const {mockState} = mockDashboardData();
        RenderWithRtl(<DashboardComponent/>,  {initialState: mockState})
        const searchElement = screen.getByTestId('searchQuery');
        expect(searchElement).toBeInTheDocument();
        expect(searchElement).toHaveAttribute("type", "text");
        expect(searchElement).toBeEnabled();    
  
    })

    it("Should be able to sorting", async()=>{
        const {mockState} = mockDashboardData();
        const setSortQuery = jest.fn()
        RenderWithRtl(<DashboardComponent/>,  {initialState: mockState})
        const tabContainer = screen.getByTestId('tabsTest');
        expect(tabContainer).toBeInTheDocument();
        const tabElement = await screen.findAllByTestId('tab');
        expect(tabElement).toHaveLength(6)
        const heightTabElement = screen.getByText(/Height-Asc/i);
        expect(heightTabElement).toBeInTheDocument();
        fireEvent.click(heightTabElement)
    
    })

    it("Should be able test No data", async()=>{
        const {mockState} = mockDashboardData(true);
        const setSortQuery = jest.fn()
        RenderWithRtl(<DashboardComponent/>,  {initialState: mockState})
        const noDataContainer = screen.getByTestId('noData');
        expect(noDataContainer).toBeInTheDocument();
    
    })

    


   
    

   
})