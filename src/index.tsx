import { UsingTimer } from "components/UsingTimer";
import { getElementById } from "lib/DOM";
import { createRoot } from "react-dom/client";

const rootElement = getElementById('root');

if (!rootElement)
  throw new Error('Can\'t find root element!');

createRoot(rootElement)
  .render(
    <>
      <UsingTimer />
    </>
  );