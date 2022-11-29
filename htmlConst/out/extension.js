"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = void 0;
const vscode_1 = require("vscode");
const util_1 = require("util");
function activate(context) {
    var disposable = vscode_1.commands.registerCommand('htmlConst.construct', (resource) => {
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
        return vscode_1.workspace.fs.writeFile(vscode_1.Uri.parse(resource.path), new util_1.TextEncoder().encode(htmlContent));
    });
    context.subscriptions.push(disposable);
}
exports.activate = activate;
// This method is called when your extension is deactivated
function deactivate() { }
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map