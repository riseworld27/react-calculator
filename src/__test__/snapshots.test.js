import renderer from 'react-test-renderer';
import App from '../App';
import Button from '../components/Button/Button';
import ButtonPanel from '../components/ButtonPanel/ButtonPanel';
import Display from '../components/Display/Display';

it('renders App correctly', () => {
  const tree = renderer
    .create(<App />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders Button correctly', () => {
  const tree = renderer
    .create(<Button />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders ButtonPanel correctly', () => {
  const tree = renderer
    .create(<ButtonPanel />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders Display correctly', () => {
  const tree = renderer
    .create(<Display />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
