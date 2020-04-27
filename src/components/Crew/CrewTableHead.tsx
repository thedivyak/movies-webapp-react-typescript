import TableHead from "@material-ui/core/TableHead"
import TableRow from "@material-ui/core/TableRow"
import {PaddedTableCell} from "../../styles/TableStyledComponents"
import * as React from "react"


const CrewTableHead = () => {

    return(
        <TableHead>
            <TableRow>
                <PaddedTableCell>Movie</PaddedTableCell>
                <PaddedTableCell>Rating</PaddedTableCell>
                <PaddedTableCell>Runtime</PaddedTableCell>
            </TableRow>
        </TableHead>
    )}

export default CrewTableHead