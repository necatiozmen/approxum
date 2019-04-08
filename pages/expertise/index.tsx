//#region Global Imports
import * as React from 'react';
//#endregion Global Imports

import './style.scss';
//#region Interface Imports
import { IExpertisePage, IStore } from '@Interfaces';
import { Content, Layout } from '@Components';
//#endregi Interface Imports

export default class ExpertisePage extends React.Component<IExpertisePage.IProps, IExpertisePage.IState> {
	public render(): JSX.Element {
		return (
			<Layout pageType={'expertise'}>
				<Content pageType={'expertise'} />
			</Layout>
		);
	}
}
