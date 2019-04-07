//#region Global Imports
import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
//#endregion Global Imports

import './style.scss';
//#region Interface Imports
import { IHomePage, IStore } from '@Interfaces';
import { HomeActions } from '@Actions';
import { Layout } from '@Components';
//#endregion Interface Imports

export class HomePage extends React.Component<IHomePage.IProps, IHomePage.IState> {
	public render(): JSX.Element {
		return (
			<Layout pageType={'home'}>
				<div className="container-fluid home">
					<div className="home__title">
						<p>Your</p>
						<p>[bridge]</p>
						<p>between East</p>
						<p>and West</p>
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

const mapStateToProps = (state: IStore) => state.home;

const mapDispatchToProps = (dispatch: Dispatch) => (
	{
		Map: bindActionCreators(HomeActions.Map, dispatch)
	}
);

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);