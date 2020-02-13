// in src/Foo.js
import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Title } from 'react-admin';
import { useAuthenticated } from 'react-admin';


const NullLoginPage = () => {
    useAuthenticated();

    return (
        <Card>
            <Title title="Redirecting" />
            <CardContent>
                Redirecting...
            </CardContent>
        </Card>
    )
};

export default NullLoginPage;