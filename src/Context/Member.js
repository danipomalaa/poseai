import React, { createContext, useState, useEffect } from "react";
import Api from './../Services/ApiPose'
export const MemberContext = createContext({});

export default function MemberProvider(props) {
  const [profileMember, setProfileMember] = useState({});

  const getDataMember = (_id)=>{
    return Api.getMember({params:{_id}}).then(res=>{
        if(res.data.length>0){
            setProfileMember(res.data[0])
            return res.data[0]
        }
        else{
            return {}
        }
    })
    
  }

return (
  <MemberContext.Provider value={{ getDataMember, profileMember }} {...props} />
);
}