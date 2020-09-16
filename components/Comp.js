import React from 'react';
import {withTranslation} from '../i18n';

function Comp({t}) {
	return <h1>{t('lang')}</h1>;
}

export default withTranslation('comp')(Comp);
