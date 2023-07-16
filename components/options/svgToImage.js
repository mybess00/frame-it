const svgToPngURL = (svg) =>
  new Promise((resolve, reject) => {
    const img = new Image();
    const parser = new DOMParser();
    const svgDocument = parser.parseFromString(svg, "image/svg+xml");
    const svgImages = svgDocument.getElementsByTagName("image");
    let loadedImagesCount = 0;

    const checkAllImagesLoaded = () => {
      loadedImagesCount++;
      if (loadedImagesCount === svgImages.length) {
        const canvas = document.createElement("canvas");
        canvas.width = img.naturalWidth;
        canvas.height = img.naturalHeight;
        const ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0);
        resolve(canvas.toDataURL("image/png"));
        URL.revokeObjectURL(img.src);
      }
    };

    img.onload = checkAllImagesLoaded;
    img.onerror = (e) => {
      reject(e);
      URL.revokeObjectURL(img.src);
    };

    for (let i = 0; i < svgImages.length; i++) {
      const image = svgImages[i];
      const xlinkHref = image.getAttribute("xlink:href");
      if (xlinkHref) {
        const imageObj = new Image();
        imageObj.onload = checkAllImagesLoaded;
        imageObj.onerror = (e) => {
          reject(e);
          URL.revokeObjectURL(imageObj.src);
        };
        imageObj.src = xlinkHref;
      }
    }

    img.src = URL.createObjectURL(new Blob([svg], { type: "image/svg+xml" }));
  });

export const downloadSvgAsPng = async (svg) => {
  if (!svg){
    console.log('No existe SVG')
    return false
  }
  const pngURL = await svgToPngURL(svg);
  try {
    const a = document.createElement("a");
    a.href = pngURL;
    a.download = "Image.png";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  } finally {
    URL.revokeObjectURL(pngURL);
  }
};