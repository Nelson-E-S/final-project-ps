import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import AnimalCasePage from '../pages/AnimalCasePage';
import SettingsForm from '../components/SettingsForm';

const MySwitch = () =>(
    <Switch>
        <Route path="/home" component={HomePage} />
        <Route path="/facts" component={AnimalCasePage} />
        <Route path="/settings" component={SettingsForm} />
        <Route exact path="/">
            <Redirect to="/home" />
        </Route>
    </Switch>
);

export default MySwitch;