import React, { useState } from 'react'
import PropTypes from 'prop-types'

import Layout from '../src/components/layout/Layout'

import { makeStyles } from '@material-ui/core/styles'

import { PollName, VotingSystem, Choices, AdditionalOptions } from '../src/components/pollCreator'

const useStyles = makeStyles(theme => ({


}))

const pageEnum = {
    POLL_NAME: 0,
    VOTE_SYSTEM: 1,
    POLL_CHOICES: 2,
    ADDL_OPTIONS: 3,
    CONFIRMATION: 4
}

export default function Create(props) {
    const classes = useStyles();

    const [pageNum, setPageNum] = useState(0);


    const handleButtonClick = (button) => { 
        switch(button){
            case 'prev':
                pageNum -= 1;
                break;
            case 'next':
                pageNum += 1;
                break;
            default:
                break;
        }
    }

    switch(page){
        case(pageEnum.POLL_NAME):
            return (<PollName />)
        case(pageEnum.VOTE_SYSTEM):
            return (<VotingSystem />)
        case(pageEnum.POLL_CHOICES):
            return (<Choices />)
        case(pageEnum.ADDL_OPTIONS):
            return (<AdditionalOptions />)
        default:
            break;
    }
}


