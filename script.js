const url = "https://api.freeapi.app/api/v1/public/youtube/videos";

async function getVideosDetail() {
    const options = { method: 'GET', headers: { accept: 'application/json' } };

    try {
        const videos = [];
        const response = await fetch(url, options);
        const data = await response.json();
        const videoLength = data.data.limit;
        // Extract video IDs (ensure correct path)
          for(let i = 0; i < videoLength; i++){
	    videos.push({
                    id: data.data.data[i].items.id,  // Ensure correct path
                    title: data.data.data[i].items.snippet.title,
                    channel: data.data.data[i].items.snippet.channelTitle})}
    console.log(videos)
      return videos;
    } catch (error) {
        console.error(error);
        return [];
    }
}



async function renderVideos(videos) {
    const container = document.getElementById("video-list");
    container.innerHTML = "";

    videos.forEach(video => {
        const videoCard = document.createElement("div");
        videoCard.classList.add("video-card");

        videoCard.innerHTML = `
            <img src="https://img.youtube.com/vi/${video.id}/hqdefault.jpg" onclick="window.open('https://www.youtube.com/watch?v=${video.id}', '_blank')" />
            <div class="video-title">${video.title}</div>
            <div class="channel-name">${video.channel}</div>
        `;

        container.appendChild(videoCard);
    });
}

// Fetch and display videos
async function loadVideos() {
    const videos = await getVideosDetail();
    renderVideos(videos);
}

// Call function to load videos
loadVideos();

