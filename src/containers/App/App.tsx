import * as React from 'react';
import './App.css';
import Header from "../Header/Header";

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <Header/>
                </div>
                <div className="App-body">
                    <div className="welcome-view">
                        <div className="category-nav">
                            <div>1adasdasdasdasdasd1adasdasdasdasdasd1adasdasdasdasdasd1adasdasdasdasdasd</div>
                        </div>
                        <div className="main">
                            21adasdasdasdasdasd1adasdasdasdasdasd1adasdasdasdasdasd1adasdasdasdasdasd1adasdasdasdasdasd
                        </div>
                        <div className="sidebar">
                            31adasdasdasdasdasd1adasdasdasdasdasd1adasdasdasdasdasd1adasdasdasdasdasd1adasdasdasdasdasd
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
