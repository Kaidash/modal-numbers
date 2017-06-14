import 'babel-polyfill'
import React from 'react'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { storiesOf, action, linkTo } from '@kadira/storybook';
import ModalApp from './containers/ModalApp';
import Wrapper from './stories/Wrapper';
import SaveCallback from './stories/SaveCallback';
import CustomData from './stories/CustomData';
import { rootReducer } from './modules';

const store = createStore( rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(thunkMiddleware));

storiesOf('Redux React Stories ', module)
    .addDecorator((getStory) => (<Provider store={store}>
            { getStory() }
        </Provider>
    ))
    .add('Modal default', () => <ModalApp />)
    .add('Modal on close', () => <Wrapper/>)
    .add('Modal save callback', () => <SaveCallback/>)
    .add('Modal custom data push', () => <CustomData/>);