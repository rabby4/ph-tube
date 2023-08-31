const categoryHandler = async () =>{
    const res = await fetch("https://openapi.programming-hero.com/api/videos/categories");
    const data = await res.json();
    const categories = data.data;

    const categoryMenuContainer = document.getElementById('category-menu-container')
    categories.forEach(category => {
        const li = document.createElement('li');
        li.classList = ('mx-5')
        li.innerHTML = `
        <a class="bg-gray-200 hover:bg-red-600 hover:text-white">${category.category}</a>
        `;
        categoryMenuContainer.appendChild(li)
    });
}

const videosHandler = async () => {
    const res = await fetch("https://openapi.programming-hero.com/api/videos/category/1000");
    const data = await res.json();
    const videosData = data.data;
    console.log(videosData);

    const videoContainer = document.getElementById('video-container');
    videosData.forEach((video) => {
        const div = document.createElement('div');
        div.classList = ('card card-compact bg-base-100 shadow-xl');
        div.innerHTML = `
        <figure>
            <img
            src="${video.thumbnail}" class="w-full h-60" />
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
                        <p class="text-base my-1">${video.authors[0].profile_name}</p>
                        <img src="images/Group 3.png" alt="" class="w-4 h-4" />
                    </div>
                    <p>${video.others.views} views</p>
                </div>
             </div>
            
        </div>
        `;
        videoContainer.appendChild(div)
    })
}

categoryHandler()
videosHandler()