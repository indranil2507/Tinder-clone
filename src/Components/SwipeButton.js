import React from 'react'

import ReplayIcon from "@material-ui/icons/Replay";
import CloseIcon from "@material-ui/icons/Close";
import StarRateIcon from "@material-ui/icons/StarRate";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import FavoriteIcon from "@material-ui/icons/Favorite";
import IconButton from "@material-ui/core/IconButton"
import "./SwipeButton.css"


function SwipeButton() {
    return (
        <div className="swipeButtons">
            <IconButton className="swipeButtons__repeat">
                <ReplayIcon fontSize="small" />
            </IconButton>
            <IconButton className="swipeButtons__left">
                <CloseIcon fontSize="small" />
            </IconButton>
            <IconButton className="swipeButtons__star">
                <StarRateIcon fontSize="small" />
            </IconButton>
            <IconButton className="swipeButtons__right">
                <FavoriteIcon fontSize="small" />
            </IconButton>
            <IconButton className="swipeButtons__lightning">
                <FlashOnIcon fontSize="small" />
            </IconButton>
        </div>
    )
}

export default SwipeButton
