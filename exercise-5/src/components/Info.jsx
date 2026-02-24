export default function Person(props) {
  return (
    <div className="card">
      <img src={props.person.image.src} alt={props.person.image.alt} />
      <h3>{props.person.name}</h3>
    </div>
  );
}
