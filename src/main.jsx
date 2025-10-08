import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";


const root = createRoot(document.getElementById("root"));
root.render(<App />);


// Registrar el Service Worker (necesario para modo offline en producción)
if ("serviceWorker" in navigator) {
window.addEventListener("load", () => {
navigator.serviceWorker
.register("/service-worker.js")
.catch((e) => console.error("SW registration failed", e));
});
}
