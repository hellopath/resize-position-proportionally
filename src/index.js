const LANDSCAPE = 'LANDSCAPE'
const PORTRAIT = 'PORTRAIT'

const resizePositionProportionally = (windowW, windowH, contentW, contentH, orientation) => {
  const aspectRatio = contentW / contentH
  let scale
  if (orientation !== undefined) {
    switch (orientation) {
    case LANDSCAPE:
      scale = (windowW / contentW) * 1
      break
    case PORTRAIT:
      scale = (windowH / contentH) * 1
      break
    default:
      scale = (windowW / contentW) * 1
    }
  } else {
    scale = ((windowW / windowH) < aspectRatio) ? (windowH / contentH) * 1 : (windowW / contentW) * 1
  }
  const newW = contentW * scale
  const newH = contentH * scale
  return {
    width: newW,
    height: newH,
    left: (windowW >> 1) - (newW >> 1),
    top: (windowH >> 1) - (newH >> 1),
    scale: scale
  }
}

export default resizePositionProportionally