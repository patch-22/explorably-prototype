import React from 'react'
import { render } from 'react-dom'

import './App.css'

class App extends React.Component {
handleTitleClick() {
    alert("You Clicked the Title!");
}
render() {
    return (
        <div>
            <div className="wrapper">
                <div className="col-left">
                    <h1 className="page__heading">
                        Chance Events
                    </h1>
                    <p>
                    Randomness is all around us. Probability theory is the mathematical framework that allows us to analyze chance events in a logically sound manner. The probability of an event is a number indicating how likely that event will occur. This number is always between 0 and 1, where 0 indicates impossibility and 1 indicates certainty.
                    </p>
                </div>
                <div className="col-right">
                        INTERACtiviTiy
                </div>
            </div>
        </div>
    )
}
}
render(React.createElement(App), document.getElementById("root"));