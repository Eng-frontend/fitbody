import React from 'react'
import '../../styles/start.css'
import trainerImg from '../../assets/img/trainer.png'

const Start = () => {
  return <section id='classes'>
    <div className="container">
        <div className="start__wrapper">
            <div className="start__img">
                <img src={trainerImg} alt="" data-aos='fade-right' data-aos-duration="1500" />
            </div>

            <div className="start__content" data-aos='fade-left' data-aos-duration="1500">
                <h2 className="section__title">

                    Ready to make a <span className='highlights'>change?</span>
                </h2>
                    <p>Regular physical activity helps strengthen your muscles and improve your endurance. Exercise helps deliver oxygen and nutrients to your body's tissues and helps your cardiovascular system work more efficiently. When your heart and lungs are healthy, you have more energy to do everyday tasks.
                </p>

                <button className="register__btn">Get Started</button>
            </div>
        </div>
    </div>
  </section>
}

export default Start