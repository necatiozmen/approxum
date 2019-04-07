//#region Global Imports
import * as React from 'react';
//#endregion Global Imports

import './style.scss';
//#region Interface Imports
import { IContactPage, IStore } from '@Interfaces';
import { Layout } from '@Components';
//#endregion Interface Imports

export default class ContactPage extends React.Component<IContactPage.IProps, IContactPage.IState> {
	public render(): JSX.Element {
		return (
			<Layout pageType={'contact'}>
				<div className="container-fluid contact">
					<div className="contact__offices">
						<span className="title">Aproxum offices</span>
						<span>Galgenberglaan 18a 9070 Destelbergen</span>
						<span>+32 9 256 11 16</span>
						<span>+32 488 59 78 91</span>
						<span>info@aproxum.com</span>
					</div>
					<div className="contact__hours">
						<span className="title">Working hours</span>
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
			</Layout>
		);
	}
}
