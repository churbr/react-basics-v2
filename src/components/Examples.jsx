import React, { useState } from "react";
import Tabs from "./Tabs";
import TabButton from "./TabButton";
import Section from "./Section";
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
    <Section id="examples" title="Examples">
      <Tabs
        /**
         * If you want to use custom component as container, put the function name (i.e: ButtonContainer={Section})
         * And if you want to use the built-in html element, just put the name (i.e: "div"; "p", "ul", "li", "menu", etc.)
        **/
        ButtonContainer="menu"
        buttons={
          <>
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
          </>
        }
      >
        {tabContent}
      </Tabs>
    </Section>
  );
}

export default Examples;
