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
			<nav className="navbar navbar-expand-lg sticky-top header">
				<div className="container">
					{/* 	<a className="navbar-brand" href="#"> */}
					<div className="header__logo">
						<img src="/static/image/logo.png" alt=""></img>
					</div>
					{/* 		</a> */}
					<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>

					<div className="collapse navbar-collapse" id="navbarSupportedContent">
				{/* 		<div className="test">
							<div>1</div>
							<div>2</div>
							<div>3</div>
							<div>4</div>

						</div> */}
									<ul className="navbar-nav  ">
							<li className={`nav-item ${pageType === 'home' ? 'active' : ''}`}>
								<Link href="/home" as="/" >
									<a className="nav-link">Anasayfa</a>
								</Link>
							</li>

							<li className={`nav-item ${pageType === 'about' ? 'active' : ''}`}>
								<Link href="/about" as="/about" prefetch>
									<a className="nav-link">Hakkimizda</a>
								</Link>
							</li>

							<li className={`nav-item dropdown ${pageType === 'products' ? 'active' : ''}`}>
								<Link href="/products" as="/products">
									<a className="nav-link">Urunler</a>
								</Link>

							</li>
							<li className={`nav-item ${pageType === 'services' ? 'active' : ''}`}>
								<Link href="/services" as="/services" prefetch>
									<a className="nav-link">Hizmetler</a>
								</Link>
							</li>
						</ul>

					</div>
					<ul className="navbar-lang">
						<li>Turkce</li>
						<li>Hollandaca</li>
						<li>Ingilizce</li>
					</ul>
				</div>
			</nav >
		);
	}
}