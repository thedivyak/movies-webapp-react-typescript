import styled from "styled-components"
import {TextField} from "@material-ui/core"

export const SearchBarContainer = styled.div`
    margin: auto; 
    display: flex;
    align-items: center;
`

export const SearchResults = styled.div`
    margin: 1rem 0;
    display: inline-block;
    width: 100%;
    
    @media screen and (max-height: 1200px) {
        margin: 0rem;
    }
`

export const SearchBar = styled(TextField)`
    display: flex;
    width: 100%;
`
