export default (props) => {
  return (
    <li>
      <img src={`static/images/${props.image}`} alt="" />
      <h2>{props.name}</h2>
    </li>
  );
}