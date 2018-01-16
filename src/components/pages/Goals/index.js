import { compose } from 'redux';

import connector from './connector';
import Component from './Component';

const WrappedComponent = compose(connector)(Component);

export default WrappedComponent;
