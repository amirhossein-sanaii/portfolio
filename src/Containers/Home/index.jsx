// scss
import './style.scss'

// Animation library react
import { Animate } from "react-simple-animate"

import { FaTelegram, FaLinkedin, FaInstagram } from 'react-icons/fa'
const Home = () => {
  return (
    <>
      <section className='home'>
        <div className='home__text-wrapper'>
          <h1>
            Hello Im Amirhossein
            <br />
            Front End Devlopers
          </h1>

        </div>
      </section>
      <section className='button'>
      <Animate
        play
        duration={1}
        delay={0}
        start={{
           transform: 'translate(800px)' 
        }}
        end={{
          transform: 'translatex(0px)'
        }}
      >
          <div className='button__home__div'>
            <button className='button__home__button'>Her Me</button>
            <a href='https://storage.jjcloud.ir/records/files/uploads/documents/df5e0c70-9c19-4363-b121-f8e4d03083c2.pdf?requester=34362e3232352e3232322e313539&resource=753a31393639323634&from=6170706c69636174696f6e5f666f726d&X-Amz-Content-Sha256=e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=oetSom924MQvtCRu9N6vvQ4bt8cG9HSpRnxWU756SyWy5NVt6nTpmfA9aV2b%2F20220819%2F%2Fs3%2Faws4_request&X-Amz-Date=20220819T174107Z&X-Amz-SignedHeaders=host&X-Amz-Expires=1800&X-Amz-Signature=bf72c064472b5f60063eb36fa2eb2131bf8925bf3fc0cea93a99b6834de2096c' className='button__home__button'>Resume</a>
          </div>
      </Animate>
        </section>
      <section className='icons'>
        <span className='icons__me'><a href='https://t.me/donald_o'><FaTelegram size={36} /></a></span>
        <span className='icons__me'><a href='https://www.instagram.com/amirhossein.sanaii/'><FaInstagram size={36} /></a></span>
        <span className='icons__me'><a href='https://www.linkedin.com/in/amirhossein-sanaii-765109241'><FaLinkedin size={36} /></a></span>
      </section>
    </>
  )
}

export default Home