import React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom'
let RouterViews=(props)=> {
    let { routes } = props
    return (
        <Switch>
            {
                routes.map((item, index) =>item.redirect?<Redirect key={index} to={item.redirect} />:
                <Route key={index} path={item.path} render={(props)=>{return <item.component {...props} routes={item.children} />}} />)
            }
        </Switch>

    )
}

export default RouterViews