import PostForm from './PostForm';

test('if PostForm renders correctly', () => {
    const postFormWrapper = shallow(<PostForm createPost={() => {}} />);

    expect(postFormWrapper).toMatchSnapshot();
});
