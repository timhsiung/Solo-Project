import React from 'react';

const App = () => {
    return (
    <div>
        <h1>Job application tracker</h1><AppContainer />
    </div>
    );
};

function AppContainer() {
    return (
        <div className='job-container'>
            <JobContainer />
        </div>
    );
};

function JobContainer() {
    return (
        <div>
            <Job />
        </div>
    );
};

function Job(props) {
    function add() { props.add };
    function deleter() { props.delete };
    return (
        <div className='jobBox'>
            <div className='categories-container'>
            <h3>Job: </h3>
            <h3>Days since submission: </h3>
            <h3>Total responses: </h3>
            </div>
       
        <div className='buttons-container'>
            <button className='resButton' onClick={add}>+ Add Response</button>
            <button className='resButton' onClick={deleter}>- Remove Response</button>
            <button className='deleteButton' onClick={deleter}>Delete</button>
        </div>
    </div>
    );
};

export default App;