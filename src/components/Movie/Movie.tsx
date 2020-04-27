import * as React from "react"
import {connect} from "react-redux";
import * as actionCreators from "../../store/actions/globalActions";
import {ErrorMessage, Page, PageTitle,} from "../../styles/SharedStyledComponents"
import {Detail, Genres, MovieDetails, MovieOverviewContainer,} from "./MovieStyledComponents";
import {Divider} from "@material-ui/core";
import {Runtime} from "../SharedComponents/Runtime";
import {MovieRating} from "../SharedComponents/Ratings";
import MovieCrewTable from "./MovieFilmographyTable";
import {GenreChip} from "../SharedComponents/GenreChip";

interface IMovieProps {
    id: string,
    title: string,
    genres: [],
    year: number,
    runtime: number,
    rating: number,
    votes: number,
    crew: any,
    match: any,
    find_movie: (movie: any) => void,
    clear_search_state: () => void,
    apiError: boolean,
    errorMessage: string
}

class Movie extends React.Component<IMovieProps> {
    componentDidMount(): void {
        const id = this.props.match.params.id
        this.props.find_movie(id)
    }

    componentWillUnmount(): void {
        this.props.clear_search_state()
    }

    render() {
        if (this.props.apiError) {
            return <ErrorMessage>{this.props.errorMessage}</ErrorMessage>
        }
        if (this.props.title === "") {
            return <></>
        }

        return (
            <Page>
                <PageTitle>{this.props.title}</PageTitle>
                <Divider/><Divider/>
                <MovieOverviewContainer>
                    <MovieRating rating={this.props.rating} votes={this.props.votes}/>
                    <MovieDetails>
                        <Detail>
                            {this.props.year}
                        </Detail>
                        <Detail>
                            <Runtime runtime={this.props.runtime}/>
                        </Detail>
                    </MovieDetails>
                    <Genres>
                        {this.props.genres.map((genre: string, i: number) => (
                            <GenreChip key={i} genre={genre}/>
                        ))}
                    </Genres>
                </MovieOverviewContainer>
                <Divider/>
                <Divider/>
                <MovieCrewTable/>
            </Page>
        )
    }
}

function mapStateToProps(state: any) {
    return {
        movieId: state.id,
        title: state.title,
        genres: state.genres,
        year: state.year,
        runtime: state.runtime,
        rating: state.rating,
        votes: state.votes,
        apiError: state.apiError,
        errorMessage: state.errorMessage
    }
}

function mapDispatchToProps(dispatch: any) {
    return {
        find_movie: (movie: string) => dispatch(actionCreators.findMovie(movie)),
        clear_search_state: () => dispatch(actionCreators.resetState())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Movie);