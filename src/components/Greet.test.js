import { render, screen } from "@testing-library/react"
import Greet from "./Greet"

describe('Greet', () => {
    test('renders correctly', () => {
        render(<Greet />)
       const h1Elem  = screen.getByRole('heading', {
            level: 1
        })
        expect(h1Elem).toBeInTheDocument()
    })
    
    test('renders with prop', () => {
        render(<Greet name={"Anoj"} />)
        const h1Elem = screen.getByRole('heading', {
            name: "Hello Anoj"
        })
    
        expect(h1Elem).toBeInTheDocument()
    })

})
