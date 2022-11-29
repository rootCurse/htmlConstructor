import { ExtensionContext, commands, workspace, Uri } 
from 'vscode';
import { TextEncoder } from 'util';

export function activate(context: ExtensionContext) {

	var disposable =  commands.registerCommand('htmlConst.construct', (resource) => {
		const htmlContent = `<!DOCTYPE html>
<html lang="en">
	<head>
  		<meta charset="UTF-8" />
  		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
  		<link rel="stylesheet" href="app.css" />
	</head>
	<body>
		<header></header>
		<main></main>
		<footer></footer>
	</body>
</html>`;
		return workspace.fs.writeFile(Uri.parse(resource.path), new TextEncoder().encode(htmlContent));
	})
	context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
export function deactivate() {}
