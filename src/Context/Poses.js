import React, { createContext, useState, useEffect } from "react";

export const PoseContext = createContext({});

export default function PoseProvider(props) {
  const [dataPoses, setDataPoses] = useState([]);
  const [excelExport, setExcelExport] = useState([]);
  const kihonList = [{kata:"1", time:[6,9,14,16,22,25,29,33,38,43,47,50,53,57,61,64,68,75,79,84,90]},
  {kata:"2", time:[8,11,16,16,21,25,30,38,42,48,52,58,65,70,75,83,88,94,101,105,111,115,120,128,132,137]}]

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

  const resetPose = async()=>{
    setDataPoses([])
  }

return (
  <PoseContext.Provider value={{ dataPoses, getDataPose,excelExport, addPose, resetPose, deletePose, changeLabel, kihonList }} {...props} />
);
}