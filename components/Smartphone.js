const style = document.createElement('style')
style.textContent = /*css*/`
  .container {
    position: relative;
    perspective: 3000px;
  }

  .phone {
    position: absolute;
    transform-style: preserve-3d;
    transform-origin: center;
  }

  .face {
    position: absolute;
    transform-origin: center;
    background: #303030;
  }

  .center {
    position: absolute;
    transform-origin: center;
    background: #303030;
    width: 296px;
    height: 636px;
    border-radius: 20px;
    box-sizing: border-box;
    transform: translate3d(-148px, -318px, 9px);
  }

  .front,
  .back {
    width: 300px;
    height: 640px;
    border-radius: 20px;
    box-sizing: border-box;
  }

  .front {
    transform: translate3d(-150px, -320px, 10px);
    background: #1b1b1b;
    border: 3px solid #161616;
    border-top: 9px solid #161616;
  }

  .front .speaker {
    position: absolute;
    top: -7px;
    left: 50%;
    transform: translateX(-50%);
    width: 150px;
    height: 5px;
    border-radius: 0 0 10px 10px;
    background: #242424;
  }

  .front .screen {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 20px;
    overflow: hidden;
    pointer-events: none;
    user-select: none;
    -webkit-user-drag: none;
  }

  .front .camera {
    position: absolute;
    top: 1px;
    left: 50%;
    transform: translateX(-50%);
    width: 11px;
    height: 11px;
    border-radius: 50%;
    background: #161616;
    border: 1px solid #242424;
  }

  .back {
    transform: translate3d(-150px, -320px, -10px) rotateY(180deg);
    background: radial-gradient(50% 50%, #242424 80%,#303030 150%);
  }

  .back .camera {
    position: absolute;
    top: 63px;
    left: 70px;
    transform: translateX(-50%);
    width: 27px;
    height: 27px;
    border-radius: 50%;
    background: radial-gradient(50% 50%, #161616 0% 30%,#303030 33% 50%, #161616 60%);
    border: 1px solid #4e4e57;
    box-shadow: -1px -1px 2px 1px #ffffff20, 1px 1px 2px 1px #00000070;
  }

  .back .flashlight {
    position: absolute;
    top: 101px;
    left: 70px;
    transform: translateX(-50%);
    width: 17px;
    height: 17px;
    border-radius: 50%;
    background: radial-gradient(50% 50%, #eee 40%, #161616 70%);
    border: 1px solid #4e4e57;
    box-shadow: -1px -1px 2px 1px #ffffff20, 1px 1px 2px 1px #00000070;
  }

  .back .fingerprint-scanner {
    position: absolute;
    top: 133px;
    left: 50%;
    transform: translateX(-50%);
    width: 50px;
    height: 50px;
    background: radial-gradient(50% 50%, #161616, #202020);
    border-radius: 50%;
    border: 1px solid #4e4e57;
    box-shadow: -1px -1px 2px 1px #ffffff20, 1px 1px 2px 1px #00000070;
  }

  .back .razion-logo {
    position: absolute;
    bottom: 77px;
    left: 50%;
    width: 111px;
    height: auto;
    transform: translateX(-50%);
    object-fit: contain;
    pointer-events: none;
    user-select: none;
    -webkit-user-drag: none;
    filter: drop-shadow(1px 1px 1px #00000070);
  }

  .top,
  .bottom {
    width: 263px;
    height: 20px;
  }

  .top {
    transform: translate3d(-131.5px, -330px, 0) rotateX(90deg);
  }
  
  .top-left,
  .top-right,
  .bottom-left,
  .bottom-right {
    width: 2px;
    height: 20px;
    transform-style: preserve-3d;
    transform-origin: right;
  }

  .top-right,
  .bottom-right {
    transform-origin: left;
  }

  .tl1 { transform: translate3d(-133.5px, -330px, 0) rotateX(90deg) rotateY(-8deg); }
  .tl2 { transform: translate3d(-135.45px, -329.73px, 0) rotateX(90deg) rotateY(-13deg); }
  .tl3 { transform: translate3d(-137.39px, -329.28px, 0) rotateX(90deg) rotateY(-19deg); }
  .tl4 { transform: translate3d(-139.27px, -328.63px, 0) rotateX(90deg) rotateY(-24deg); }
  .tl5 { transform: translate3d(-141.1px, -327.81px, 0) rotateX(90deg) rotateY(-29.7deg); }
  .tl6 { transform: translate3d(-142.83px, -326.82px, 0) rotateX(90deg) rotateY(-35.3deg); }
  .tl7 { transform: translate3d(-144.45px, -325.67px, 0) rotateX(90deg) rotateY(-41.5deg); }
  .tl8 { transform: translate3d(-145.94px, -324.35px, 0) rotateX(90deg) rotateY(-47.3deg); }
  .tl9 { transform: translate3d(-147.29px, -322.88px, 0) rotateX(90deg) rotateY(-52.7deg); }
  .tl10 { transform: translate3d(-148.5px, -321.3px, 0) rotateX(90deg) rotateY(-58.3deg); }
  .tl11 { transform: translate3d(-149.54px, -319.6px, 0) rotateX(90deg) rotateY(-64.1deg); }
  .tl12 { transform: translate3d(-150.41px, -317.81px, 0) rotateX(90deg) rotateY(-69.9deg); }
  .tl13 { transform: translate3d(-151.1px, -315.94px, 0) rotateX(90deg) rotateY(-75.5deg); }
  .tl14 { transform: translate3d(-151.6px, -314.01px, 0) rotateX(90deg) rotateY(-81.5deg); }
  .tl15 { transform: translate3d(-151.895px, -312.03px, 0) rotateX(90deg) rotateY(-87.1deg); }

  .top .plug-p2 {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: #1b1b1b;
    margin-top: 2.5px;
    margin-left: 17px;
    border: .5px solid #6b6b6b;
  }

  .tr1 { transform: translate3d(131.5px, -330px, 0) rotateX(90deg) rotateY(8deg); }
  .tr2 { transform: translate3d(133.47px, -329.72px, 0) rotateX(90deg) rotateY(13deg); }
  .tr3 { transform: translate3d(135.42px, -329.27px, 0) rotateX(90deg) rotateY(19deg); }
  .tr4 { transform: translate3d(137.31px, -328.62px, 0) rotateX(90deg) rotateY(24deg); }
  .tr5 { transform: translate3d(139.13px, -327.81px, 0) rotateX(90deg) rotateY(30.5deg); }
  .tr6 { transform: translate3d(140.85px, -326.80px, 0) rotateX(90deg) rotateY(35.7deg); }
  .tr7 { transform: translate3d(142.47px, -325.63px, 0) rotateX(90deg) rotateY(41.5deg); }
  .tr8 { transform: translate3d(143.97px, -324.3px, 0) rotateX(90deg) rotateY(47.1deg); }
  .tr9 { transform: translate3d(145.33px, -322.84px, 0) rotateX(90deg) rotateY(52.7deg); }
  .tr10 { transform: translate3d(146.54px, -321.25px, 0) rotateX(90deg) rotateY(58.3deg); }
  .tr11 { transform: translate3d(147.58px, -319.55px, 0) rotateX(90deg) rotateY(64.1deg); }
  .tr12 { transform: translate3d(148.45px, -317.75px, 0) rotateX(90deg) rotateY(69.7deg); }
  .tr13 { transform: translate3d(149.14px, -315.88px, 0) rotateX(90deg) rotateY(75.5deg); }
  .tr14 { transform: translate3d(149.64px, -313.94px, 0) rotateX(90deg) rotateY(81.3deg); }
  .tr15 { transform: translate3d(149.94px, -311.97px, 0) rotateX(90deg) rotateY(88.2deg); }

  .bottom {
    transform: translate3d(-131.5px, 310px, 0) rotateX(-90deg);
  }

  .bl1 { transform: translate3d(-133.5px, 310px, 0) rotateX(-90deg) rotateY(-8deg); }
  .bl2 { transform: translate3d(-135.48px, 309.72px, 0) rotateX(-90deg) rotateY(-13deg); }
  .bl3 { transform: translate3d(-137.43px, 309.27px, 0) rotateX(-90deg) rotateY(-19deg); }
  .bl4 { transform: translate3d(-139.32px, 308.62px, 0) rotateX(-90deg) rotateY(-24deg); }
  .bl5 { transform: translate3d(-141.15px, 307.802px, 0) rotateX(-90deg) rotateY(-30.5deg); }
  .bl6 { transform: translate3d(-142.87px, 306.79px, 0) rotateX(-90deg) rotateY(-35.7deg); }
  .bl7 { transform: translate3d(-144.49px, 305.62px, 0) rotateX(-90deg) rotateY(-41.5deg); }
  .bl8 { transform: translate3d(-145.98px, 304.3px, 0) rotateX(-90deg) rotateY(-47deg); }
  .bl9 { transform: translate3d(-147.34px, 302.84px, 0) rotateX(-90deg) rotateY(-53.3deg); }
  .bl10 { transform: translate3d(-148.53px, 301.25px, 0) rotateX(-90deg) rotateY(-58.3deg); }
  .bl11 { transform: translate3d(-149.58px, 299.55px, 0) rotateX(-90deg) rotateY(-64.6deg); }
  .bl12 { transform: translate3d(-150.44px, 297.745px, 0) rotateX(-90deg) rotateY(-70.3deg); }
  .bl13 { transform: translate3d(-151.11px, 295.87px, 0) rotateX(-90deg) rotateY(-75.8deg); }
  .bl14 { transform: translate3d(-151.6px, 293.93px, 0) rotateX(-90deg) rotateY(-81.4deg); }
  .bl15 { transform: translate3d(-151.9px, 291.95px, 0) rotateX(-90deg) rotateY(-87.2deg); }

  .bottom .mic {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: #1b1b1b;
    margin-top: 5px;
    margin-left: 17px;
    border: 1px solid #242424;
  }

  .bottom .charger {
    width: 32px;
    height: 7px;
    border-radius: 33%;
    background: #1b1b1b;
    border: 1px solid #242424;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .br1 { transform: translate3d(131.5px, 310px, 0) rotateX(-90deg) rotateY(8.5deg); }
  .br2 { transform: translate3d(133.48px, 309.705px, 0) rotateX(-90deg) rotateY(13.2deg); }
  .br3 { transform: translate3d(135.43px, 309.25px, 0) rotateX(-90deg) rotateY(18.5deg); }
  .br4 { transform: translate3d(137.32px, 308.62px, 0) rotateX(-90deg) rotateY(24.4deg); }
  .br5 { transform: translate3d(139.14px, 307.79px, 0) rotateX(-90deg) rotateY(30deg); }
  .br6 { transform: translate3d(140.87px, 306.79px, 0) rotateX(-90deg) rotateY(35.7deg); }
  .br7 { transform: translate3d(142.49px, 305.62px, 0) rotateX(-90deg) rotateY(41.5deg); }
  .br8 { transform: translate3d(143.98px, 304.3px, 0) rotateX(-90deg) rotateY(47deg); }
  .br9 { transform: translate3d(145.34px, 302.84px, 0) rotateX(-90deg) rotateY(53deg); }
  .br10 { transform: translate3d(146.545px, 301.24px, 0) rotateX(-90deg) rotateY(58.4deg); }
  .br11 { transform: translate3d(147.585px, 299.545px, 0) rotateX(-90deg) rotateY(64.6deg); }
  .br12 { transform: translate3d(148.44px, 297.745px, 0) rotateX(-90deg) rotateY(70.1deg); }
  .br13 { transform: translate3d(149.12px, 295.865px, 0) rotateX(-90deg) rotateY(75.8deg); }
  .br14 { transform: translate3d(149.61px, 293.93px, 0) rotateX(-90deg) rotateY(81.5deg); }
  .br15 { transform: translate3d(149.9px, 291.97px, 0) rotateX(-90deg) rotateY(87.15deg); }

  .left,
  .right {
    width: 20px;
    height: 600.1px;
  }

  .left {
    transform: translate3d(-160px, -300.05px, 0) rotateY(-90deg);
  }

  .volume-front {
    width: 7px;
    height: 75px;
    transform: translate3d(-156.5px, -210px, 0) rotateY(-90deg);
    background: #242424;
  }

  .volume-top {
    width: 3px;
    height: 7px;
    transform: translate3d(-153px, -213.5px, 0) rotateX(90deg);
    background: #242424;
  }

  .volume-bottom {
    width: 3px;
    height: 7px;
    transform: translate3d(-153px, -139px, 0) rotateX(-90deg);
    background: #242424;
  }

  .volume-left {
    width: 3px;
    height: 75px;
    transform: translate3d(-153px, -210px, -3.5px) rotateY(180deg);
    background: #242424;
  }

  .volume-right {
    width: 3px;
    height: 75px;
    transform: translate3d(-153px, -210px, 3.5px) rotateY(0deg);
    background: #242424;
  }

  .right {
    transform: translate3d(140px, -300.05px, 0) rotateY(90deg);
  }

  .power-front {
    width: 7px;
    height: 37px;
    transform: translate3d(149.5px, -120px, -.5px) rotateY(90deg);
    background: #242424;
  }

  .power-top {
    width: 3px;
    height: 7px;
    transform: translate3d(150px, -123.5px, -.5px) rotateX(90deg);
    background: #242424;
  }

  .power-bottom {
    width: 3px;
    height: 7px;
    transform: translate3d(150px, -86.5px, -.5px) rotateX(-90deg);
    background: #242424;
  }

  .power-left {
    width: 3px;
    height: 37px;
    transform: translate3d(150px, -120px, 3px);
    background: #242424;
  }

  .power-right {
    width: 3px;
    height: 37px;
    transform: translate3d(150px, -120px, -4px) rotateY(180deg);
    background: #242424;
  }

  @keyframes rotate-to-left {
    0% {
      transform: rotate3d(0,1,0,360deg);
    }
    70% {
      transform: rotate3d(0,1,0,0deg);
    }
  }

  @keyframes rotate-to-right {
    0% {
      transform: rotate3d(0,1,0,0deg);
    }
    70% {
      transform: rotate3d(0,1,0,360deg);
    }
  }
`

