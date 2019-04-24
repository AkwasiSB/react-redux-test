import Posts, { PostItem } from './Posts';

describe('Rendering Posts made of PostItems', () => {
    it('it should render Posts', () => {
        const postsWrapper = shallow(<Posts posts={[]} fetchPosts={() => {}} />);

        expect(postsWrapper).toMatchSnapshot();
    });

    it('it should render PostItem', () => {
        const postData = {
            id: 1,
            user_id: '382980',
            title: 'Hey!',
            body: 'Hey buddy I am rendering cool stuff'
        };

        const postItemWrapper = shallow(<PostItem post={postData} />);

        expect(postItemWrapper).toMatchSnapshot();
    });
});
