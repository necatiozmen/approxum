//#region Global Imports
import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import TextLoop from "react-text-loop";
import { i18n, withNamespaces } from '../../i18n';
//#endregion Global Imports

import './style.scss';
//#region Interface Imports
import { IHomePage, IStore } from '@Interfaces';
import { HomeActions } from '@Actions';
import { Layout } from '@Components';
//#endregion Interface Imports

export class HomePage extends React.Component<IHomePage.IProps, IHomePage.IState> {
	public render(): JSX.Element {
		const { t, i18n } = this.props;
		return (
			<Layout pageType={'home'}>
				<div className="container-fluid home">
					<div className="home__title">
						{i18n.language === 'en' &&
							<>
								<p>Your &nbsp;
								  <TextLoop interval={[3000, 2000]}>
										<span>bridge</span>
										<span>connection</span>
										<span>home</span>
										<span>harbor</span>
									</TextLoop>{""}
								</p>
								<p>between </p>
								<p>Belgium </p>
								<p>and Turkey</p>
							</>
						}
						{i18n.language === 'nl' &&
							<>
								<p>Uw &nbsp;
								  <TextLoop interval={[3000, 2000]}>
										<span>brug</span>
										<span>verbinding</span>
										<span>thuis</span>
										<span>haven</span>
									</TextLoop>{""}
								</p>
								<p>tussen</p>
								<p>België</p>
								<p>en Turkije.</p>
							</>
						}
						{i18n.language === 'tr' &&
							<>
								<p>Belçika</p>
								<p>ve Türkiye</p>
								<p>arasindaki</p>
								<p>
									<TextLoop interval={[3000, 2000]}>
										<span>köprünüz</span>
										<span>bağlantınız</span>
										<span>eviniz</span>
										<span>limanınız</span>
									</TextLoop>{""}.
								</p>
							</>
						}
					</div>
					<div className="home__video">
						<div className="embed-responsive embed-responsive-16by9">
							<iframe className="embed-responsive-item" src="https://www.youtube.com/embed/tgbNymZ7vqY" allowFullScreen></iframe>
						</div>
					</div>
				</div>
			</Layout>
		);
	}
}


export default withNamespaces('common')(HomePage);