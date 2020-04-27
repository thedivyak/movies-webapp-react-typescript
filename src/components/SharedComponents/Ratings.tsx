import * as React from "react"
import {
    MovieRatingContainer,
    RatingContainer,
    RatingLeft,
    RatingNumberGrid,
    RatingRight,
    StyledRating,
    Votes
} from "../../styles/RatingStyledComponents"
import {Grid} from "@material-ui/core"


interface IGridRatingProps {
    rating: number
}

export const GridRating: React.FC<IGridRatingProps> = (props) => {
    return (
        <RatingContainer>
            <Grid container>
                <RatingNumberGrid item xs={12} sm={12} md={1}>{props.rating}</RatingNumberGrid>
                <Grid item xs={12} sm={12} md={4} >
                    <StyledRating
                        name="half-rating-read"
                        value={props.rating / 2}
                        precision={0.1}
                        size="small"
                        readOnly
                    />
                </Grid>
            </Grid>
        </RatingContainer>
    )
}

interface IMoviePageRatingProps {
    rating: number,
    votes: number
}

export const MovieRating: React.FC<IMoviePageRatingProps> = (props) => {

    return (
        <MovieRatingContainer>
            <RatingLeft>{props.rating}</RatingLeft>
            <RatingRight>
                <StyledRating
                    name="half-rating-read"
                    value={props.rating / 2}
                    precision={0.1}
                    size="small"
                    readOnly
                />
                <Votes>{props.votes.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} votes</Votes>
            </RatingRight>
        </MovieRatingContainer>
    )
}


