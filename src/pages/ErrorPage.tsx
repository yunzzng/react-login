import {useRouteError} from 'react-router-dom';

const ErrorPage = () => {
    const error = useRouteError();
    console.log({error});

    return (
        <>
            <h2>Error Page</h2>
        </>
    );
};

export default ErrorPage;