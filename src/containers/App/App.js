import React, { Fragment, Suspense } from 'react';
import ErrorBoundary from '../../components/ErrorBoundary/ErrorBoundary';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import PostForm from '../PostForm/PostForm';

const Posts = React.lazy(() => import('../Posts/Posts'));

const App = () => (
	<div>
		<ErrorBoundary>
			<Fragment>
				<Header title='Posts' />

				<main>
					<PostForm />

					<Suspense fallback={<div>Loading...</div>}>
						<Posts />
					</Suspense>
				</main>

				<Footer />
			</Fragment>
		</ErrorBoundary>
	</div>
);

export default App;
