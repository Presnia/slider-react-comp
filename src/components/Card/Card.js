import './Card.module.css';

const Card = () => {
  return (
    <div className="card">
      <img className="img" src="/" alt="slider image"/>
      <section className="slide-description">
        <h1>This is slide image</h1>
        <p>Some description</p>
      </section>
    </div>
  );
};

export default Card;