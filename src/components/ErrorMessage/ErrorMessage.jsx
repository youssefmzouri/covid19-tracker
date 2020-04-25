import React from 'react';
import {Alert, AlertTitle}  from "@material-ui/lab";

const ErrorMessage =  ({severity, title,  message}) =>  {
    return (
        <Alert severity={severity}>
            <AlertTitle>{title}</AlertTitle>
            {message}
        </Alert>
    )
};

export default ErrorMessage;