import React from "react";
import ReactDOM from "react-dom/client";
import { CoreNavigation } from "./features/core";
import "@/globals.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <CoreNavigation />
    </React.StrictMode>,
);