const template = document.createElement('template')
template.innerHTML = /*html*/`
  <div class="container">
    <div class="phone" id="phone" part="phone">
      <div class="center"></div>

      <div class="front face">
        <div class="speaker"></div>
        <div class="screen">
          <slot></slot>
        </div>
        <div class="camera"></div>
      </div>
          
      <div class="top face">
        <div class="plug-p2"></div>
      </div>

      <div class="top-left tl1 face"></div>
      <div class="top-left tl2 face"></div>
      <div class="top-left tl3 face"></div>
      <div class="top-left tl4 face"></div>
      <div class="top-left tl5 face"></div>
      <div class="top-left tl6 face"></div>
      <div class="top-left tl7 face"></div>
      <div class="top-left tl8 face"></div>
      <div class="top-left tl9 face"></div>
      <div class="top-left tl10 face"></div>
      <div class="top-left tl11 face"></div>
      <div class="top-left tl12 face"></div>
      <div class="top-left tl13 face"></div>
      <div class="top-left tl14 face"></div>
      <div class="top-left tl15 face"></div>
        
      <div class="left face"></div>

      <div class="volume-front face"></div>
      <div class="volume-top face"></div>
      <div class="volume-right face"></div>
      <div class="volume-left face"></div>
      <div class="volume-bottom face"></div>

      <div class="top-right tr1 face"></div>
      <div class="top-right tr2 face"></div>
      <div class="top-right tr3 face"></div>
      <div class="top-right tr4 face"></div>
      <div class="top-right tr5 face"></div>
      <div class="top-right tr6 face"></div>
      <div class="top-right tr7 face"></div>
      <div class="top-right tr8 face"></div>
      <div class="top-right tr9 face"></div>
      <div class="top-right tr10 face"></div>
      <div class="top-right tr11 face"></div>
      <div class="top-right tr12 face"></div>
      <div class="top-right tr13 face"></div>
      <div class="top-right tr14 face"></div>
      <div class="top-right tr15 face"></div>
        
      <div class="right face"></div>

      <div class="power-front face"></div>
      <div class="power-top face"></div>
      <div class="power-right face"></div>
      <div class="power-left face"></div>
      <div class="power-bottom face"></div>
      
      <div class="bottom face">
        <div class="mic"></div>
        <div class="charger"></div>
      </div>
      
      <div class="bottom-left bl1 face"></div>
      <div class="bottom-left bl2 face"></div>
      <div class="bottom-left bl3 face"></div>
      <div class="bottom-left bl4 face"></div>
      <div class="bottom-left bl5 face"></div>
      <div class="bottom-left bl6 face"></div>
      <div class="bottom-left bl7 face"></div>
      <div class="bottom-left bl8 face"></div>
      <div class="bottom-left bl9 face"></div>
      <div class="bottom-left bl10 face"></div>
      <div class="bottom-left bl11 face"></div>
      <div class="bottom-left bl12 face"></div>
      <div class="bottom-left bl13 face"></div>
      <div class="bottom-left bl14 face"></div>
      <div class="bottom-left bl15 face"></div>

      <div class="bottom-right br1 face"></div>
      <div class="bottom-right br2 face"></div>
      <div class="bottom-right br3 face"></div>
      <div class="bottom-right br4 face"></div>
      <div class="bottom-right br5 face"></div>
      <div class="bottom-right br6 face"></div>
      <div class="bottom-right br7 face"></div>
      <div class="bottom-right br8 face"></div>
      <div class="bottom-right br9 face"></div>
      <div class="bottom-right br10 face"></div>
      <div class="bottom-right br11 face"></div>
      <div class="bottom-right br12 face"></div>
      <div class="bottom-right br13 face"></div>
      <div class="bottom-right br14 face"></div>
      <div class="bottom-right br15 face"></div>
        
      <div class="back face">
        <div class="camera"></div>
        <div class="flashlight"></div>
        <div class="fingerprint-scanner"></div>
        <img src="/public/razion-logotipo.png" alt="Razion Logo" class="razion-logo">
      </div>
    </div>
  </div>
`
export default class Smartphone extends HTMLElement {
  constructor(transform, allowRotation = false, allowMove = false, allowZoom = false, autoAnimate = false, interactiveScreen = false) {
    super()
    this.attachShadow({ mode: 'open' })
    this.shadowRoot.appendChild(style.cloneNode(true))
    this.shadowRoot.appendChild(template.content.cloneNode(true))
    this.transform = transform || JSON.parse(this.getAttribute('transform'))
    this.allowRotation = allowRotation || this.hasAttribute('allowRotation')
    this.allowMove = allowMove || this.hasAttribute('allowMove')
    this.allowZoom = allowZoom || this.hasAttribute('allowZoom')
    this.autoAnimate = autoAnimate || this.hasAttribute('autoAnimate')
    this.interactiveScreen = interactiveScreen || this.hasAttribute('interactiveScreen')
  }

