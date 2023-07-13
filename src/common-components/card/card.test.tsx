import { render, screen } from '@testing-library/react';
import CardComponent from './cardComponent';
import { Dog } from '../../config/interfaceList';

const MockDog:Dog = {
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
describe("header component", ()=>{
    beforeEach(()=>{
        jest.resetAllMocks()
    })
    it("should render initial props", async()=>{
        render(<CardComponent dog={MockDog}/>);
        const containerElement = screen.getByTestId('cardTest');
        expect(containerElement).toBeInTheDocument();
    })

    it("should render with props data", async()=>{
        render(<CardComponent dog={MockDog}/>);
        const breedNameElement = screen.getByText(/Affenpinscher/i);
        expect(breedNameElement).toBeInTheDocument();
        const heightElement = screen.getByText(/9 - 11.5/i);
        expect(heightElement).toBeInTheDocument();
        const lifeSpanElement = screen.getByText(/10 - 12 years/i);
        expect(lifeSpanElement).toBeInTheDocument();
        const temperamentElement = screen.getByText(/Stubborn, Curious, Playful, Adventurous, Active, Fun-loving/i);
        expect(temperamentElement).toBeInTheDocument();
    })
})