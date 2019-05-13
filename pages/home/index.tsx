//#region Global Imports
import * as React from 'react';
import TextLoop from "react-text-loop";
import { i18n, withNamespaces } from '../../i18n';
import ReactTypingEffect from 'react-typing-effect';
import Typing from 'react-typing-animation';

import Typewriter from 'typewriter-effect';
//#endregion Global Imports

import './style.scss';
//#region Interface Imports
import { IHomePage, IStore } from '@Interfaces';
import { Layout } from '@Components';
//#endregion Interface Imports

export class HomePage extends React.Component<IHomePage.IProps, IHomePage.IState> {
	public render(): JSX.Element {
		const { i18n } = this.props;

		return (
			<Layout pageType={'home'}>
				<div className="container-fluid home">
					<div className="home__title">
						{i18n.language === 'en' &&
							<>
								<div className="home__typewriter">
									<p>Your</p>
								<span>This line will stay.</span>
								<span>This line will get instantly removed after a 500 ms delay</span>

							{/* 	<Typewriter
									options={{
										strings: ['bridge', 'connection', 'home', 'harbor'],
										autoStart: true,
										loop: true,
									}}
								/> */}
									{/* <ReactTypingEffect
										text={['bridge', 'connection', 'home', 'harbor']}
										speed={120}
									/> */}
								</div>
								<p>between </p>
								<p>Belgium </p>
								<p>and Turkey</p>
							</>
						}
						{i18n.language === 'nl' &&
							<>
								<div className="home__typewriter">
									<p>Uw</p>
									{/* <ReactTypingEffect
										text={['brug', 'verbinding', 'thuis', 'haven']}
										speed={120}
									/> */}
								</div>
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
									{/* <ReactTypingEffect
										text={['köprünüz', 'bağlantınız', 'eviniz', 'limanınız']}
										speed={120}
									/> */}
									{/* 		<TextLoop interval={[3000, 2000]}>
										<span>köprünüz</span>
										<span>bağlantınız</span>
										<span>eviniz</span>
										<span>limanınız</span>
									</TextLoop>{""}. */}
								</p>
							</>
						}
					</div>
					<div className="home__video">
						<iframe className="youtube"
							src="https://www.youtube.com/embed/tgbNymZ7vqY?playlist=tgbNymZ7vqY&loop=1">
						</iframe>
						{/* 	<div className="embed-responsive embed-responsive-16by9">
							<iframe className="embed-responsive-item" src="https://www.youtube.com/embed/tgbNymZ7vqY" allowFullScreen></iframe>
						</div> */}
					</div>
				</div>
			</Layout>
		);
	}
}

export default withNamespaces('common')(HomePage);