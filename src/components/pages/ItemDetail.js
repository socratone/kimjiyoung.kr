import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styles from './ItemDetail.module.scss';

const ItemDetail = () => {
  const { category, id } = useParams();
  const sacredThings = useSelector(state => state.entities.sacredThings); 
  
  if (!sacredThings[category]) return null;

  const getCurrentItem = () => {
    const [ item ] = sacredThings[category].items.filter(item => {
      return item.id.toString() === id;
    });
    return item;
  }

  const { title, description, price, image } = getCurrentItem();

  return ( 
    <section className={styles.item}>
      <div className={styles.imageWrap}>
        <div
          className={styles.image} 
          style={{backgroundImage: `url('${image}')`}}
        />
      </div>
      <div>
        <div className={styles.text}>
          <p className={styles.title}>{title}</p>
          {price && <p>{price.toLocaleString() + '원'}</p>}
        </div>
        <p>{description}</p>
      </div>
    </section>
  );
}
 
export default ItemDetail;