import React from 'react';
import { Box } from '@material-ui/core';
import { useLogoStyles } from '@utils/styles/Logo';


export default function FillLogo({size}) {
    const logoClasses = useLogoStyles(size);

    return (
        <Box className={logoClasses.container}>
            <Box className={logoClasses.firstBar}></Box>
            <Box className={logoClasses.secondBar}></Box>
            <Box className={logoClasses.thirdBar}></Box>
            <Box className={logoClasses.fourthBar}></Box>
        </Box>
    )
}