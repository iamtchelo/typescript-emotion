import * as Enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';

const adapter = new Adapter();

Enzyme.configure({ adapter });