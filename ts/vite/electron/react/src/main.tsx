import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
// oxide:top-imports

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		{/* oxide:providers-start */}
		<App />
		{/* oxide:providers-end */}
	</React.StrictMode>,
);

window.ipcRenderer.on("main-process-message", (_event, message) => {
	console.log(message);
});
