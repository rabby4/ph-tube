const categoryHandler = async () =>{
    const res = await fetch("https://openapi.programming-hero.com/api/videos/categories");
    const data = await res.json();
    const categories = data.data;

    const categoryMenuContainer = document.getElementById('category-menu-container')
    categories.forEach(category => {
        const li = document.createElement('li');
        li.classList = ('mx-5 bg-orange-600')
        li.innerHTML = `
        <a onclick="videosHandler('${category.category_id}')" class="bg-gray-200 hover:bg-red-600 hover:text-white py-2 px-9 rounded-md cursor-pointer">${category.category}</a>
        `;
        categoryMenuContainer.appendChild(li);
    });
    
}

const videosHandler = async (categoryId) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/videos/category/${categoryId}`);
    const data = await res.json();
    const videosData = data.data;
    console.log(videosData)

    const videoContainer = document.getElementById('video-container');
    videoContainer.innerHTML = "";

    videosData.forEach((video) => {
        const hrs = Math.floor(video.others.posted_date / 3600);
        const min = Math.round((video.others.posted_date - (hrs * 3600)) / 60);

        const div = document.createElement('div');
        div.classList = ('card card-compact bg-base-100 shadow rounded-md');
        div.innerHTML = `
        <figure class="relative">
            <img
            src="${video.thumbnail}" class="w-full h-52 rounded-lg" />
            <div class="absolute right-2 bottom-2">
                <p id="duration" class="text-sm ${video.others.posted_date ? 'bg-black' : 'bg-transparent'} text-white py-1 px-3 rounded-md">${video.others.posted_date ? hrs + " hours " + min + " minutes " : ''}</p>
            </div>
        </figure>
        <div class="card-body">
            <div class="flex gap-5">
                <div>
                    <img
                    src="${video.authors[0].profile_picture}"
                    alt=""
                    class="w-12 h-12 rounded-full" />  
                </div>
                <div>
                    <h2 class="text-xl font-semibold">${video.title}</h2>
                    <div class="flex gap-3 items-center">
                        <p class="text-base my-1">${video.authors[0].profile_name} <img src="${video.authors[0].verified ? 'images/Group 3.png' : ''}" alt="" class="w-4 h-4 inline" /></p>
                    </div>
                    <p>${video.others.views} views</p>
                </div>
             </div>
            
        </div>
        `;
        videoContainer.appendChild(div);
    })

   
    const emptySection = document.getElementById('empty-section');
    if(videosData.length === 0){
        emptySection.classList.remove('hidden');
    }else{
        emptySection.classList.add('hidden')
    }
}


document.getElementById('short-btn').addEventListener('click', function() {
    
    const videosHandler = async (categoryId) => {
        const res = await fetch(`https://openapi.programming-hero.com/api/videos/category/${categoryId}`);
        const data = await res.json();
        const videosData = data.data;
        console.log(videosData);

        const sortedData = videosData.sort((a, b) => {
            const aViews = parseInt(a.others.views);
            const bViews = parseInt(b.others.views);
              return bViews - aViews
          })
    
        const videoContainer = document.getElementById('video-container');
        videoContainer.innerHTML = "";
    
        videosData.forEach((video) => {
            const hrs = Math.floor(video.others.posted_date / 3600);
            const min = Math.round((video.others.posted_date - (hrs * 3600)) / 60);
    
            const div = document.createElement('div');
            div.classList = ('card card-compact bg-base-100 shadow rounded-md');
            div.innerHTML = `
            <figure class="relative">
                <img
                src="${video.thumbnail}" class="w-full h-52 rounded-lg" />
                <div class="absolute right-2 bottom-2">
                    <p id="duration" class="text-sm ${video.others.posted_date ? 'bg-black' : 'bg-transparent'} text-white py-1 px-3 rounded-md">${video.others.posted_date ? hrs + " hours " + min + " minutes " : ''}</p>
                </div>
            </figure>
            <div class="card-body">
                <div class="flex gap-5">
                    <div>
                        <img
                        src="${video.authors[0].profile_picture}"
                        alt=""
                        class="w-12 h-12 rounded-full" />  
                    </div>
                    <div>
                        <h2 class="text-xl font-semibold">${video.title}</h2>
                        <div class="flex gap-3 items-center">
                            <p class="text-base my-1">${video.authors[0].profile_name} <img src="${video.authors[0].verified ? 'images/Group 3.png' : ''}" alt="" class="w-4 h-4 inline" /></p>
                        </div>
                        <p>${video.others.views} views</p>
                    </div>
                 </div>
                
            </div>
            `;
            videoContainer.appendChild(div);
        })
    
       
        const emptySection = document.getElementById('empty-section');
        if(videosData.length === 0){
            emptySection.classList.remove('hidden');
        }else{
            emptySection.classList.add('hidden')
        }
    }

    videosHandler("1000")
})


categoryHandler();
videosHandler("1000");

const blogPost = () => {
    window.location.href = 'blog.html'
}