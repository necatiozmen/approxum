//#region Global Imports
import * as React from 'react';
//#endregion Global Imports

import './style.scss';
//#region Interface Imports
import { IServicesPage, IStore } from '@Interfaces';
import { Content, Layout } from '@Components';
//#endregion Interface Imports

export default class ServicesPage extends React.Component<IServicesPage.IProps, IServicesPage.IState> {
	public render(): JSX.Element {
		
		return (
			<Layout pageType={'services'}>
				<Content pageType={'services'} />
			</Layout>
		);
	}
}
