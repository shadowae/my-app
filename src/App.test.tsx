import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import {Route, Switch} from "react-router-dom";
import {store} from "./app/store";
import {Counter} from "./features/counter/Counter";
it('renders contains default route', () => {
    const wrapper = shallow(<App />);
    const defaultRoute = <Route store={store} component={Counter} />;
    // expect(wrapper.contains(welcome)).toBe(true);
    expect(wrapper.contains(defaultRoute)).toEqual(true);
});
