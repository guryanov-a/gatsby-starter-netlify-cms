import React from 'react';
import Link from 'gatsby-link';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faVk from '@fortawesome/fontawesome-free-brands/faVk';
import faWhatsapp from '@fortawesome/fontawesome-free-brands/faWhatsapp';
import faViber from '@fortawesome/fontawesome-free-brands/faViber';
import faLocationArrow from '@fortawesome/fontawesome-free-solid/faLocationArrow';
import faClock from '@fortawesome/fontawesome-free-solid/faClock';
import faPhone from '@fortawesome/fontawesome-free-solid/faPhone';
import faPhoneVolume from '@fortawesome/fontawesome-free-solid/faPhoneVolume';
import faEnvelope from '@fortawesome/fontawesome-free-solid/faEnvelope';
import IconWithText from '../IconWithText';
import styles from './styles.module.scss';

const Footer = () => (
  <footer className={styles.footer}>
    <div className="container">
      <div className="row">
        <div className="col col-12 col-md">
          <div>
            <h3 className={styles.colTitle}>Информация</h3>
            <div>
              <ul className={styles.menu}>
                <li className={styles.menuItem}>
                  <Link className={styles.menuLink} to="/delivery">
                    Доставка и оплата
                  </Link>
                </li>
                <li className={styles.menuItem}>
                  <Link className={styles.menuLink} to="/warehouse">
                    Cамовывоз
                  </Link>
                </li>
                <li className={styles.menuItem}>
                  <Link className={styles.menuLink} to="/testimonials">
                    Отзывы
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col col-12 col-md">
          <div>
            <h3 className={styles.colTitle}>Присоединяйтесь</h3>
            <div>
              <ul className={styles.menu}>
                <li className={styles.menuItem}>
                  <a className={styles.menuLink} href="https://vk.com/club147409633" target="_blank">
                    <IconWithText
                      icon={faVk}
                      text="Вконтакте"
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col col-12 col-md">
          <div>
            <h3 className={styles.colTitle}>Контакты</h3>
            <div>
              <ul className={styles.menu}>
                <li className={styles.menuItem}>
                  <IconWithText
                    icon={faLocationArrow}
                    text="г. Омск"
                  />
                </li>
                <li className={styles.menuItem}>
                  <IconWithText
                    icon={faClock}
                    text="Время работы: ежедневно, 9:00-22:00"
                  />
                </li>
                <li className={styles.menuItem}>
                  <a href="tel:+7-913-631-91-61">
                    <IconWithText
                      icon={faPhone}
                      text="+7-913-631-91-61"
                    />
                  </a>
                </li>
                <li className={styles.menuItem}>
                  <IconWithText
                    icon={faPhoneVolume}
                    text={<button className="btn">Заказать обратный звонок</button>}
                  />
                </li>
                <li className={styles.menuItem}>
                  <a href="whatsapp://send?abid=+79136319161">
                    <IconWithText
                      icon={faWhatsapp}
                      text="WhatsUp - +79136319161"
                    />
                  </a>
                </li>
                <li className={styles.menuItem}>
                  <a href="viber://pa?chatURI=+79136319161">
                    <IconWithText
                      icon={faViber}
                      text="Viber - +79136319161"
                    />
                  </a>
                </li>
                <li className={styles.menuItem}>
                  <a href="email:220pluse@gmail.com">
                    <IconWithText
                      icon={faEnvelope}
                      text="Email - 220pluse@gmail.com"
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
