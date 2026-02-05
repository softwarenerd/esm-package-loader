/*---------------------------------------------------------------------------------------------
 *  Copyright (C) 2024 Posit Software, PBC. All rights reserved.
 *  Licensed under the Elastic License 2.0. See LICENSE.txt for license information.
 *--------------------------------------------------------------------------------------------*/

import { ESMPackageLoader } from './esmPackageLoader';

/**
 * Main function.
 */
const main = async () => {
	// Instantiate the PackageLoader.
	const packageLoader = new ESMPackageLoader(
		'/Users/brian/Desktop/esm-package-dependencies',
		'es2022'
	);

	// Load the package descriptors.
	await packageLoader.loadPackageDescriptors([
		// Unchanged from 18.3.1
		{ packageName: 'he', version: '1.2.0' },
		// React 19.
		{ packageName: 'react', version: '19.2.4', dev: false },
		{ packageName: 'react', version: '19.2.4', fileName: 'jsx-runtime', dev: false },
		{ packageName: 'react-dom', version: '19.2.4', dev: false },
		{ packageName: 'react-dom', version: '19.2.4', fileName: 'client', dev: false },
		// Latest version of react-window.
		{ packageName: 'react-window', version: '1.8.10' },
	]);
};

// Run the main function.
main();
