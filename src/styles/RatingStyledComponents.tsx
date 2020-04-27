import styled from "styled-components"
import withStyles from "@material-ui/core/styles/withStyles"
import {iconColor, subtleIconColor} from "./mainTheme"
import {Rating} from "@material-ui/lab"
import {Grid} from "@material-ui/core"

export const MovieRatingContainer = styled.div`
     display: inline-block;
`

export const RatingLeft = styled.div`
    padding-right: .25rem;
    display: inline-block;
    vertical-align: middle;
    font-size: 1.5rem;
`
export const RatingRight = styled.div`
    display: inline-block;
    vertical-align:middle;
    padding-right: 1rem;
`

export const StyledRating = withStyles({
    iconFilled: {
        color:`${iconColor}`
    },
    iconEmpty: {
        color:`${subtleIconColor}`
    }
})(Rating);

export const Votes = styled.div`
  font-size: .6rem;
  padding-left: .25rem;
  text-align: left;
  margin-top:-.3rem;
  
`
export const RatingNumberGrid = styled(Grid)`
    max-width: 15%;
    padding-right: 2rem;
`

export const RatingContainer = styled.div`
    display: flex;
    flexGrow: 1;
`