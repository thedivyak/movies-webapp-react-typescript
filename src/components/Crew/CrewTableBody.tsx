import {PaddedTableCell, StyledTableRow} from "../../styles/TableStyledComponents"
import {GridRating} from "../SharedComponents/Ratings"
import {RuntimeGrid} from "../SharedComponents/Runtime"
import {TableBody} from "@material-ui/core"
import * as React from "react"
import {useHistory} from "react-router"
import {connect} from "react-redux"

interface ICrewTableBodyProps {
    movieSummaries: { map: (arg0: (movie: { movieId: string; title: string; rating: number; runtime: number; }) => JSX.Element) => React.ReactNode; }
}

const CrewTableBody: React.FC<ICrewTableBodyProps> = (props) => {
    let history = useHistory()
    const handleRowClick = (id: string) => {
        history.push(`/movie/${id}`)
    }

    return (
        <TableBody>
            {props.movieSummaries.map((movie: { movieId: string; title: string; rating: number; runtime: number; }) => (
                <StyledTableRow key={movie.movieId} onClick={() => handleRowClick(movie.movieId)}>
                    <PaddedTableCell>{movie.title}</PaddedTableCell>
                    <PaddedTableCell><GridRating rating={movie.rating}/></PaddedTableCell>
                    <PaddedTableCell><RuntimeGrid runtime={movie.runtime} page="crew"/></PaddedTableCell>
                </StyledTableRow>
            ))}
        </TableBody>)
}

function mapStateToProps(state: { movieSummaries: any }) {
    return {
        movieSummaries: state.movieSummaries
    }
}

export default connect(mapStateToProps)(CrewTableBody)