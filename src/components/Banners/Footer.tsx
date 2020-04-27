import * as React from 'react'
import {Button, Dialog, DialogActions, DialogContent, DialogTitle} from '@material-ui/core'
import {FooterButton, FooterContainer} from '../../styles/BannerStyledComponents'

const Footer = () => {
    const [open, setOpen] = React.useState(false)

    const handleClick = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    return (
        <>
            <FooterContainer>
                <FooterButton onClick={handleClick}> About </FooterButton>
                <Dialog
                    open={open}
                    onClose={handleClose}
                >
                    <DialogTitle>
                        About
                    </DialogTitle>
                    <DialogContent>
                        Built by Divya Prem thedivyak@gmail.com. This WebApp presents results from a Movie API provided by IT.com.
                        Technologies used include React, TypeScript, Redux, & Material UI Components. Credits to Icon8, FlatIcon, & Material Icons
                        for the iconography.
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} color="primary" autoFocus>
                            Close
                        </Button>
                    </DialogActions>
                </Dialog>
            </FooterContainer>
        </>
    )
}

export default Footer