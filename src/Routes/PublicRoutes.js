import React from "react";
import { BrowserRouter as Router, Route,Switch } from "react-router-dom";
import { dataRouters } from "./Data";

function Routers() {

  return (
    <Switch>
      <div class="bgroute" style={{backgroundColor:'#E4E4E4', flex:1, height:'100%'}}>
      {
          dataRouters.map((item,index)=>(
            <Route key={index} exact path={item.path} component={item.page} />
          ))
      }
      </div>
    </Switch>
  );
}

export default Routers;
