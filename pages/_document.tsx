import Document, { Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {

	public render(): JSX.Element {
		return (
			<html >
				<Head>
					<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
					<meta charSet="utf-8" />
					<link rel="icon" href="/static/image/logo-small.png"></link>
					<title>aproxum</title>
					
					<style>{`
								#__next {   }
        				   `}
					</style>
				</Head>
				<body >
					<Main />
					<NextScript />
				</body>
			</html>
		);
	}
}
