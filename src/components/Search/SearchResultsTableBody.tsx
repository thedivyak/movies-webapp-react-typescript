import {PaddedTableCell, StyledTableRow} from "../../styles/TableStyledComponents"
import {GridRating} from "../SharedComponents/Ratings"
import {RuntimeGrid} from "../SharedComponents/Runtime"
import {TableBody} from "@material-ui/core"
import * as React from "react"
import {useHistory} from "react-router"
import {connect} from "react-redux"
import {GenreChip} from "../SharedComponents/GenreChip"

interface IStyledTableBodyProps {
    movieSummaries: { map: (arg0: (movie: any) => JSX.Element) => React.ReactNode }
}

const SearchResultsTableBody: React.FC<IStyledTableBodyProps> = (props) => {
    let history = useHistory();
    const handleRowClick = (id: string) => {
        history.push(`/movie/${id}`)
    }

    return (
        <TableBody>
            {props.movieSummaries.map((movie) => (
                <StyledTableRow
                    key={movie.movieId}
                    onClick={() => handleRowClick(movie.movieId)}
                >
                    <PaddedTableCell>
                        {movie.title}
                        <br/>
                        {movie.genres.map((genre: string, i: number) =>
                                <GenreChip key={i} size="small" genre={genre}/>
                            )}
                    </PaddedTableCell>
                    <PaddedTableCell><GridRating rating={movie.rating}/></PaddedTableCell>
                    <PaddedTableCell><RuntimeGrid runtime={movie.runtime} page="search"/></PaddedTableCell>
                    <PaddedTableCell>{movie.crew.join(", ")} </PaddedTableCell>
                </StyledTableRow>
            ))}
        </TableBody>
    )
}

function mapStateToProps(state: { movieSummaries: []}) {
    return {
        movieSummaries: state.movieSummaries
    }
}

export default connect(mapStateToProps)(SearchResultsTableBody)