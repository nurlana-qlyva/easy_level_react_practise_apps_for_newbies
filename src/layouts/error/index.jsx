import React from 'react';
import { useRouteError } from 'react-router-dom';

export default function ErrorPage() {
    const error = useRouteError();

    return (
        <div>
            <h1>Not Found</h1>
            <i>{error.statusText || error.message}</i>
        </div>
    )
}
