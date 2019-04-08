//#region Global Imports
import * as React from 'react';
import Link from 'next/link'
//#endregion Global Imports

//#region Local Imports
import './style.scss';
//#endregion Local Imports

//#region Interface Imports.
import { IHeader } from '@Interfaces';
//#endregion Interface Imports

export class Header extends React.Component<IHeader.IProps, IHeader.IState> {

	public render(): JSX.Element {
		const { pageType } = this.props;

		return (
			<div className="header-container">
				<nav className="navbar navbar-expand-md header navbar-light">
					<div className="container">
						<Link href="/home" as="/">
						<div className="header__logo">
							<img src="/static/image/logo.png" alt=""></img>
						</div>
						</Link>
						<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
							aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
							<span className="navbar-toggler-icon"></span>
						</button>
						<div className="collapse navbar-collapse" id="navbarSupportedContent">
							<ul className="navbar-nav">
								<li className={`nav-item ${pageType === 'contact' ? 'active' : ''}`}>
									<Link href="/contact" as="/contact" >
										<a className="nav-link">Contact</a>
									</Link>
								</li>

								<li className={`nav-item ${pageType === 'advantages' ? 'active' : ''}`}>
									<Link href="/advantages" as="/advantages" prefetch>
										<a className="nav-link">Advantages</a>
									</Link>
								</li>

								<li className={`nav-item ${pageType === 'services' ? 'active' : ''}`}>
									<Link href="/services" as="/services">
										<a className="nav-link">Services</a>
									</Link>

								</li>
								<li className={`nav-item ${pageType === 'expertise' ? 'active' : ''}`}>
									<Link href="/expertise" as="/expertise" prefetch>
										<a className="nav-link">Expertise</a>
									</Link>
								</li>
							</ul>
						</div>
						<ul className="navbar-lang">
							<li className={`lang-item`}>
								<Link href="/home" as="/" >
									<a className="nav-link">English</a>
								</Link>
							</li>
							<li className={`lang-item`}>
								<Link href="/home" as="/" >
									<a className="nav-link">Nederlands</a>
								</Link>
							</li>
							<li className={`lang-item`}>
								<Link href="/home" as="/" >
									<a className="nav-link">Turkce</a>
								</Link>
							</li>
						</ul>
					</div>
				</nav>
				<div className="header-down">
					<div className="left"></div>
					<div className="right"></div>
				</div>
			</div>
		);


	}
}
