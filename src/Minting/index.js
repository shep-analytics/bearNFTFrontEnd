import React from 'react';
import style from './style.module.css';

const Minitng = () => {
  return (
    <div className={style.wrap}>
      <div className={style.gridWrap}>
        <div className={style.grid}>
          <div className={style.img}>
            <img
              src='https://uploads-ssl.webflow.com/60a2950b08beb715e850d8a5/611a726e05800e74d68787c5_326%20copy.png'
              alt='img'
            />
          </div>
          <div className={style.mintTitle}>Mint 1</div>
          <button>Mint Now</button>
        </div>
        <div className={style.grid}>
          <div className={style.img}>
            <img
              src='https://uploads-ssl.webflow.com/60a2950b08beb715e850d8a5/611a726e05800e74d68787c5_326%20copy.png'
              alt='img'
            />
          </div>
          <div className={style.mintTitle}>Mint 2</div>
          <button>Mint Now</button>
        </div>
        <div className={style.grid}>
          <div className={style.img}>
            <img
              src='https://uploads-ssl.webflow.com/60a2950b08beb715e850d8a5/611a726e05800e74d68787c5_326%20copy.png'
              alt='img'
            />
          </div>
          <div className={style.mintTitle}>Mint 5</div>
          <button>Mint Now</button>
        </div>
        <div className={style.grid}>
          <div className={style.img}>
            <img
              src='https://uploads-ssl.webflow.com/60a2950b08beb715e850d8a5/611a726e05800e74d68787c5_326%20copy.png'
              alt='img'
            />
          </div>
          <div className={style.mintTitle}>Mint 10</div>
          <button>Mint Now</button>
        </div>
      </div>
    </div>
  );
};

export default Minitng;
