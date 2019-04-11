//#region Global Imports
import * as React from 'react';
//#endregion Global Imports

import './style.scss';
//#region Interface Imports
import { IContactPage, IStore } from '@Interfaces';
import { Content, Layout } from '@Components';
//#endregi Interface Imports

export default class ContactPage extends React.Component<IContactPage.IProps, IContactPage.IState> {
	public render(): JSX.Element {
		return (
			<Layout pageType={'contact'}>
				<Content pageType={'contact'} />
			</Layout>
		);
	}
}
