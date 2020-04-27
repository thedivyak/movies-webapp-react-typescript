import {StyledChip} from "../../styles/SharedStyledComponents"
import {Avatar} from "@material-ui/core"
import * as React from "react"

const genreList = [
    'action',
    'adventure',
    'biography',
    'comedy',
    'crime',
    'drama',
    'fantasy',
    'history',
    'horror',
    'mystery',
    'sci-fi',
    'thriller',
    'war'
]

interface IGenresProps {
    genre: string,
    size?: "small" | "medium" | undefined
}
export const GenreChip: React.FC<IGenresProps> = (props) => {
    const genreIcon = genreList.indexOf(props.genre) > -1 ? props.genre : "genre"
    return (
        <StyledChip
            size={props.size}
            icon={<Avatar src={require(`../../styles/icons/${genreIcon}.png`)}/>}
            label={props.genre}
        />
    )
}