import React from 'react'
import PropTypes from 'prop-types'

const Header = ({ profileImage, heading, subheading }) =>
  <div style={styles.main}>
    <span style={styles.text}>
      <p style={styles.heading}>{heading}</p>
      <p style={styles.subheading}>{subheading}</p>
    </span>
  </div>

const styles = {
  main: {
    display: 'flex'
  },
  img: {
    width: 60,
    height: 60,
    minHeight: 'auto',
    borderRadius: 60,
    marginRight: 10,
    filter: 'drop-shadow(0 0px 2px rgba(0, 0, 0, 0.5))',
    border: '2px solid rgba(255, 255, 255, 0.8)',
    backgroundSize: 'cover',
    backgroundPosition: 'center center'
  },
  text: {
    display: 'flex',
    flexDirection: 'column',
    padding: 20
  },
  heading: {
    fontSize: '1.9rem',
    marginBottom: '1rem',
    fontFamily: `"Abril Titling Bold", "Book Antiqua", Palatino, "Palatino Linotype", "Palatino LT STD", Georgia, serif`,
    color: 'rgba(255, 255, 255, 0.9)'
  },
  subheading: {
    fontSize: '1rem',
    lineHeight: '1.2',
    color: 'rgba(255, 255, 255, 0.9)'
  }
}

Header.propTypes = {
  heading: PropTypes.string,
  subheading: PropTypes.string,
  profileImage: PropTypes.string
}

export default Header
