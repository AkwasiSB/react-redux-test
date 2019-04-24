import App from './App';

test('if App renders correctly', () => {
    const appWrapper = shallow(<App />);

    expect(appWrapper).toMatchSnapshot();
})
