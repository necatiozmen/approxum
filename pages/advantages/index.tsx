//#region Global Imports
import * as React from 'react';
import { connect } from 'react-redux';
//#endregion Global Imports

import './style.scss';
//#region Interface Imports
import { IAdvantagesPage, IStore } from '@Interfaces';
import { Content, Layout } from '@Components';
//#endregion Interface Imports

export default class AdvantagesPage extends React.Component<IAdvantagesPage.IProps, IAdvantagesPage.IState> {
	public render(): JSX.Element {
		return (
			<Layout pageType={'advantages'}>
				<Content pageType={'advantages'} />

			</Layout>
		);
	}
}
