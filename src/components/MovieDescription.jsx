import React from 'react';

function MovieDescription() {
  return (
    <>
      <section>
        <article>
          <div className='mt-5 bg-yellow-700'>
            <h3 className='mt-2'>resumen</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloribus, ipsa magnam ducimus sunt at soluta esse accusantium
              dolorem deleniti animi, quibusdam eum qui nemo impedit minima
              autem, nostrum labore atque. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Aliquam nulla accusamus tempore
              minima saepe incidunt deserunt aspernatur doloremque maiores
              necessitatibus, maxime consequuntur mollitia quasi perferendis
              deleniti molestias consectetur tenetur! In. Lorem ipsum dolor sit
              amet, consectetur adipisicing elit. Corrupti impedit quod quidem
              modi eum non illo unde fugiat ipsam vitae. Molestias pariatur
              deleniti debitis cum sunt assumenda dignissimos fugit id? Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Culpa laborum
              corporis recusandae earum reprehenderit velit voluptas unde nemo,
              aspernatur at explicabo expedita enim temporibus sed libero, sunt
              atque nostrum veniam.
            </p>
          </div>
          <div className='bg-gray-400 mt-5 '>
            <ul className='grid grid-cols-2'>
              <ul>
                <li>nombre</li>
                <li>cargo</li>
              </ul>
              <ul>
                <li>nombre</li>
                <li>cargo</li>
              </ul>
              <ul>
                <li>nombre</li>
                <li>cargo</li>
              </ul>
            </ul>
          </div>
        </article>
      </section>
    </>
  );
}

export default MovieDescription;
