import React, { useState } from 'react'
import PropTypes from 'prop-types'

import Layout from '../src/components/layout/Layout'

import { makeStyles } from '@material-ui/core/styles'

import { Name, VotingSystem, Choices, AdditionalOptions } from '../src/components/pollCreator'

const useStyles = makeStyles(theme => ({


}))

const pageEnum = {
    NAME: 0,
    VOTE_SYSTEM: 1,
    POLL_CHOICES: 2,
    ADDL_OPTIONS: 3
}

export default function Create(props) {
    const classes = useStyles();

    const [page, setPage] = useState(0);

    switch(page){
        case(pageEnum.NAME):
            return (<Name />)
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


