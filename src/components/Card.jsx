import React from 'react';
import '../assets/styles/components/Card.scss';

const Card = () => (

  <div className='Card__content'>
    <div className='Card__title'>
      <h3>Día de entrega</h3>
    </div>
    <form>
      <div className='Radio'>
        <label>
          <input type='radio' value='Cualquier' checked={true} />
            Cualquier día
        </label>
      </div>
      <div className='Radio'>
        <label>
          <input type='radio' value='Hoy' />
            Recibelo Hoy
        </label>
      </div>
      <div className='Radio'>
        <label>
          <input type='radio' value='Mañana' />
            Recibelo Mañana
        </label>
      </div>
    </form>
    <div className='Card__title'>
      <h3>Lugar de entrega</h3>
    </div>
    <form>
      <div className='Radio'>
        <label>
          <input type='radio' value='Todos' checked={true} />
            Todos
        </label>
      </div>
      <div className='Radio'>
        <label>
          <input type='radio' value='Envio' />
            Envío Nacional
        </label>
      </div>
      <div className='Radio'>
        <label>
          <input type='radio' value='cmdx' />
            CDMX
        </label>
      </div>
    </form>
    <div className='Card__title'>
      <h3>Rango de Precios</h3>
    </div>

    <div className='Radio'>
      <label
        htmlFor='/'
        placeholder='Elige una opción'
      />
      <select id='precio' className='Price'>
        <option>Debajo de $100</option>
        <option>$100 a $200</option>
        <option>$200 a $300</option>
        <option>$300 a $400</option>
        <option>$400 a $500</option>
        <option>$500 a más</option>

      </select>
    </div>

  </div>
);

export default Card;

