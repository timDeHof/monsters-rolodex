import { Monster } from "../../App"

import "./card.styles.css"
import { MdEmail } from "react-icons/md"
import {
  FaHome,
  FaTwitter,
  FaInstagram,
  FaFacebook,
  FaDribbble,
  FaLinkedinIn,
} from "react-icons/fa"
import { BsGlobe, BsFillTelephoneFill } from "react-icons/bs"

type CardProps = {
  monster : Monster;
}

const Card = ({ monster }: CardProps) => {
  const { name, email, id, website, phone, address } = monster
  const { city, street, suite, zipcode } = address

  return (
    <div className='card-container' key={id}>
      <div className='single-card'>
        <div className='front'>
          <img alt={`monster ${name}`} src={`https://robohash.org/${id}?set=set2&size=180x180`} />
          <div className='content'>
            <h2>{name}</h2>
          </div>
        </div>

        <div className='back'>
          <div className='content'>
            <div className='address'>
              <FaHome />
              <p>
                {street} {suite}
              </p>
              <p>
                {city} {zipcode}
              </p>
            </div>
            <div className='email'>
              <MdEmail />
              <p>{email}</p>
            </div>
            <div className='website'>
              <BsGlobe />
              <p>{website}</p>
            </div>
            <div className='phone'>
              <BsFillTelephoneFill />
              <p>{phone}</p>
            </div>
            <div className='socials'>
              <FaTwitter />
              <FaInstagram />
              <FaFacebook />
              <FaDribbble />
              <FaLinkedinIn />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
