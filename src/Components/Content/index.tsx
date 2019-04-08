import * as React from 'react';

//#region Local Imports
import './style.scss';
//#endregion Local Imports

import { data } from '../../../static/content-info';

export const Content = (props: any): JSX.Element => {

	const { left, right } = data.advantages;


	if (props.pageType === 'advantages') {

		return <div className="container-fluid content">
			<div className="content__left advantages">
				<div className="bold-p">Be local abroad</div>
				<div>Don’t compromise your effectiveness or efficiency.
				</div>
				<div className="bold-p">Gain time</div>
				<div>Tell us your needs and leave the execution to professionals.</div>
			</div>
			<div className="content__right advantages">
				<div className="bold-p">Benefit fiscally</div>
				<div>Invoice your expenses and prevent incurring personnel wages.
			</div>
				<div className="bold-p">Develop knowledge</div>
				<div>Prevent harsh lessons afterwards and acquire practices while doing business.</div>
			</div>
		</div>;

	} else if (props.pageType === 'services') {
		return <div className="container-fluid content">
			<div className="content__left services">
				<div className="bold-p">General administration</div>
				<div>24/7 communicative and administrative suppor: Submission of applications,
					power of attorneys, certifierd translations, follow-up, ...
				</div>
				<div className="bold-p">Research</div>
				<div>Collecting data according to your interests.</div>
			</div>
			<div className="content__right services">
				<div className="bold-p">Interposition</div>
				<div>Facilitating your contact with local and trustworthy contractors,
					customers, federations, notaries, lawyers and accountants.
			</div>
				<div className="bold-p">Representation</div>
				<div>Representing your interests in person locally.</div>
			</div>
		</div>;
	} else if (props.pageType === 'contact') {
		return <div className="container-fluid content">
			<div className="content__left contact">
				<div className="bold-p">Aproxum offices</div>
				<div>Galgenberglaan 18a 9070 Destelbergen</div>
				<div>+32 9 256 11 16</div>
				<div>+32 488 59 78 91</div>
				<div>info@aproxum.com</div>
			</div>
			<div className="content__right contact">
				<div className="bold-p">Working hours</div>
				<div className="weekday">
					<p>Weekdays:</p>
					<div className="weekday__hours">
						<span>08:30 - 12:00</span>
						<span>13:00 - 20:00</span>
					</div>
				</div>
				<div className="weekend">
					<span>Weekends:</span>
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
					Received a cum laude Master’s in Multilingual Communication (English, Dutch, Turkish) at
					Ghent University and has broad experience in international business.
				</div>
				<div>
					Has been specializing in international project management and
					  cross-cultural communication in the past years.
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

	return '';

};


{/* <div className="content__left">
			<span >{left.p1}</span>
			<span>{left.p2}</span>
			<span>{left.p3}</span>
			<span>{left.p4}</span>
		</div>
		<div className="content__right">
			<span >{right.p1}</span>
			<span>{right.p2}</span>
			<span>{right.p3}</span>
			<span>{right.p4}</span>

		</div> */}
