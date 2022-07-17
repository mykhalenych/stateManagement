import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {Alert, CircularProgress, Skeleton, Snackbar} from "@mui/material";

import {fetchData} from "./slice/thunks";
import {selectUrl, selectError, selectLoading} from "./slice/selectors";

import './App.css';

const AppWithToolkit = () => {
    const dispatch = useDispatch()
    const url = useSelector(selectUrl)
    const error = useSelector(selectError)
    const isLoading = useSelector(selectLoading)

    useEffect(() => {
        dispatch(fetchData())
    }, [dispatch])

    return (
        <>
            {isLoading && <CircularProgress/>}
            <div className="img-wrap">
                {url ?
                    <img src={url} className="img" alt="img"/>
                    :
                    <Skeleton className="img" animation="wave" sx={{bgcolor: 'white'}} variant="rectangular" width={300}
                              height={400}/>
                }
            </div>
            {error &&
            <Snackbar open autoHideDuration={6000}>
                <Alert severity="error">
                    {error}
                </Alert>
            </Snackbar>
            }
        </>
    )
}

export default AppWithToolkit;
