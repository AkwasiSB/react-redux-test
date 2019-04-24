import Header from './Header';

it('should render Header correctly', () => {
    const headerWrapper = shallow(<Header title='' />);

    expect(headerWrapper).toMatchSnapshot();
});

it('should display correct title in Header', () => {
    const headerWrapper = shallow(<Header title='Post Blog' />);

    expect(headerWrapper.find('h2').text()).toEqual('Post Blog');
});
