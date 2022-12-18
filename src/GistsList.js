import { useEffect, useCallback } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import { selectGists, selectGistsError, selectGistsLoading } from "./store/gists/selectors";
import {useSelector, useDispatch} from "react-redux";
import {
    getAllGists
  } from "./store/gists/actions";
// const gists = [];

function GistsList() {
    const dispatch = useDispatch();

    const gists = useSelector(selectGists);
    const error = useSelector(selectGistsError);
    const loading = useSelector(selectGistsLoading);

    const requestGists = () => {
        dispatch(getAllGists());
    };

    useEffect(() => {
        requestGists();
    }, []);

    const renderGist = useCallback(
    // gist.description может быть пустой строкой
        (gist) => <li key={gist.id}>{gist.description || 'No description'}</li>,
        []
    );

    if (loading) {
        return <CircularProgress />;
    }

    if (error) {
        return (
            <>
                <h3>Error</h3>
                <button onClick={requestGists}>Retry</button>
            </>
        );
    }

    return (
        <div className="chatArea block-gist">
            <ul>{gists.map(renderGist)}</ul>
        </div>
    );
};

export default GistsList;