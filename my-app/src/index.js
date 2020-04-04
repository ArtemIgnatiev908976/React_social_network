

import state, {subscribe} from "./redux/state";



import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import {addPost, updateNewPostText} from "./redux/state";
import {BrowserRouter} from "react-router-dom";


// addPost('hey');
 let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state} addPost={addPost} updateNewPostText={updateNewPostText}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}








rerenderEntireTree(state);

subscribe(rerenderEntireTree);