  connectedCallback() {
    let phone = this.shadowRoot.querySelector('.phone')

    let mousePos = null
    let transform = this.transform ? this.transform : sessionStorage.getItem('smartphone-3d-transform') ? JSON.parse(sessionStorage.getItem('smartphone-3d-transform')) : null
    let translateX = transform?.translateX != undefined ? transform?.translateX : 0
    let translateY = transform?.translateY != undefined ? transform?.translateY : 0
    let rotateX = transform?.rotateX != undefined ? transform?.rotateX : 0
    let rotateY = transform?.rotateY != undefined ? transform?.rotateY : 0
    let rotateZ = transform?.rotateZ != undefined ? transform?.rotateZ : 0
    let scale = transform?.scale != undefined ? transform?.scale : 1
    let maxScale = 3
    let minScale = 1

    if (this.allowZoom) {
      window.addEventListener('wheel', (e) => {
        if (e.deltaY < 0) {
          if (scale < maxScale)
            scale += .1
        }
        else {
          if (scale > minScale)
            scale -= .1
        }
        transformPhone()
      })
    }

    if (this.allowMove || this.allowRotation) {
      window.addEventListener('mousedown', (e) => {
        mousePos = {
          x: e.x,
          y: e.y
        }
      })

      window.addEventListener('mousemove', (e) => {
        if (mousePos) {
          let dif = {
            x: e.x - mousePos.x,
            y: e.y - mousePos.y
          }

          mousePos = {
            x: e.x,
            y: e.y
          }

          if (e.ctrlKey && this.allowMove) {
            translateX += dif.x
            translateY += dif.y
          }
          else if (this.allowRotation) {
            if (e.shiftKey) {
              rotateZ += dif.x
            }
            else {
              rotateX -= dif.y
              rotateY += dif.x
            }
          }

          transformPhone()
        }
      })

      window.addEventListener('mouseup', () => {
        mousePos = null
      })
    }

    const transformPhone = () => {
      phone.style.transform = `translateX(${translateX}px) translateY(${translateY}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg)`
      this.style.transform = `scale(${scale})`
      sessionStorage.setItem('smartphone-3d-transform', JSON.stringify({ translateX, translateY, rotateX, rotateY, rotateZ, scale }))
    }
    transformPhone()

    let lastFrameTime = 0
    const frameDuration = 1000 / 60

    function autoAnim(now) {
      if (!lastFrameTime) lastFrameTime = now
      const delta = now - lastFrameTime

      if (delta >= frameDuration) {
        const steps = Math.floor(delta / frameDuration)
        lastFrameTime = now - (delta % frameDuration)

        if (!mousePos) {
          rotateY -= steps
          phone.style.transform = `translateX(${translateX}px) translateY(${translateY}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale})`
        }
      }
      requestAnimationFrame(autoAnim)
    }
    if (this.autoAnimate)
      autoAnim()

    if (this.interactiveScreen)
      this.shadowRoot.querySelector('.front .screen').style.pointerEvents = 'all'
  }
}

customElements.define('smartphone-3d', Smartphone)