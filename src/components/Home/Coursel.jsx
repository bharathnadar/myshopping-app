import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import styles from '../Home/Coursel.module.css';
import img1 from '../../assets/banner1.jpg';
import img2 from '../../assets/banner2.jpg';
import img3 from '../../assets/banner3.jpg';

const Coursel = () => {
  return (
    <div className={styles.carouselContainer}>
      <Carousel
        autoPlay
        infiniteLoop
        interval={2000}
        showThumbs={false}
        showStatus={false}
      >
        <div>
          <img src={img1} alt="Image 1" />
          <p className="legend">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda omnis corrupti vel quam deleniti impedit cupiditate facilis, nisi quibusdam earum quia necessitatibus repellat eligendi eaque incidunt ipsam sunt cumque nam.</p>
        </div>
        <div>
          <img src={img3} alt="Image 2" />
          <p className="legend">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor repudiandae similique, debitis voluptatibus quia non. Iure officia ratione nobis perferendis recusandae dicta error nesciunt, illum ex velit voluptates ipsam laboriosam?</p>
        </div>
        <div>
          <img src={img2} alt="Image 3" />
          <p className="legend">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore unde eaque, animi consequuntur quis ut, vero itaque blanditiis eum in nesciunt nulla accusantium eos sequi explicabo autem velit fugiat est.</p>
        </div>
      </Carousel>
    </div>
  );
}

export default Coursel;
