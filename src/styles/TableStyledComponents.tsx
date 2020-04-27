import styled from "styled-components"
import {TableCell, TableHead, TableRow} from "@material-ui/core"
import {mainColor, tableBodyAlternateRowColor} from "./mainTheme"
import withStyles from "@material-ui/core/styles/withStyles"

export const StyledTableRow = styled(TableRow)`
    &:nth-child(odd) {
        background: ${tableBodyAlternateRowColor};
    }
    
    &:hover{
        background: #cfd8dc;
        cursor: pointer;
    }
`

export const PaddedTableCell = withStyles({
    root: {
        borderBottom: "none"
    }
})(TableCell);

export const NoWrap = styled.div`
    white-space: nowrap;
    margin-right:1rem;
`

export const StyledTableHead = styled(TableHead)`
    color: ${mainColor};
`
