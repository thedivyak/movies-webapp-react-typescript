import * as React from "react"
import {Grid} from "@material-ui/core"
import {NoWrap} from "../../styles/TableStyledComponents"

interface IRuntimeProps {
    runtime: number,
    page?: string
}

export const RuntimeGrid: React.FC<IRuntimeProps> = (props) => {
    const hour = Math.floor(props.runtime / 60)
    const min = Math.floor(props.runtime % 60)
    if (props.page === "crew") {
        return (
            <Grid container>
                <Grid item
                    xs={12} sm={4} md={2} lg={2}>
                    <NoWrap>{hour > 0 ? `${hour} hr${hour > 1 ? "s" : ""} ` : ""}</NoWrap>
                </Grid>
                <Grid item
                    xs={12} sm={4} md={2} lg={2}>
                    <NoWrap>{min > 0 ? `${min} min${min > 1 ? "s" : ""}` : ""}</NoWrap>
                </Grid>
            </Grid>
        )
    } else {
        return (
            <Grid container>
                <Grid item
                    xs={12} sm={12} md={6} lg={4}>
                    <NoWrap>{hour > 0 ? `${hour} hr${hour > 1 ? "s" : ""} ` : ""}</NoWrap>
                </Grid>
                <Grid item
                    xs={12} sm={12} md={6} lg={4}>
                    <NoWrap>{min > 0 ? `${min} min${min > 1 ? "s" : ""}` : ""}</NoWrap>
                </Grid>
            </Grid>

        )
    }
}

export const Runtime: React.FC<IRuntimeProps> = (props: { runtime: number }) => {
    const hour = Math.floor(props.runtime / 60)
    const min = Math.floor(props.runtime % 60)
    return (
        <React.Fragment>
           {hour > 0 ? `${hour} hr${hour > 1 ? "s" : ""} ` : ""} {min > 0 ? `${min} min${min > 1 ? "s" : ""}` : ""}
        </React.Fragment>
    )
}





