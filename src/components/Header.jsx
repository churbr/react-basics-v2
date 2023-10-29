import reactImage from "../assets/react-core-concepts.png";

function Header() {
    const text = ["Crucial", "Core", "Important", "Fundamental"];

    function genRandomInt(max) {
      return Math.floor(Math.random() * (max + 1));
    }

    return (
      <header>
        <img src={reactImage} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          {text[genRandomInt(3)]} React concepts you will need for almost any app
          you are going to build!
        </p>
      </header>
    );
  }

  export default Header;