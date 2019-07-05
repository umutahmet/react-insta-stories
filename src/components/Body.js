import React from 'react'
import PropTypes from 'prop-types'
import globalStyle from './../styles.css'

const Body = ({ profileImage, heading, subheading }) =>
  <div style={styles.main}>
    <span style={styles.text}>
      <p className={globalStyle.bodyHeading}>{heading}</p>
      <p className={globalStyle.bodySubheading}>{subheading}</p>
      <div style={{...styles.readMore}}>
        <div style={{...styles.blank}}>&nbsp;</div>
        <a href='https://www.smh.com.au/opinion/prepare-for-the-global-bananapocalypse-20171226-h0a2p2.html' style={{...styles.readMoreButton}}>
          READ ARTICLE
        </a>
        <div style={{...styles.blank}}>&nbsp;</div>
      </div>
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
  blank: {
    width: 50
  },
  readMore: {
    display: 'flex',
    marginTop: '2rem'
  },
  readMoreButton: {
    position: 'relative',
    backgroundColor: '#0089f6',
    borderRadius: '4px',
    top: 'auto',
    right: 'auto',
    flexGrow: 1,
    color: 'white',
    padding: '10px',
    textAlign: 'center'
  }
}

Body.propTypes = {
  heading: PropTypes.string,
  subheading: PropTypes.string,
  profileImage: PropTypes.string
}

export default Body
