import TableContainer from "@material-ui/core/TableContainer"
import {Avatar, Table, TableBody} from "@material-ui/core"
import TableHead from "@material-ui/core/TableHead"
import TableRow from "@material-ui/core/TableRow"
import {Dot, MovieLink} from "../../styles/MovieStyledComponents"
import {StyledChip} from "../../styles/SharedStyledComponents"
import {PaddedTableCell, StyledTableRow} from "../../styles/TableStyledComponents"
import * as React from "react"
import {useHistory, withRouter} from "react-router"
import {connect} from "react-redux"

interface IMovieCrewTableProps {
    crew: any
}

const MovieFilmographyTable: React.FC<IMovieCrewTableProps> = (props) => {
    let history = useHistory()

    const handleRowClick = (id: string) => {
        history.push(`/crew/${id}`)
    }

    return (
        <TableContainer>
            <Table>
                <colgroup>
                    <col style={{width: '13%'}}/>
                    <col style={{width: '10%'}}/>
                    <col/>
                </colgroup>
                <TableHead>
                    <TableRow>
                        <PaddedTableCell>Title</PaddedTableCell>
                        <PaddedTableCell/>
                        <PaddedTableCell>Filmography</PaddedTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {Object.keys(props.crew).map((key: string, i: number) => (
                        <StyledTableRow key={i}>
                            <PaddedTableCell
                                onClick={() => handleRowClick(key)}
                            >
                                <MovieLink href={`/crew/${key}`}>{props.crew[key].name}</MovieLink>
                            </PaddedTableCell>
                            <PaddedTableCell
                                onClick={() => handleRowClick(key)}
                            >
                                {props.crew[key].roles.map((role: string, i: number) =>
                                    <StyledChip
                                        key={i}
                                        icon={<Avatar src={require(`../../styles/icons/${role}.png`)}/>}
                                        size="small"
                                        label={role}
                                        variant="outlined"
                                    />
                                )}
                            </PaddedTableCell>
                            <PaddedTableCell>
                                {props.crew[key].movies.map((movie: any, i: number) => (
                                    <React.Fragment key={i}>
                                        <MovieLink key={i} href={`/movie/${movie.id}`}> {movie.title} </MovieLink>
                                        <Dot></Dot>
                                    </React.Fragment>
                                ))}
                            </PaddedTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

function mapStateToProps(state: { crew: [] }) {
    return {
        crew: state.crew
    }
}

export default withRouter(connect(mapStateToProps)(MovieFilmographyTable))
