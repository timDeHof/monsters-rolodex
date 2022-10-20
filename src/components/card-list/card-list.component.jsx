import Card from "../card/card.component";
import "./card-list.styles.css";
const CardList = ({ monsters }) => {
  return (
    <div className='card-list'>
      {monsters.map((monster) => {
        return <Card monster={monster} key={monster.id} />;
      })}
      {console.log(monsters)}
    </div>
  );
};

export default CardList;
