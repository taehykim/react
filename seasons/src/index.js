import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

// functional component
// const App = () => {

//     //Geolocation API
//     window.navigator.geolocation.getCurrentPosition(
//         position => console.log(position), // success callback
//         err => console.log(err) // when a user declines to share their location
//     );

//     return <div>Latitude: </div>; //JSX

// };

// Class based component
class App extends React.Component {
    //this function is not required by React, this is for JS
    constructor (props) {
        super(props); // calling React.Component's constructor function

        // this is the only time we do direct assignment to this.state
        // initializing the state object
        this.state = {lat: null, errorMessage: ''}; // this.state is an object
    }

    // state = { lat: null, errorMessage: '' }; same as initializing in constructor func

    componentDidMount() {
        //Geolocation API
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({ lat:position.coords.latitude }), // success callback
            err => this.setState({ errorMessage: err.message }) // when a user declines to share their location
        );
    }

    renderContent() {
        // conditional rendering
        if (this.state.errorMessage && !this.state.lat) {
            return <div>Error: {this.state.errorMessage}</div>
        }
        
        if (!this.state.errorMessage && this.state.lat) {
            return <div><SeasonDisplay lat={this.state.lat} /></div>
        }
        
        return <Spinner message="Please accept location request"/>
    }

    // React says we have to define render method
    render() {
      return (
        <div className="border pink">
            {this.renderContent()}
        </div>
      );
    }
};


ReactDOM.render(
    <App />,
    document.querySelector('#root')
);

/*
-- NOTES --

** Life Cycle
1. JS file loaded by browser
2. App component gets created
3. We call geolocation service: this takes some amount of time (3-5 secs)
4. App returns JSX, gets rendered to page as HTML
...
5. We get result of geolocation!
6. Tell the component to rerender itself with this new info
To do this ^
Create a class instead of functional component

** Rules of Class
1. Must be a JS Class
2. Must extend (subclass) React.Component
3. Must define a 'render' method that returns some amount of JSX 

** Rules of State
1. Only usable with class components 
2. You will confuse props with state
3. 'State' is a JS Object that contains data that is relevant to a component
4. Updating 'state' on a component causes the component to (almost) instantly rerender
5. State must be initialized when a component is created
6. State can ONLY be updated using the function 'setState'

*/

/*

** App LifeCycle Walk-through
1. JS file loaded by browser
2. Instance of App component is created
3. App components 'constructor' function gets called
4. State object is created and assigned to the 'this.state' property
5. We call geolocation service
6. React calls the components render method
7. App returns JSX, gets rendered to the page as HTML
8. We get result of geolocation!
9. We update our state object with a call to 'this.setState'
10. React sees that we updated the state of a component
11. React calls our 'render' method a second time
12. React method returns some (updated) JSX

** Component LifeCycle Methods
1. constructor
2. render
... content visible on screen
3. componentDidMount
... sit and wait for updates
render will be called again
4. componentDidUpdate
... sit and wait until this component is not longer shown
5. componentWillUnmount

*/