import React, {useState, Suspense} from 'react';
import {Tab, Tabs, Box, CircularProgress} from '@mui/material';
import {Provider} from "react-redux";
import {RecoilRoot} from "recoil";

import AppWithToolkit from "./AppWithToolkit";
import AppWithRedux from "./AppWithRedux";
import AppWithRecoil from "./AppWithRecoil";
import AppWithAnotherRecoil from "./AppWithAnotherRecoil";
import store from "./store";

const TabPanel = ({children, value, index}) => (
    <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
    >
        {value === index && children}
    </div>
)

const AppWrap = () => {
    const [value, setValue] = useState(0);

    const handleChange = (e, newValue) => {
        setValue(newValue);
    };

    return (
        <Box className="app">
            <Box className="tabs">
                <Tabs value={value} onChange={handleChange}>
                    <Tab label="Redux"/>
                    <Tab label="Redux Toolkit"/>
                    <Tab label="Recoil"/>
                    <Tab label="Another Recoil"/>
                </Tabs>
            </Box>
            <Provider store={store}>
                <TabPanel value={value} index={0}>
                    <AppWithRedux/>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <AppWithToolkit/>
                </TabPanel>
            </Provider>
            <RecoilRoot>
                <Suspense fallback={<div className="spinner"><CircularProgress /></div>}>
                    <TabPanel value={value} index={2}>
                        <AppWithRecoil/>
                    </TabPanel>
                    <TabPanel value={value} index={3}>
                        <AppWithAnotherRecoil/>
                    </TabPanel>
                </Suspense>
            </RecoilRoot>
        </Box>
    );
}

export default AppWrap