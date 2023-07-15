
import { render, screen } from '@testing-library/react';
import Header from './header';
import { Dog } from '../../config/interfaceList';


describe("header component", ()=>{
    beforeEach(()=>{
        jest.resetAllMocks()
    })
    it("should render initial header component", async()=>{
        render(<Header />);
        const containerElement = screen.getByTestId('header-test');
        expect(containerElement).toBeInTheDocument();
    })

   
})