import CoreConcept from './CoreConcept';
import { CORE_CONCEPTS } from '../data';

export default function CoreConcepts() {
    return (
        <section id="core-concepts">
        <h2>Core Concept!</h2>
        <ul>
          {/*
            <CoreConcept
              title={CORE_CONCEPTS[0].title}
              image={CORE_CONCEPTS[0].image}
              description={CORE_CONCEPTS[0].description}
            />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          */}

          {CORE_CONCEPTS.map((conceptItem) => {
            return  <CoreConcept key={conceptItem.title} {...conceptItem} />
          })}
        </ul>
      </section>
    );
}