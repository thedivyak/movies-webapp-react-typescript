import * as React from "react"
import {Table} from "@material-ui/core"
import TableContainer from "@material-ui/core/TableContainer"
import StyledTableBody from "../Search/SearchResultsTableBody"
import SearchResultsTableHead from "../Search/SearchResultsTableHead"
import CrewTableHead from "../Crew/CrewTableHead"
import CrewTableBody from "../Crew/CrewTableBody"

const ResultsTable = (page: { value: string }) => {
    return (
        <TableContainer>
            <Table>
                {page.value === "search" &&
                <React.Fragment>
                    <colgroup>
                        <col style={{width: '35%'}}/>
                        <col style={{width: '15%'}}/>
                        <col style={{width: '13%'}}/>
                        <col style={{width: '37%'}}/>
                    </colgroup>
                    <SearchResultsTableHead/>
                    <StyledTableBody/>
                </React.Fragment>
                }
                {page.value === "crew" &&
                <React.Fragment>
                    <colgroup>
                        <col style={{width: '25%'}}/>
                        <col style={{width: '20%'}}/>
                        <col style={{width: '20%'}}/>
                    </colgroup>
                    <CrewTableHead/>
                    <CrewTableBody/>
                </React.Fragment>
                }
            </Table>
        </TableContainer>
    )
}

export default ResultsTable
