import React from 'react'
import PropTypes from 'prop-types'
import style from './../styles.css'
import up from './../up.png'

export default function seeMore(props) {
  const { showContent, seeMoreContent, toggleMore, action } = props
  return (
    showContent
      ? (
        <div className={style.seeMoreExpanded}>
          {seeMoreContent}
          <div onClick={() => {
            toggleMore(false)
            action('play')
          }} className={style.seeMoreClose}><span>✕</span></div>
        </div>
      )
      : (
        <div onClick={() => {
          toggleMore(true)
          action('pause')
        }} className={style.seeMore}>
          <span className={style.seemoreIcon}><img src={up} /></span>
          <span className={style.seemoreText}>Read more</span>
        </div>
      )
  )
}

seeMore.propTypes = {
  seeMoreContent: PropTypes.object,
  showContent: PropTypes.bool,
  action: PropTypes.func,
  toggleMore: PropTypes.func
}
