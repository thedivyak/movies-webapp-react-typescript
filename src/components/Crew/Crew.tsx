import * as React from "react"
import {connect} from "react-redux"
import * as actionCreators from "../../store/actions/globalActions"
import {ErrorMessage, Page, PageTitle} from "../../styles/SharedStyledComponents"
import ResultsTable from "../SharedComponents/ResultsTable"


interface ICrewProps {
    crewId: string,
    find_crew: (Crew: any) => void,
    name: string,
    match: any,
    clear_search_state: () => void,
    errorMessage: string,
    apiError: boolean

}

class Crew extends React.Component<ICrewProps> {
    componentDidMount(): void {
        const id = this.props.match.params.id
        this.props.find_crew(id)
    }

    componentWillUnmount(): void {
        this.props.clear_search_state()
    }

    render() {
        if (this.props.apiError) {
            return <ErrorMessage>{this.props.errorMessage}</ErrorMessage>
        }
        return (
            <Page>
                <PageTitle>{this.props.name}</PageTitle>
                <ResultsTable value="crew"/>
            </Page>
        )
    }
}

function mapStateToProps(state: { crewId: string; name: string; apiError: boolean; errorMessage: string }) {
    return {
        crewId: state.crewId,
        name: state.name,
        apiError: state.apiError,
        errorMessage: state.errorMessage
    }
}

function mapDispatchToProps(dispatch: any) {
    return {
        find_crew: (crew: string) => dispatch(actionCreators.findCrew(crew)),
        clear_search_state: () => dispatch(actionCreators.resetState())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Crew)