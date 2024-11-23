import './Card.css'

function Card(props){
  const classes = 'card ' + props.className; 
  return (
    <div style={props.style} className={classes}>
      {props.children}
    </div>
  );
}

export default Card;
