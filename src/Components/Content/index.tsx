import * as React from 'react';

//#region Local Imports
import './style.scss';
//#endregion Local Imports
import { withNamespaces } from '../../../i18n'

import { data } from '../../../static/content-info';

const Content = (props: any): JSX.Element => {

	const { t } = props;
	
	//TODO componentlestir switch case yap
	if (props.pageType === 'advantages') {

		return <div className="container-fluid content">
			<div className="content__left advantages">
				{/* <div className="bold-p">Be local abroad</div> */}
				<div className="bold-p">{t('common:advantages.Be local abroad')}</div>
				<div>
					{t('common:advantages.Don’t compromise your effectiveness or efficiency')}
				</div>
				<div className="bold-p">{t('common:advantages.Gain time')}</div>
				<div>{t('common:advantages.Tell us your needs and leave the execution to professionals')}</div>
			</div>
			<div className="content__right advantages">
				<div className="bold-p">{t('common:advantages.Benefit fiscally')}</div>
				<div>
					{t('common:advantages.Invoice your expenses and prevent incurring personnel wages')}
				</div>
				<div className="bold-p">{t('common:advantages.Develop knowledge')}</div>
				<div>{t('common:advantages.Prevent harsh lessons afterwards')}</div>
			</div>
		</div>;

	} else if (props.pageType === 'services') {
		return <div className="container-fluid content">
			<div className="content__left services">
				<div className="bold-p">{t('common:services.General administration')}</div>
				<div>
					{t('common:services.communicative')}
				</div>
				<div className="bold-p">{t('common:services.Research')}</div>
				<div>{t('common:services.Collecting data according to your interests')}</div>
			</div>
			<div className="content__right services">
				<div className="bold-p">{t('common:services.Interposition')}</div>
				<div>{t('common:services.Facilitating your contact with local and trustworthy contractors, customers"')}
			</div>
				<div className="bold-p">{t('common:services.Representation')}</div>
				<div>{t('common:services.Representing your interests in person locally')}</div>
			</div>
		</div>;
	} else if (props.pageType === 'contact') {
		return <div className="container-fluid content">
			<div className="content__left contact">
				<div className="bold-p">{t('common:contact.Aproxum offices')}</div>
				<div>Galgenberglaan 18a 9070 Destelbergen</div>
				<div>+32 9 256 11 16</div>
				<div>+32 488 59 78 91</div>
				<div>info@aproxum.com</div>
			</div>
			<div className="content__right contact">
				<div className="bold-p">{t('common:contact.Working hours')}</div>
				<div className="weekday">
					<p>{t('common:contact.Weekdays')}:</p>
					<div className="weekday__hours">
						<span>08:30 - 12:00</span>
						<span>13:00 - 20:00</span>
					</div>
				</div>
				<div className="weekend">
					<span>{t('common:contact.Weekends')}:</span>
					<span className="weekend__hours">13:00 - 20:00</span>
				</div>
				<div className="social">
					<div className="social__item">
						<img className="facebook" src="/static/image/fb3.png" />
					</div>
					<div className="social__item">
						<img className="instagram" src="/static/image/instagram.png" />
					</div>
				</div>
			</div>
		</div>

	} else if (props.pageType === 'expertise') {

		return <div className="container-fluid content">
			<div className="content__left expertise">
				<div className="bold-p">Nureddin Macit</div>
				<div>
					{t('common:expertise.Received a cum laude Master')}
				</div>
				<div>
					{t('common:expertise.Has been specializing in international project')}
				</div>
			</div>
			<div className="content__right expertise">

				<div className="linkedin">
					<div className="linkedin__profile">
						<img src="/static/image/profile.png" />
					</div>
					<div className="linkedin__logo">
						<img src="/static/image/linkedin.png" />
					</div>
				</div>
			</div>
		</div>;
	}

	return <></>;

};

export default withNamespaces('common')(Content);

