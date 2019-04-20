//#region Global Imports
import * as React from 'react';
import { withNamespaces } from '../../i18n';
//#endregion Global Imports

import './style.scss';
//#region Interface Imports
import { IExpertisePage, IStore } from '@Interfaces';
import { Card, Layout } from '@Components';
//#endregi Interface Imports

class ExpertisePage extends React.Component<IExpertisePage.IProps, IExpertisePage.IState> {
	public static async getInitialProps(): Promise<IExpertisePage.IProps> {
		return {
			namespacesRequired: ['common', 'AdvantagesPage']
		};
	}
	public render(): JSX.Element {

		return (
			<Layout pageType={'expertise'}>
				<div className="container">
					<div className="row expertise">
						<Card
							cardType={'expertise'}
							icon={'profile'}
							header={'Nurettin Macit'}
							address={'Galgenberglaan 18a 9070 Destelbergen'}
							numFirst={'+32 9 256 11 16'}
							numSecond={'+32 488 59 78 91'}
							email={'belgium@aproxum.com'}
							colType={'col-md-4'}
						/>
						<Card
							cardType={'expertise'}
							icon={'profile'}
							header={'Hümeyra Macit'}
							address={'Üsküdar Mah. Sarıyer Sok. 9 34586 Beşiktaş'}
							numFirst={'+90 9 256 11 16'}
							numSecond={'+90 488 59 78 91'}
							email={'turkey@aproxum.com'}
							colType={'col-md-4'}
						/>
					</div>
				</div>
			</Layout>
		);
	}
}

export default withNamespaces('common')(ExpertisePage);
