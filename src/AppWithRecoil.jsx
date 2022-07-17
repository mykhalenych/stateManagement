import React, {useEffect} from "react";
import {useRecoilState, useRecoilValue} from "recoil";
import {Alert, Skeleton, Snackbar} from "@mui/material";

import {currentDataState} from "./recoil/selectors";
import {fetchWrap} from "./api";
import {dataRecoil} from "./recoil/dataRecoil";

import './App.css';

const AppWithRecoil = () => {
    const {url, error} = useRecoilValue(currentDataState);
    // const [url, setUrl] = useRecoilState(dataRecoil);

    // useEffect(() => {
    //     fetchWrap().then(res => {
    //         setUrl(res.message)
    //     })
    // }, [setUrl])

    return (
        <>
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

export default AppWithRecoil;
