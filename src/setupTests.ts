import { configure } from 'enzyme';
import * as ReactSixteenAdapter from 'enzyme-adapter-react-16';

configure({ adapter: new ReactSixteenAdapter() });

// global.fetch = require('jest-fetch-mock');
// fetch.mockResponse('{"url":"success.jpg"}');