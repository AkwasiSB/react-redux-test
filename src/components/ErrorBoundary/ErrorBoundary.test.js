import ErrorBoundary from './ErrorBoundary';

test('if ErrorBoundary is rendered correctly', () => {
    const errorWrapper = shallow(<ErrorBoundary />);

    expect(errorWrapper).toMatchSnapshot();

    errorWrapper.setState({
        isError: true
    });

    expect(errorWrapper.text()).toEqual('Oops! an error occured. Please check your connection and try again :)');
});
