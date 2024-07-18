
import './Card.css'

export type CardProps = {
  title: string;
  content: string;
  imageUrl?: string;
}

const Card: React.FC<CardProps> = ({ title, content, imageUrl }) => {
  return (
    <div className={'card'}>
      {imageUrl && <img src={imageUrl} alt={title} className={'image'} />}
      <div className={'body'}>
        <h2 className={'title'}>{title}</h2>
        <p className={'content'}>{content}</p>
      </div>
    </div>
  );
};
export default Card