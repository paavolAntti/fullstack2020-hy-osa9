import React from "react";
import ReactDOM from "react-dom";
import Header from './components/Header';
import Content from './components/Content';
import Total from './components/Total';
import { courseName, courseParts } from './data/data';

const App: React.FC = () => {
    return (
        <div>
            <Header name={courseName}/>
            <Content parts={courseParts}/>
            <Total parts={courseParts}/>
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById("root"));
