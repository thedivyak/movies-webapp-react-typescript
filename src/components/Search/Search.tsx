import * as React from "react"
import {Component} from "react"
import {connect} from "react-redux"

import * as actionCreators from "../../store/actions/globalActions"
import {ErrorMessage, Page, PageTitle,} from "../../styles/SharedStyledComponents"
import {SearchBar, SearchBarContainer, SearchResults} from "./SearchStyledComponents"
import {Search as SearchIcon} from "@material-ui/icons"
import ResultsTable from "../SharedComponents/ResultsTable"
import {TablePagination} from "@material-ui/core"
import {iconColor} from "../../styles/mainTheme"

interface SearchProps {
    search_movies: (searchTerm: string) => void,
    movieSummaries: [],
    currentPage: number,
    resultsTotal: number,
    rowsPerPage: number,
    change_page: (event: any, newPage: number) => void,
    change_rows_per_page: (event: any) => void,
    on_request_sort: (event:any, property:any) => void,
    clear_search_state: () => void,
    errorMessage: string,
    apiError: boolean
}

interface SearchState {
    searchTerm: string
}

class Search extends Component<SearchProps, SearchState> {
    constructor(props: SearchProps) {
        super(props)
        this.state = {
            searchTerm: "",
        }
    }

    componentDidMount(): void {
        this.props.search_movies('')
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
                <PageTitle>Movies</PageTitle>
                <SearchBarContainer>
                    <SearchIcon style={{color:`${iconColor}`, fontSize: 50}}/>
                    <SearchBar
                        variant="outlined"
                        type="search"
                        label="Search by Title, Genre, or Crew"
                        onChange={e => {
                            this.setState(({searchTerm: e.target.value}))
                            this.props.search_movies(e.target.value)
                        }}
                    >
                    </SearchBar>
                </SearchBarContainer>

                {this.props.resultsTotal > 0 &&
                <SearchResults>
                    <ResultsTable value="search"/>
                    <TablePagination
                        rowsPerPageOptions={[5, 10, 25, 50]}
                        component="div"
                        count={this.props.resultsTotal}
                        rowsPerPage={this.props.rowsPerPage}
                        page={this.props.currentPage}
                        onChangePage={(e,newPage) => this.props.change_page(e, newPage)}
                        onChangeRowsPerPage={(e) => this.props.change_rows_per_page(e)}
                    />
                </SearchResults>
                }

                {(this.props.resultsTotal === 0 && this.state.searchTerm !== "" ) &&
                <ErrorMessage>{this.props.errorMessage}</ErrorMessage>}
            </Page>

        )
    }
}

function mapStateToProps(state: any) {
    return {
        searchTerm: state.searchTerm,
        movieSummaries: state.movieSummaries,
        searchResultsTotal: state.searchResultsTotal,
        currentPage: state.currentPage,
        rowsPerPage: state.rowsPerPage,
        resultsTotal: state.searchResultsTotal,
        errorMessage: state.errorMessage,
        apiError: state.apiError,

    }
}

function mapDispatchToProps(dispatch: any) {
    return {
        change_page: (event: any, newPage:number) => dispatch(actionCreators.changePage(event, newPage)),
        search_movies: (searchTerm: string) => dispatch(actionCreators.searchMovies(searchTerm)),
        change_rows_per_page: (event: any) => dispatch(actionCreators.changeRowsPerPage(event)),
        on_request_sort: (event:any, property:any) => dispatch(actionCreators.sortByTitleOrRating(event, property)),
        clear_search_state: () => dispatch(actionCreators.resetState())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)