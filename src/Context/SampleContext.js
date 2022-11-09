import React, { useContext, createContext, useState, useEffect } from "react";
import ApiPose from "../Services/ApiPose"
import moment from 'moment'
import _ from 'lodash'

export const SampleContext = createContext({});

export default function SampleProvider(props) {

    const [dataSample, setDataSample] = useState([])
    
    const getData = async (data) => {
        return []
        // ApiPose.getDailyWork(data).then(res=>{
        //     setDataLoopTrain(res.data)
        // }).catch(err=>{
        //     return { status: 400, result: err }
        // })
    }

    return (
        <SampleContext.Provider value={{ getData, dataSample }} {...props}/>
    );
}