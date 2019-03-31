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
			<nav className="navbar navbar-expand-md sticky-top header navbar-light">
				<div className="container">
					<div className="header__logo">
						<img src="/static/image/logo.png" alt=""></img>
					</div>
					<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="navbar-nav">
							<li className={`nav-item ${pageType === 'home' ? 'active' : ''}`}>
								<Link href="/home" as="/" >
									<a className="nav-link">Contact</a>
								</Link>
							</li>

							<li className={`nav-item ${pageType === 'about' ? 'active' : ''}`}>
								<Link href="/about" as="/about" prefetch>
									<a className="nav-link">Advantages</a>
								</Link>
							</li>

							<li className={`nav-item dropdown ${pageType === 'products' ? 'active' : ''}`}>
								<Link href="/products" as="/products">
									<a className="nav-link">Services</a>
								</Link>

							</li>
							<li className={`nav-item ${pageType === 'services' ? 'active' : ''}`}>
								<Link href="/services" as="/services" prefetch>
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
			</nav >
		);
	}
}