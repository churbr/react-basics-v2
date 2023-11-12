import Header from "./components/Header/Header";
import CoreConcept from "./components/CoreConcept.jsx";
import { CORE_CONCEPTS, EXAMPLES } from "./data";
import TabButton from "./components/TabButton";
import { useState } from "react";

function App() {
  const [selected, setSelected] = useState();

  const handleSelect = (button) => {
    setSelected(button);
    console.log(selected); // Will update the previous value because react schedules the state update
  }

  let tabContent = <p>Please select a content.</p>;

  if(selected) {
    tabContent =
    <div id="tab-content">
      <h3>{EXAMPLES[selected].title}</h3>
      <p>{EXAMPLES[selected].description}</p>
      <pre>
        <code>{EXAMPLES[selected].code}</code>
      </pre>
    </div>
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concept!</h2>
          <ul>
            <CoreConcept
              title={CORE_CONCEPTS[0].title}
              image={CORE_CONCEPTS[0].image}
              description={CORE_CONCEPTS[0].description}
            />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton isSelected={selected === 'components'} onSelect={() => handleSelect('components')}>Components</TabButton>
            <TabButton isSelected={selected === 'jsx'} onSelect={() => handleSelect('jsx')}>JSX</TabButton>
            <TabButton isSelected={selected === 'props'} onSelect={() => handleSelect('props')}>Props</TabButton>
            <TabButton isSelected={selected === 'state'} onSelect={() => handleSelect('state')}>State</TabButton>
          </menu>
        </section>
        {tabContent}
      </main>
    </div>
  );
}

export default App;
