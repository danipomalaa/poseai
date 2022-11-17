import React, { createContext, useState, useEffect } from "react";

export const PoseContext = createContext({});

export default function PoseProvider(props) {
  const [dataPoses, setDataPoses] = useState([]);
  const [excelExport, setExcelExport] = useState([]);
  const kihonList = [6,9,14,16,22,25,29,33,38,43,47,50,53,57,61,64,68,75,79,84,90] 

//   0:06
// 0:09
// 0:14
// 0:16
// 0:21
// 0:25
// 0:29
// 0:33
// 0:38
// 0:43
// 0:47
// 0:50
// 0:53
// 0:57
// 1:00 = 61
// 1:04 = 64
// 1:08 = 68
// 1:13 = 75
// 1:18 = 79
// 1:24 = 84
// 1:30 = 90
  const addPose = async(pose)=>{
    setDataPoses([...dataPoses, pose])
  }

  const getDataPose = ()=>{
    return dataPoses
  }

  const changeLabel = async(id, label)=>{
    const datachange = dataPoses.map(x=>{
      if(id === x.id){
        return({
          ...x, 
          label
        })
      }
      else{
        return x
      }
      
    })
    console.log('datachange', datachange, id, label)
    setDataPoses(datachange)
  }

  const deletePose = async(id)=>{
    const datachange = dataPoses.filter(x=>x.id !== id)
    setDataPoses(datachange)
  }

return (
  <PoseContext.Provider value={{ dataPoses, getDataPose,excelExport, addPose, deletePose, changeLabel, kihonList }} {...props} />
);
}