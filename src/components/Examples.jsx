import React, { useState } from "react";
import TabButton from "./TabButton";
import { EXAMPLES } from "../data";

function Examples() {
  const [selected, setSelected] = useState();

  const handleSelect = (button) => {
    setSelected(button);
    // console.log(selected); // Will update the previous value because react schedules the state update
  };

  let tabContent = <p>Please select a content.</p>;

  if (selected) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selected].title}</h3>
        <p>{EXAMPLES[selected].description}</p>
        <pre>
          <code>{EXAMPLES[selected].code}</code>
        </pre>
      </div>
    );
  }

  return (
    <section id="examples">
      <h2>Examples</h2>
      <menu>
        <TabButton
          isSelected={selected === "components"}
          onSelect={() => handleSelect("components")}
        >
          Components
        </TabButton>
        <TabButton
          isSelected={selected === "jsx"}
          onSelect={() => handleSelect("jsx")}
        >
          JSX
        </TabButton>
        <TabButton
          isSelected={selected === "props"}
          onSelect={() => handleSelect("props")}
        >
          Props
        </TabButton>
        <TabButton
          isSelected={selected === "state"}
          onSelect={() => handleSelect("state")}
        >
          State
        </TabButton>
      </menu>
      {tabContent}
    </section>
  );
}

export default Examples;
