import React from 'react';
import '../assets/styles/components/Card.scss';

const Card = () => (

  <div className='Card__content'>
    <div className='Card__title'>
      <h3>Categorias</h3>
    </div>
    <form>
      <div className='radio'>
        <label>
          <input type='radio' value='Delicioso' checked={true} />
            Delicioso
        </label>
      </div>
      <div className='radio'>
        <label>
          <input type='radio' value='fiestas' />
            Fiestas
        </label>
      </div>
      <div className='radio'>
        <label>
          <input type='radio' value='niños' />
            Niños y bebes
        </label>
      </div>
    </form>

  </div>
);

export default Card;

