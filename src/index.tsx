import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { AppComponent } from "./app/presentation/views/react/app";
const rootElement = document.getElementById("root");
if (rootElement) {
  const root = createRoot(rootElement);

  root.render(
    <StrictMode>
      <AppComponent />
    </StrictMode>
  );
}
