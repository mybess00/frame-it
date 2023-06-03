export const highlightTweet = (text) => {
    /*  const t1 = text.parseURL();
      const t2 = t1.parseHashtag();
      const t3 = t2.parseUsername();*/
      const t4 = text.replace(/\n/g, '<br>');
      const t5 = t4.replace(/https:\/\/t\.co\/[a-zA-Z0-9]+/g, '');
      return t5;
    }

export const formatNumber = (num) => {
  if (num >= 1000000) {
    return `${(num / 1000000).toFixed(2)}M`;
  } else if (num >= 100000){
    return `${(num / 1000).toFixed(1)}K`;
  } else if (num >= 1000) {
    return `${(num / 1000).toFixed(2)}K`;
  } else {
    return num;
  }
}

export const formatDate = (date) => {
  const newDate = new Date(date);
  return `${newDate.getDate()} ${newDate.toLocaleString('default', { month: 'short'})} ${newDate.getFullYear()} - ${newDate.getUTCHours().toString().padStart(2, '0')}:${newDate.getMinutes().toString().padStart(2, '0')}`
}

export const formatTextBody = (textArr) => {
  return textArr.map((parte, index) => {
    if (parte === '<br>') {
      return <br key={index} />;
    } else if (parte.startsWith('<a')) {
      const matches = parte.match(/<a.*?>(.*?)<\/a>/);
      const contenido = matches[1];
      const props = {
        style: { color: 'green' },
        children: contenido
      };
      return <a key={index} {...props} />;
    } else {
      return <span key={index}>{parte}</span>;
    }
  });
}

export const hexToRgb = (hex) => {
  return['0x'+hex[1]+hex[2]|0,'0x'+hex[3]+hex[4]|0,'0x'+hex[5]+hex[6]|0];
}

export const rgbToHsl = (r, g, b) => {
  r /= 255;
  g /= 255;
  b /= 255;
  const l = Math.max(r, g, b);
  const s = l - Math.min(r, g, b);
  const h = s
    ? l === r
      ? (g - b) / s
      : l === g
      ? 2 + (b - r) / s
      : 4 + (r - g) / s
    : 0;
  return [
    60 * h < 0 ? 60 * h + 360 : 60 * h,
    100 * (s ? (l <= 0.5 ? s / (2 * l - s) : s / (2 - (2 * l - s))) : 0),
    (100 * (2 * l - s)) / 2,
  ];
};