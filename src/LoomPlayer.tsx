import React from 'react'

type Config = {
  timestamps?: number | string
  muted?: boolean
  autoplay?: boolean
  hideEmbedTopBar?: boolean
  hideTitle?: boolean
  hideOwner?: boolean
  hideShare?: boolean
}

type LoomPlayerProps = React.IframeHTMLAttributes<HTMLIFrameElement> & Config

const generate_loom_url = (url?: string, config?: Config) => {
  const options = []

  if (url) {
    url = url.replace(
      'https://www.loom.com/share/',
      'https://www.loom.com/embed/'
    )
    if (config?.autoplay) {
      options.push('autoplay=true')
    }
    if (config?.timestamps) {
      if (typeof config.timestamps === 'number') {
        options.push(`t=${config.timestamps}s`)
      } else {
        options.push(`t=${config.timestamps}`)
      }
    }
    if (config?.muted) {
      options.push('muted=true')
    }
    if (config?.hideEmbedTopBar) {
      options.push('hideEmbedTopBar=true')
    }
    if (config?.hideTitle) {
      options.push('hide_title=true')
    }
    if (config?.hideOwner) {
      options.push('hide_owner=true')
    }
    if (config?.hideShare) {
      options.push('hide_share=true')
    }
  }

  return `${url?.split('?')[0]}?${options.join('&')}`
}

const LoomPlayer = ({ ...iframe_props }: LoomPlayerProps) => {
  const src = generate_loom_url(iframe_props.src, {
    autoplay: iframe_props.autoplay,
    timestamps: iframe_props.timestamps,
    muted: iframe_props.muted,
    hideEmbedTopBar: iframe_props.hideEmbedTopBar,
    hideTitle: iframe_props.hideTitle,
    hideOwner: iframe_props.hideOwner,
    hideShare: iframe_props.hideShare
  })

  return (
    <div className='react-loom-player-wrapper'>
      <iframe
        {...iframe_props}
        src={src}
        style={{
          border: 'none',
          width: 960,
          height: 540,
          ...iframe_props.style
        }}
        className='react-loom-player'
        allowFullScreen
      ></iframe>
    </div>
  )
}

export default LoomPlayer
