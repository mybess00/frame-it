'use client'

const fetchSvgTweet = () => {
  fetch('http://localhost:3000/frame-tweet', {
    cache: 'no-store',
    method: 'GET'
  }).then(response => {
    if (response.ok){
      const dispositionHeader = response.headers.get('Content-Disposition');
      const match = dispositionHeader && dispositionHeader.match(/filename="(.+)"/);
      const fileName = match ? match[1] : 'image.jpg';
      
      return response.blob().then((blob) => {
        const downloadLink = document.createElement('a');
        downloadLink.href = URL.createObjectURL(blob);
        downloadLink.download = fileName;

        downloadLink.click();

        URL.revokeObjectURL(downloadLink.href);
      })
    } else {
      return console.log(response)
    }
  })

}

export default async function DownloadButton () {

    return (
        <button className="p-4 bg-red-600 rounded-sm" onClick={fetchSvgTweet}>Descargar</button>
    )
}