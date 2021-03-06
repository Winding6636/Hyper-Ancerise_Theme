import illust from '../images/anceril.png'

export default ({illust: show, opacity}) => {
  return `
    .terms_terms:before {
      content: "";
      display: ${show ? 'block' : 'none'};
      position: absolute;
      z-index: 1;
      top: 0;
      left: 10px;
      width: 100%;
      height: 130%;
      background-image: url(${illust});
      background-size: auto 80%;
      background-position: right bottom;
      background-repeat: no-repeat;
      opacity: ${opacity};
    }
    .xterm .xterm-viewport {
      background-color: rgba(0,0,0,0) !impotant;
    }
  `
}
