import TableRow from "@material-ui/core/TableRow"
import {PaddedTableCell, StyledTableHead} from "../../styles/TableStyledComponents"
import {TableSortLabel} from "@material-ui/core"
import * as React from "react"
import {connect} from "react-redux"
import * as actionCreators from "../../store/actions/globalActions"
import {UnfoldMore} from "@material-ui/icons"

interface ISearchResultsTableHeadProps {
    orderBy: { [x: string]: { sort: "desc" | "asc" | undefined } },
    on_request_sort: (event: any, property: any) => void,
}

const SearchResultsTableHead: React.FC<ISearchResultsTableHeadProps> = (props) => {
    const createSortHandler = (property: string) => (event: React.MouseEvent<unknown>) => {
        props.on_request_sort(event, property)
    }
    return (
        <StyledTableHead>
            <TableRow>
                <PaddedTableCell>
                    <TableSortLabel
                        IconComponent={UnfoldMore}
                        active={true}
                        direction={props.orderBy['title'].sort}
                        onClick={createSortHandler('title')}
                    >
                        Movie
                    </TableSortLabel>
                </PaddedTableCell>
                <PaddedTableCell>
                    <TableSortLabel
                        IconComponent={UnfoldMore}
                        active={true}
                        direction={props.orderBy['rating'].sort}
                        onClick={createSortHandler('rating')}
                    >
                        Rating
                    </TableSortLabel>
                </PaddedTableCell>
                <PaddedTableCell>Runtime</PaddedTableCell>
                <PaddedTableCell>Crew</PaddedTableCell>
            </TableRow>
        </StyledTableHead>
    )
}

function mapStateToProps(state: any) {
    return {
        orderBy: state.orderBy,
    }
}

function mapDispatchToProps(dispatch: any) {
    return {
        on_request_sort: (event: any, property: any) => dispatch(actionCreators.sortByTitleOrRating(event, property))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchResultsTableHead)