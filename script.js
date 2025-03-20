url = "https://api.freeapi.app/api/v1/public/youtube/videos"

async function getVideosId(url){
const options = {method: 'GET', headers: {accept: 'application/json'}};
const videosId = [];

try {
  const response = await fetch(url, options);
  const data = await response.json();
  const videoLength = data.data.limit;
	//console.log(data.data.data[0].items.id);

  for(let i = 0; i < videoLength; i++){
	videosId.push(data.data.data[i].items.id);
 }
if(!videosId){
		return videosId}else{return [];}
} catch (error) {
  console.error(error);
}
}


