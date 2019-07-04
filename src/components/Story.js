import React from 'react'
import PropTypes from 'prop-types'
import Header from './Header'
import Body from './Body'
import SeeMore from './SeeMore'
import globalStyle from './../styles.css'

export default class Story extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loaded: false
    }
    this.getStoryContent = this.getStoryContent.bind(this)
  }
  componentDidUpdate(prevProps) {
    if (this.props.story !== prevProps.story) {
      this.pauseId && clearTimeout(this.pauseId)
      this.pauseId = setTimeout(() => {
        this.setState({loaded: false})
      }, 300)
      this.props.action('pause', true)
      this.vid && this.vid.addEventListener('waiting', () => {
        this.props.action('pause', true)
      })
      this.vid && this.vid.addEventListener('playing', () => {
        this.props.action('play', true)
      })
    }
    if (this.vid && (this.props.playState !== prevProps.playState) && !this.props.bufferAction) {
      if (this.props.playState) {
        this.vid.pause()
      } else {
        this.vid.play().catch(e => console.log(e))
      }
    }
  }
  toggleMore = show => {
    this.setState({ showMore: show })
  }
  imageLoaded = () => {
    try {
      if (this.pauseId) clearTimeout(this.pauseId)
      this.setState({loaded: true})
      this.props.action('play', true)
    } catch (e) {
      console.log(e)
    }
  }
  videoLoaded = () => {
    try {
      this.props.getVideoDuration(this.vid.duration)
      this.vid && this.vid.play().then(() => {
        this.imageLoaded()
      }).catch(e => {
        this.props.action('pause')
        console.log(e)
      })
    } catch (e) {
      console.log(e)
    }
  }
  getStoryContent() {
    let source = typeof this.props.story === 'object' ? this.props.story.url : this.props.story
    let storyContentStyles = this.props.story.styles || this.props.storyContentStyles || styles.storyContent
    let type = this.props.story.type === 'video' ? 'video' : 'image'
    if (type === 'image') {
      return (<div style={{
        ...storyContentStyles,
        width: '100%',
        height: '100%',
        backgroundImage: `url(${source})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center'
      }}>
        <img
          style={{display: 'none'}}
          src={source}
          onLoad={this.imageLoaded}
        />
      </div>
      )
    }
    return (type === 'video' ? <video ref={r => { this.vid = r }} style={storyContentStyles} src={source} controls={false} onLoadedData={this.videoLoaded} autoPlay playsInline /> : null)
  }
  render() {
    // let isHeader = typeof this.props.story === 'object' && this.props.story.header
    const { heading, subheading, authorName, timeago, profileImage } = this.props.story.header
    const { action, height, width, story: { seeMore } } = this.props
    return (
      <div className={globalStyle.story} style={{...styles.story, width, height}}>
        {this.getStoryContent()}
        <div style={{...styles.header}}>
          <Header authorName={authorName} timeago={timeago} image={profileImage} />
        </div>
        <div style={{...styles.body}}>
          <Body heading={heading} subheading={subheading} />
        </div>
        {!this.state.loaded && (
          <div style={{...styles.loading, width, height}}>
            {this.props.loader || <div className={globalStyle.spinner}>🍌</div>}
          </div>)
        }
        {/* {seeMore &&
          <div style={{position: 'absolute', margin: 'auto', bottom: 0, zIndex: 9999, width: '100%'}}>
            <SeeMore action={action} toggleMore={this.toggleMore} showContent={this.state.showMore} seeMoreContent={seeMore} />
          </div>
        } */}
      </div>
    )
  }
}

const styles = {
  story: {
    display: 'flex',
    position: 'relative',
    overflow: 'hidden'
  },
  storyContent: {
    width: 'auto',
    maxWidth: '100%',
    maxHeight: '100%',
    margin: 'auto'
  },
  header: {
    position: 'absolute',
    paddingLeft: 20,
    paddingRight: 20,
    top: 40,
    zIndex: 19
  },
  body: {
    position: 'absolute',
    paddingLeft: 10,
    paddingRight: 10,
    bottom: 20,
    zIndex: 19
  },
  loading: {
    position: 'absolute',
    left: 0,
    top: 0,
    background: 'rgba(0, 0, 0, 0.9)',
    zIndex: 9,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#ccc'
  }
}

Story.propTypes = {
  story: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string
  ]),
  height: PropTypes.number,
  width: PropTypes.number,
  action: PropTypes.func,
  loader: PropTypes.element,
  header: PropTypes.element,
  playState: PropTypes.bool,
  getVideoDuration: PropTypes.func,
  bufferAction: PropTypes.bool,
  storyContentStyles: PropTypes.object
}
