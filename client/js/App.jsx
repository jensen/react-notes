import React, { Component } from 'react';

require('../scss/main.scss');

/*

  1.   Copy html layout into App.jsx.
  2.   Convert class and other reserved names to React versions.
  3.   Break html into separate components to create a hierarchy.
  4.   Add state to App.jsx to manage the current posts.
  5.   Pass the posts to the child components as a prop.
  6.   In the posts component use the prop to replace the static content.
  7.   In the header setup the content state.
  8.   Pass the current and maximum character counts to the status bar as props.
  9.   In the status bar render the character counter, changing the style when max is reached.
  10.  Setup an event handler to trigger an update to the content on input.
  11.  Pass a function to the header that it can call when a new post is created.
  12.  Setup an event handler to use the function, passed as a prop.
  13.  In the header create the error state and pass it as a prop to the status.
  14.  Show the error text if it is not empty.
  15.  Switch from hard coded posts to json that uses a fetch (ajax) call.
  16.  Save the new post to the database in the App.jsx post handler function.
  17.  Toggle the visibility of the compose window.

*/

class App extends Component {
  render() {
    return (
      <div></div>
    )
  }
}

export default App;
