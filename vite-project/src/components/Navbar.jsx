import { Link } from 'react-router-dom'
import styled from 'styled-components'

function Navbar() {
    return (
        <NavBar>
            <Button>
                <Linking to='/'>Tasks</Linking>
            </Button>

            <Button>
                <Linking to='/deleted'>Deleted Tasks</Linking>
            </Button>
        </NavBar>
    )
}

export default Navbar

const Button = styled.button`
    border: none;
    line-height: 60px;
    background: none;
    padding: 0 20px;
`
const Linking = styled(Link)`
    text-decoration: none;
    color: #282886;
    font-weight: 500;
    font-size: 1.1rem;
    padding: 20px 20px;
`
const NavBar = styled.div`
    width: 100%;
    background-color: #97a83e;
    position: fixed;
    top: 0px;
    text-align: center;
    z-index: 10000;
`