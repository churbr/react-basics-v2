function CoreConcept({ title, image, description }) {
    // Destructure props
    return (
      <li>
        <img src={image} alt={title} />
        <h3>{title}</h3>
        <p>{description}</p>
      </li>
    );
  }

  export default CoreConcept;