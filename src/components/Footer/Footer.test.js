import Footer from './Footer';

describe('Renders Footer and it contents', () => {
    let footerWrapper;

    beforeEach(() => {
        footerWrapper = shallow(<Footer />);
    });

    it('should render Footer correctly', () => {
        expect(footerWrapper).toMatchSnapshot();
    });

    it('should display text correctly in Footer', () => {
        expect(footerWrapper.find('p').text()).toEqual('Copyrights Akwasi Sefa-Boakye. All rights reserved.');
    });
});
