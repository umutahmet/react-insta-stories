import React from 'react'
import PropTypes from 'prop-types'

const Header = ({ image, authorName, timeago }) =>
  <div style={styles.main}>
    {image && <div style={{...styles.img, backgroundImage: `url(${image})`}} />}
    <span style={styles.text}>
      <p style={styles.authorName}>{authorName}</p>
      <p style={styles.timeago}>{timeago}</p>
    </span>
  </div>

const styles = {
  main: {
    display: 'flex',
    alignItems: 'center'
  },
  img: {
    width: 50,
    height: 50,
    minHeight: 'auto',
    borderRadius: 50,
    marginRight: 10,
    filter: 'drop-shadow(0 0px 2px rgba(0, 0, 0, 0.5))',
    border: '2px solid rgba(255, 255, 255, 0.8)',
    backgroundSize: 'cover',
    backgroundPosition: 'center center'
  },
  text: {
    display: 'flex',
    flexDirection: 'column'
  },
  authorName: {
    fontSize: '1.2rem',
    fontFamily: `"Abril Titling Bold", "Book Antiqua", Palatino, "Palatino Linotype", "Palatino LT STD", Georgia, serif`,
    color: 'rgba(255, 255, 255, 0.9)'
  },
  timeago: {
    fontSize: '0.9rem',
    color: 'rgba(255, 255, 255, 0.9)'
  }
}

Header.propTypes = {
  heading: PropTypes.string,
  subheading: PropTypes.string,
  profileImage: PropTypes.string
}

export default Header
