import {i18n, Link, withTranslation} from '../i18n';
import Comp from '../components/Comp';

const Home = ({t}) => (
	<>
		<main>
			<h1> {t('txt')} </h1>
			<div>
				<Comp />

				<button type="button" onClick={() => i18n.changeLanguage('en')}>
					english
				</button>

				<button type="button" onClick={() => i18n.changeLanguage('fa')}>
					فارسی
				</button>
			</div>
		</main>
	</>
);

Home.getInitialProps = async () => ({
	// pass props.t  to these components
	namespacesRequired: ['common', 'comp'],
});

export default withTranslation('common')(Home);
