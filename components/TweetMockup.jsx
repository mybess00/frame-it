import { hexToRgb, rgbToHsl } from './options/tweet-options';
import { highlightTweet, formatNumber, formatDate, formatTextBody } from './options/tweet-options';

 export default function TweetMockup ({props}) {
  const styleFont = props.theme.fontStyle.italic ? 'italic' : '';
  const boldFont = props.theme.fontStyle.bold ? 'bold' : '400';
  const colorFont = props.theme.fontColor;

  const tweetTextSize = parseInt(props.theme.textSize);
  const satsTextSize = '30px'//-12
  const statsIconSize = '43px';
  const tweetUserNameSize = `${tweetTextSize-6}px`;//-6
  const tweetUserIdSize = `${tweetTextSize-12}px`;//-12
  const tweetDateSize = `${tweetTextSize-12}px`//-12
  const width = props.theme.tweetWidth;
  const visibilityStats = props.theme.statsDisplay == 'hidden' ? 'none': 'flex';
  const visibilityImages = props.theme.imageOptions.visibility ? 'flex' : 'none';
  const profileImgSize = `${tweetTextSize + 54}px`;

  const logoWhite = 'https://raw.githubusercontent.com/mybess00/myPublicFiles/7c5a6df5a3903518734f584308bbb5224cb26f51/img/logo-bg-white.svg'
  const logoBlack = 'https://raw.githubusercontent.com/mybess00/myPublicFiles/main/img/logo-bg-black.svg'

  const luminationBg = () => {
    let bgTweet = hexToRgb(props.theme.bgTweet)
    let hslColor = rgbToHsl(bgTweet[0], bgTweet[1], bgTweet[2])
    return hslColor[2]
  }

  const heightImages = props.theme.imageOptions.height;
  const widthImages = props.theme.imageOptions.width;
  let imgTweet = <></>
  if (props.tweet.media) {
    const mediaArrLength = props.tweet.media.length;
    imgTweet = props.tweet.media.map((element, index) => {
      return  <div key={`image${index}`} style={{display: 'flex', height: heightImages === '100%' ? 'auto' : heightImages, width: widthImages === 'auto' ? mediaArrLength == 1 || (mediaArrLength == 3 && index == 2) ? '100%' : '49%' : '100%', overflow: 'hidden', borderRadius: '0.75rem', marginTop: '10px'}}>
                <img style={{ borderRadius: '0.75rem', objectFit: 'cover', width: '100%'}} src={element}/>
              </div>
    })
  }
  
  const parsedText = highlightTweet(props.tweet.text);
  const textParts = parsedText.split(/(<a.*?<\/a>|<br>)/g);
  const elementos = formatTextBody(textParts);

   return (
    <div id="tweet-mockup" style={{
      width: '100%',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      backgroundImage: props.theme.bgContainer,
      padding: `${props.theme.tweetMargin}rem`,
      color: colorFont, fontWeight: boldFont, fontStyle: styleFont,
      fontSize: '32px'
    }}>
      
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'nowrap',
        gap: '0.5rem',
        borderStyle: 'solid',
        backgroundColor: `rgba(${hexToRgb(props.theme.bgTweet)}, ${props.theme.bgTweetOpacity})`, 
        padding: `${props.theme.tweetPadding}rem`,
        borderRadius: `${props.theme.borderRadius}px`,
        borderColor: props.theme.borderColor,
        borderWidth: `${props.theme.borderWidth}px`,
        }}>
          
        {/* Profile Data*/}
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          gap: '0.5rem',
        }}>
          <div style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-start',
            gap: '0.5rem',
            }}>
            <div className="avatar" style={{display: 'flex'}}>
              <div className="w-16 rounded-full" style={{display: 'flex', borderRadius: '9999px'}}>
                <img style={{width: profileImgSize, borderRadius: '200px'}} src={props.tweet.img} alt={`Imagen de Perfil del usuario de Twitter con nombre ${props.tweet.name}`}/>
              </div>
            </div>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              flexWrap: 'nowrap',
              justifyContent: 'center',
              }}>
              <p style={{margin: '4px 0 0 0', padding: '1px', fontSize: tweetUserNameSize}}>{props.tweet.name}</p>
              <p style={{margin: '0', padding: '1px', fontSize: tweetUserIdSize}}>@{props.tweet.id}</p>
            </div>
          </div>

          <div style={{
            display: 'flex',
          }}>
              <img src={luminationBg() <= 45 ? logoBlack : logoWhite} width={64} height={64}/>
          </div>
        </div>

        {/* Text Body*/}
        <div style={{display: 'flex', flexWrap: 'wrap'}} id='text-container'>
          <p id='text-body' style={{fontSize: `${tweetTextSize}px`,textAlign: 'justify', display: 'flex', flexWrap: 'wrap', flexDirection: 'column', gap: '8px'}}>{elementos}</p>
        </div>
        {/* Image Body*/}
        <div style={{display: visibilityImages, flexWrap: 'wrap', flexDirection: 'row', gap: '10px', justifyContent: 'space-between', marginTop: '0.75rem', width: '100%'}}>
          {imgTweet}
        </div>
        
        {/* Bottom Bar */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
        }}>
          <div style={{display: 'flex',}}>
            <p style={{fontSize: tweetDateSize}}>{formatDate(props.tweet.date)}</p>
          </div>
          <div style={{
            display: visibilityStats,
            flexDirection: 'row',
            flexWrap: 'nowrap',
            width: '100%',
            gap: '1.25rem',
            justifyContent: 'space-around',
            marginTop: '16px',
            padding: width < 1400 && width > 800 ? '0 10%' : width <= 800 ? '0' : '0 20%'
          }}>
            <div style={{
              display: 'flex',
              flexDirection: 'row',
              flexWrap: 'nowrap',
              gap: '0.25rem',
              alignItems: 'center',
            }}>
              <svg fill={colorFont} height={statsIconSize} width={statsIconSize} version="1.1" viewBox="0 0 512.37 512.37"><path d="M475.524,72.933c-33.872-36.293-72.122-56.78-115.583-56.78c-42.308,0-79.083,19.333-103.742,52.277 c-24.591-32.968-61.208-52.277-103.49-52.277c-43.164,0-80.774,20.275-115.429,56.616 c-51.87,54.357-52.062,155.013,14.925,221.999c13.003,13.003,45.393,46.322,91.094,93.615 c21.934,22.7,44.674,46.277,67.387,69.854c7.95,8.252,15.328,15.915,21.947,22.792c6.806,7.073,6.806,7.073,8.317,8.643 c8.393,8.726,22.357,8.726,30.751,0c1.51-1.57,1.51-1.57,8.316-8.643c6.619-6.877,13.997-14.539,21.947-22.792 c22.713-23.577,45.453-47.154,66.715-69.158c46.373-47.99,78.763-81.308,91.766-94.312 C527.176,228.038,526.702,127.752,475.524,72.933z M430.275,264.599c-13.253,13.253-45.689,46.619-91.606,94.137 c-21.952,22.718-44.706,46.31-67.433,69.902c-5.236,5.435-10.224,10.615-14.91,15.482c-4.687-4.868-9.675-10.047-14.911-15.482 c-22.727-23.592-45.482-47.184-66.76-69.205c-46.591-48.215-79.026-81.58-92.279-94.833C31.961,214.185,32.102,140,68.154,102.22 c27.31-28.64,54.69-43.4,84.555-43.4c37.759,0,68.431,22.518,83.608,61.191c7.085,18.053,32.633,18.053,39.718,0 c15.143-38.586,46.063-61.191,83.907-61.191c30.166,0,57.925,14.868,84.393,43.228 C480.097,140.355,480.447,214.426,430.275,264.599z"/></svg>
              <p style={{margin: '0', padding: '0', fontSize: satsTextSize}}>{formatNumber(props.tweet.stats.fav)} {width <= 1000 && width >= 800 ? '' : 'Favs'}</p>
            </div>
            <div style={{
              display: 'flex',
              flexDirection: 'row',
              flexWrap: 'nowrap',
              gap: '0.25rem',
              alignItems: 'center',
            }}>
              <svg version="1.1" height={statsIconSize} width={statsIconSize} viewBox="0 0 25 25" enable-background="new 0 0 25 25"><path fill={colorFont} d="M24.989,17.721c-0.147,0.379-0.433,0.652-0.712,0.932c-1.062,1.056-2.115,2.115-3.176,3.174 c-0.609,0.609-1.287,0.609-1.897,0c-1.175-1.174-2.349-2.344-3.517-3.521c-0.656-0.662-0.406-1.728,0.465-1.97 c0.459-0.128,0.865-0.007,1.205,0.33c0.473,0.472,0.942,0.944,1.414,1.415c0.057,0.057,0.114,0.109,0.177,0.169 c0.063-0.071,0.032-0.147,0.032-0.215c0.002-3.609,0.002-7.218,0-10.828c0-1.292-0.84-2.135-2.133-2.137 c-2.008-0.003-4.016,0.001-6.023-0.002c-0.746-0.002-1.277-0.529-1.25-1.227c0.022-0.579,0.487-1.071,1.067-1.104 c0.364-0.02,0.731-0.009,1.097-0.009c1.722,0,3.448-0.005,5.169,0.001c2.11,0.007,3.821,1.352,4.302,3.373 c0.089,0.373,0.116,0.753,0.116,1.137c-0.002,3.577-0.001,7.155-0.001,10.731c0,0.088,0,0.176,0,0.326 c0.316-0.318,0.592-0.598,0.869-0.877c0.246-0.248,0.492-0.495,0.74-0.74c0.707-0.699,1.721-0.453,2.02,0.493 c0.007,0.021,0.023,0.041,0.036,0.062C24.989,17.395,24.989,17.559,24.989,17.721z"/><path fill={colorFont} d="M0.011,7.329c0.1-0.327,0.306-0.578,0.546-0.816C1.678,5.404,2.79,4.284,3.905,3.17 c0.602-0.601,1.284-0.604,1.882-0.007C6.955,4.33,8.122,5.499,9.286,6.667c0.505,0.507,0.532,1.227,0.07,1.698 C8.889,8.843,8.144,8.828,7.634,8.324C7.16,7.856,6.691,7.381,6.22,6.91C6.165,6.856,6.105,6.806,6.017,6.725 c0,0.089,0,0.134,0,0.179c0,3.651-0.001,7.301,0.002,10.954c0.001,1.021,0.626,1.811,1.59,2.031 c0.2,0.047,0.404,0.043,0.606,0.043c1.984,0.002,3.968,0,5.952,0.002c0.74,0,1.271,0.506,1.26,1.192 c-0.012,0.604-0.479,1.116-1.084,1.138c-0.649,0.021-1.301,0.01-1.951,0.01c-1.48,0-2.96,0.021-4.439-0.008 c-2.416-0.049-4.271-1.953-4.275-4.375c-0.007-3.617-0.002-7.236-0.002-10.854c0-0.087,0-0.175,0-0.346 C3.495,6.881,3.362,7.026,3.223,7.166C2.839,7.553,2.455,7.938,2.067,8.322c-0.709,0.701-1.702,0.459-2.02-0.491 C0.04,7.809,0.023,7.789,0.011,7.768C0.011,7.622,0.011,7.476,0.011,7.329z"/></svg>
              <p style={{margin: '0', padding: '0', fontSize: satsTextSize}}>{formatNumber(props.tweet.stats.retweet)} {width <= 1000 && width >= 800 ? '' : 'Retweets'}</p>
            </div>
            <div style={{
              display: 'flex',
              flexDirection: 'row',
              flexWrap: 'nowrap',
              gap: '0.25rem',
              alignItems: 'center',
            }}>
              <svg fill={colorFont} height={statsIconSize} width={statsIconSize} viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M16.5 1.853c-8.133 0-14.75 5.663-14.75 12.624 0.045 2.863 1.132 5.465 2.896 7.45l-0.010-0.012c-0.608 2.418-1.844 4.491-3.525 6.104l-0.004 0.004c-0.22 0.225-0.355 0.534-0.355 0.873 0 0.691 0.56 1.252 1.252 1.252 0.089 0 0.175-0.009 0.259-0.027l-0.008 0.001c3.458-0.576 6.524-1.93 9.121-3.877l-0.054 0.039c1.547 0.517 3.328 0.816 5.179 0.817h0c8.133 0 14.75-5.664 14.75-12.625s-6.617-12.624-14.75-12.624zM16.5 24.602c-0.015 0-0.034 0-0.052 0-1.77 0-3.465-0.321-5.030-0.908l0.099 0.032c-0.045-0.011-0.1-0.020-0.155-0.025l-0.005-0c-0.085-0.025-0.182-0.041-0.283-0.045l-0.002-0c-0.074 0.005-0.142 0.016-0.207 0.033l0.008-0.002c-0.1 0.013-0.19 0.035-0.275 0.068l0.008-0.003c-0.079 0.039-0.146 0.081-0.209 0.129l0.003-0.002c-0.064 0.033-0.118 0.067-0.169 0.105l0.003-0.002c-1.371 1.186-3 2.115-4.789 2.69l-0.098 0.027c0.896-1.391 1.555-3.025 1.872-4.778l0.012-0.082c0.005-0.031-0.005-0.060-0.002-0.092 0.002-0.028 0.003-0.060 0.003-0.093 0-0.311-0.107-0.597-0.286-0.824l0.002 0.003c-0.019-0.023-0.025-0.051-0.046-0.073-1.617-1.608-2.626-3.826-2.652-6.28l-0-0.005c0-5.582 5.495-10.124 12.25-10.124s12.25 4.542 12.25 10.124-5.496 10.125-12.25 10.125zM25 10.75h-16c-0.69 0-1.25 0.56-1.25 1.25s0.56 1.25 1.25 1.25v0h16c0.69 0 1.25-0.56 1.25-1.25s-0.56-1.25-1.25-1.25v0zM16 16.75h-7c-0.69 0-1.25 0.56-1.25 1.25s0.56 1.25 1.25 1.25v0h7c0.69 0 1.25-0.56 1.25-1.25s-0.56-1.25-1.25-1.25v0z"></path></svg>
              <p style={{margin: '0', padding: '0', fontSize: satsTextSize}}>{formatNumber(props.tweet.stats.comment)} {width <= 1000 && width >= 800 ? '' : 'Comments'}</p>
            </div>
          </div>
        </div>
        <div style={{display: 'flex', justifyContent: 'flex-end'}}>
          <p style={{fontSize: tweetDateSize*.75, margin: '8px 0 0 0', padding: '0'}}>Made with Frame it!</p>
        </div>
      </div>
    </div>
  );
}