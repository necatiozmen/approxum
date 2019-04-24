//#region Global Imports
import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import TextLoop from "react-text-loop";
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
					{/* 	<p>Your</p> */}
						<p>Your [
						<TextLoop
								interval={[3000, 2000]}
							/* 	springConfig={{ stiffness: 70, damping: 31 }}
								adjustingSpeed={500}
							 */
							>
								<span>bridge</span>
								<span>connection</span>
								<span>home</span>
								<span>harbor</span>
							</TextLoop>{""}
							]
						</p>
						<p>between </p>
						<p>Belgium </p>
						<p> and Turkey</p>
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