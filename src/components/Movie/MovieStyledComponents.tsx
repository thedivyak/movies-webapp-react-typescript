import styled from "styled-components"
import {subtleTextColor} from "../../styles/mainTheme"

export const MovieOverviewContainer = styled.div`
    display: block;
    padding-top:1.5rem;
`

export const MovieDetails = styled.div`
    display: inline-block;
    vertical-align:middle;
    padding-left: 1rem;
`
export const Detail = styled.div`
    padding-right: 1.5rem;
    display: inline-block;
`

export const Genres = styled.div`
    padding: 2rem .5rem;
`

export const MovieLink = styled.a`
    padding-right: .5rem;
    text-decoration: none;
    color: black;
    
    &:hover {
        text-decoration: underline;
    }
    
    &:visited {
        color: ${subtleTextColor};
    }
`

export const Dot = styled.span`
    height: .25rem;
    width: .25rem;
    background-color: #b0bec5;
    border-radius: 50%;
    display: inline-block;
    vertical-align: middle;
    margin-right: .5rem;
      
    &:last-child {
        background-color:transparent;
    }
`