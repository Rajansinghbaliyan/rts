import React from 'react';
import Parent from "./props/Parent";
import PartyList from "./state/PartyList";

export const App = () => {
    return (
        <div>
            <h1>Hi there!</h1>
            <Parent/>
            <h1>State</h1>
            <PartyList/>
        </div>
    );
};
