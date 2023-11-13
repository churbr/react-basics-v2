import CoreConcept from './CoreConcept';
import Section from './Section';
import { CORE_CONCEPTS } from '../data';

export default function CoreConcepts() {
    return (
        <Section id="core-concepts" title="Core Concept!">
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
      </Section>
    );
}