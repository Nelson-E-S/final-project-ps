import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import AnimalCasePage from '../pages/AnimalCasePage';
import SettingsForm from '../components/SettingsForm';

const MySwitch = () =>(
    <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/facts" component={AnimalCasePage} />
        <Route exact path="/settings" component={SettingsForm} />
    </Switch>
);

export default MySwitch;