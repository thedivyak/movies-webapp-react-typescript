import * as React from 'react'
import {MovieFilter} from "@material-ui/icons"
import {Link} from "react-router-dom"
import {bannerIconColor} from "../../styles/mainTheme"
import {Banner, Logo} from "./BannerStyledComponents"


const Navigation = () => {
    return (
        <Banner>
            <Link to='/'>
                <Logo>
                    <MovieFilter style={{ color:`${bannerIconColor}`, fontSize:35}} />
                </Logo>
            </Link>
        </Banner>
    )
}

export default Navigation