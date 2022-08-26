

const PLAYER_STORAGE_KEY = "LOFi-CHILL";
const test = localStorage.getItem(PLAYER_STORAGE_KEY);
const playlist = document.querySelector(".playlist");
const playBtn = document.querySelector(".play-btn");
const audio = document.getElementById("audio");
const progress = document.querySelector(".progress");
const nextBtn = document.querySelector(".next-btn");
const preBtn = document.querySelector(".pre-btn");
const randomBtn = document.querySelector(".random-btn");
const volumeBtn = document.querySelector(".volume-btn");
const volumeChange = document.querySelector(".volume-change");
const volumeIcon = document.getElementsByClassName("volume-icon");
const volumeOff = document.querySelector(".volume-off");
const volumeLow = document.querySelector(".volume-low");
const volumeDefault = document.querySelector(".volume-default");
const volumeHigh = document.querySelector(".volume-high");
const repeatBtn = document.querySelector(".repeat-btn");
const songClass = document.getElementsByClassName("song");
const usukSingle = document.querySelector(".usuk-single");
const usukPlaylist = document.querySelector(".usuk-playlist");
const vnSingle = document.querySelector(".vn-single");
const vnPlaylist = document.querySelector(".vn-playlist");
const musicItem = document.getElementsByClassName("music__list-item");
const musicList = document.querySelector(".music__list");
const musicListOne = document.querySelector(".music__list-one");
const musicListTwo = document.querySelector(".music__list-two");
const musicModal = document.querySelector(".music__add")
const musicAddIcon = document.querySelector(".music__add-icon");
const musicAddIconClose = document.querySelector(".music__add-file-close-icon");
const musicAddInput = document.querySelector(".music__add-file-input");
const fileList = document.querySelector(".file__list");
const fileBtn = document.querySelector(".music__add-file-btn");
const songImg = document.getElementsByClassName("song__img");
const app = {
    currentIndex: 0,
    isRandom: false,
    isVolume: false,
    isRepeat: false,
    isUsukSongPush: false,
    isUsukPlaylistPush: false,
    isVnSongPush: false,
    isVnPlaylistPush: false,
    // config: JSON.parse(test),
    // setConfig: function(key, value){
    //     this.config[key] = value;
    //     localStorage.setItem(PLAYER_STORAGE_KEY, JSON.stringify(this.config));
    // },
    checkPlaylist: function(){
        if (usukSingle.getAttribute("class") == "music__list-item usuk-single active"){
            this.songs = [];
            if (this.isUsukSongPush){
                usukSingleArray
            }else{
                usukSingleArray = [
                    {   
                        name: "Sailing on a Flying Boat",
                        singer: "Enzalla",
                        path: "./assets/music/Sailing on a Flying Boat.mp3",
                        image: "./assets/img/disc.png",
                    },{
                        name: "Glow",
                        singer: "Mo Anando",
                        path: "./assets/music/Glow.mp3",
                        image: "./assets/img/disc.png",
                    },{
                        name: "Tall",
                        singer: "Hanz  Makzo",
                        path: "./assets/music/Tall.mp3",
                        image: "./assets/img/disc.png",
                    },{
                        name: "Sunshine",
                        singer: "HM Surf",
                        path: "./assets/music/Sunshine.mp3",
                        image: "./assets/img/disc.png",
                    },{
                        name: "Yesterday",
                        singer: "Mo Anando",
                        path: "./assets/music/Yesterday.mp3",
                        image: "./assets/img/disc.png",
                    },{
                        name: "Yeah",
                        singer: "Monma",
                        path: "./assets/music/Yeah.mp3",
                        image: "./assets/img/disc.png",
                    }
                ];
            }
            this.songs = usukSingleArray.slice();
        }else if (usukPlaylist.getAttribute("class") == "music__list-item usuk-playlist active"){
            this.songs = [];
            if (this.isUsukPlaylistPush){
                usukPlaylistArray
            }else{
                usukPlaylistArray = [];
            }
            this.songs = usukPlaylistArray.slice();
        }else if (vnSingle.getAttribute("class") == "music__list-item vn-single active"){
            this.songs = [];
            if (this.isVnSongPush){
                vnSingleArray
            }else{
                vnSingleArray = [
                    {
                        name: "3107",
                        singer: "Wn, Dương, Nâu",
                        path: "./assets/music/3107.mp3",
                        image: "./assets/img/disc.png",
                    },{
                        name: "Ánh Sao Và Bầu Trời",
                        singer: "T.R.i",
                        path: "./assets/music/AnhSaoVaBauTroi.mp3",
                        image: "./assets/img/disc.png",
                    },{
                        name: "Đường tôi chở em về",
                        singer: "buitruonglinh, Freaky",
                        path: "./assets/music/DuongToiChoEmVe.mp3",
                        image: "./assets/img/disc.png",
                    },{
                        name: "Hongkong1",
                        singer: "Nguyễn Trọng Tài",
                        path: "./assets/music/hongkong1.mp3",
                        image: "./assets/img/disc.png",
                    },{
                        name: "Mặt mộc",
                        singer: "Phan Nguyên Trọng, Vanh, BMZ",
                        path: "./assets/music/MatMoc.mp3",
                        image: "./assets/img/disc.png",
                    },{
                        name: "Ngã tư không đèn",
                        singer: "Trang, Khoa Vũ",
                        path: "./assets/music/NgaTuKhongDen.mp3",
                        image: "./assets/img/disc.png",
                    },{
                        name: "Phận duyên lỡ làng",
                        singer: "Phát Huy, T4, Truzg, KProx",
                        path: "./assets/music/PhanDuyenLoLang.mp3",
                        image: "./assets/img/disc.png",
                    },{
                        name: "Răng khôn",
                        singer: "RIN9",
                        path: "./assets/music/RangKhon.mp3",
                        image: "./assets/img/disc.png",
                    },{
                        name: "Vài câu nói có khiến người thay đổi",
                        singer: "GREY D, tlinh",
                        path: "./assets/music/vaicaunoicokhiennguoithaydoi.mp3",
                        image: "./assets/img/disc.png",
                    }
                ];
            }
            this.songs = vnSingleArray.slice();
        }else if (vnPlaylist.getAttribute("class") == "music__list-item vn-playlist active"){
            this.songs = [];
            if (this.isVnPlaylistPush){
                vnPlaylistArray
            }else{
                vnPlaylistArray = [
                ];
                console.log(audio.getAttribute("src"))
            }
            this.songs = vnPlaylistArray.slice();
        }
    },
    songs:[],
    render: function () {
        const htmls = this.songs.map((song, index) => {
            return `
                            <div class="song ${index == this.currentIndex ? 'active':''}" data-index="${index}">
                                <div class="song__img"
                                    style="background-image: url('${song.image}')">
                                </div>
                                <div class="song__body">
                                    <div class="song__title">${song.name}</div>
                                    <div class="song__author">${song.singer}</div>
                                </div>
                            </div>
                        `;
        });
        playlist.innerHTML = htmls.join("");
      },
    defineProperties: function () {
        Object.defineProperty(this, "currentSong", {
            get: function () {
            return this.songs[this.currentIndex];
            }
        });
    },
    handleEvents: function(){
        const _this = this;
        // Play & pause
        playBtn.addEventListener("click", function(){
            if (playBtn.getAttribute("class") == "player__control-icon play-btn"){
                audio.play()
            }else{
                audio.pause()
            }
        });
        audio.onplay = function(){
            audio.play();
            playBtn.classList.add("playing");
            // songAnimated.play()
        };
        audio.onpause = function(){
            audio.pause();
            playBtn.classList.remove("playing");
            // songAnimated.play()
        };
        // Next & pre song
        nextBtn.addEventListener("click", function(){
            if(_this.isRandom){
                _this.playRandomSong();
            }else{
                _this.nextSong;
            };
            _this.nextSong();
            audio.play();
            _this.scrollToActiveSong();
        });
        preBtn.addEventListener("click", function(){
            if(_this.isRandom){
                _this.playRandomSong();
            }else{
                _this.preSong;
            };
            _this.preSong();
            audio.play();
            _this.scrollToActiveSong();
        });
        // Random
        randomBtn.addEventListener("click", function(){
            _this.isRandom = !_this.isRandom;
            // _this.setConfig("isRandom", _this.isRandom);
            randomBtn.classList.toggle("active", _this.isRandom);
        });
        // Progress
        audio.ontimeupdate = function(){
            if (audio.duration){
                const progressPercent = Math.floor(audio.currentTime / audio.duration*100);
                progress.value = progressPercent;
            }
        };
        progress.addEventListener("change", function(e){
            const seekTime = e.target.value*audio.duration/100;
            audio.currentTime = seekTime;
        });
        // Next song when audio ended
        audio.addEventListener("ended", function(){
            if(_this.isRepeat){
                audio.play()
            }else{
                nextBtn.click();
            }
        })
        // Volume click
        volumeBtn.addEventListener("click", function(){
            _this.isVolume = !_this.isVolume;
            volumeBtn.classList.toggle("active", _this.isVolume);
            volumeChange.classList.toggle("active", _this.isVolume);
        });
        // Volume change
        volumeChange.addEventListener("change", function(n){
            const seekVolume = n.target.value/100;
            audio.volume = seekVolume;
            // _this.setConfig("volumeValue", audio.volume);
            _this.volumeAnimation();
        });
        // Repeat Btn
        repeatBtn.addEventListener("click", function(){
            _this.isRepeat = !_this.isRepeat;
            // _this.setConfig("isRepeat", _this.isRepeat);
            // console.log(_this.setConfig("isRepeat", _this.isRepeat))
            this.classList.toggle("active", _this.isRepeat);
        });
        // Playlist click
        playlist.addEventListener("click", function(event){
            const songNode = event.target.closest(".song:not(.active)");
            if (songNode){
                _this.currentIndex = Number(songNode.dataset.index);
                _this.loadCurrentSongs();
                _this.songActive();
                audio.play();
            };
        });
        // Check playlist btn
        musicListOne.addEventListener("click", function(event){
            for (let i=0;i < musicItem.length; i++) {
                musicItem[i].classList.remove("active");
            };
            event.target.classList.add("active");
            _this.checkPlaylist();
            _this.render();
        })
        musicListTwo.addEventListener("click", function(event){
            for (let i=0;i < musicItem.length; i++) {
                musicItem[i].classList.remove("active");
            };
            event.target.classList.add("active");
            _this.checkPlaylist();
            _this.render();
        })
        // Music add event listener
        musicAddIcon.addEventListener("click", function(){
            musicModal.classList.add("active");
        });
        musicAddIconClose.addEventListener("click", function(){
            musicModal.classList.remove("active");
        });
        musicAddInput.addEventListener("change", function(){
                // if(musicAddInput.files[0].type.indexOf('audio/') !== 0){
                //   console.warn('not an audio file');
                //   return;
                //   }
                // const reader = new FileReader();
                // reader.onload = function(){
                // var str = this.result;
                //     // this is a string, so you can store it in localStorage, even if it's really not a good idea
                //     console.log(str);
                //     audio = new Audio(str);
                //     audio.play();
                // reader.readAsDataURL(musicAddInput.files[0]);
                // }
                // var url= str;
                // localStorage.setItem("url",url);
                // function loadOldUrl(){
                // localStorage.getItem("url");
                // }
                //when button clicked
                
            _this.musicAddChange();
        });
        document.querySelector(".music__add-file-btn").addEventListener("click",    function(){
            document.querySelector(".file-remove").addEventListener("click", function(){
                this.parentElement.parentElement.remove()
            })
            var inputFiles = musicAddInput.files;
            var fileURL = URL.createObjectURL(inputFiles[0]);
            console.log(fileURL)
            audio.setAttribute("src", fileURL)
            localStorage.setItem("url", fileURL)

        })
    },
    uploadFile: function(){

    },
    musicAddChange: function(){
        // Inner file-block & file-selector
        fileWrapper = document.createElement("div");
        fileWrapper.classList.add("file__wrapper");
        fileBlock = document.createElement("div");
        fileBlock.classList.add("file-block");
        fileSelector = document.createElement("div");
        fileSelector.classList.add("music__add-file-selector")
        for (let i = 0; i < musicAddInput.files.length; i++) {
            fileBlock.innerHTML = '<div class="file-info"><i class="fa-solid fa-file-audio file-audio"></i><span class="file-name">' + musicAddInput.files[i].name + '</span> | <span class="file-size">' + (musicAddInput.files[i].size/1024).toFixed(1) + 'KB</span></div><i class="fa-solid fa-trash file-remove"></i></div>'
            fileSelector.innerHTML = '<div><label for="national">National:</label><select name="national" class="national"><option value="usuk">US/UK</option><option value="vn">Việt Nam</option></select></div><div><label for="local">Song or playlist:</label><select name="local" class="local"><option value="song">Song</option><option value="playlist">Playlist</option></select></div><div>Name:<input type="text" class="song-name"></div><div>Author:<input type="text" class="song-author"></div>'
            fileWrapper.append(fileBlock);
            fileWrapper.appendChild(fileSelector);
            fileList.append(fileWrapper)
        }
        const national = fileSelector.querySelector(".national");
        const local = fileSelector.querySelector(".local");
        const songName = fileSelector.querySelector(".song-name");
        const songAuthor = fileSelector.querySelector(".song-author");
        _this = this
        // File remove click
        // document.querySelector(".file-remove").addEventListener("click", function(){
        //     this.parentElement.parentElement.remove()
        // })
        // var inputFiles = musicAddInput.files;
        // var fileURL = URL.createObjectURL(inputFiles[0]);
        // console.log(fileURL)
        // audio.setAttribute("src", fileURL)

        fileBtn.addEventListener("click", function(event){
            event.preventDefault();
            console.log(national.value, local.value)
            if (national.value == "usuk" && local.value == "song"){
                _this.isUsukSongPush = true;
                var inputFiles = musicAddInput.files;
                var fileURL = URL.createObjectURL(inputFiles[0]);
                usukSingleArray.push({
                    name: songName.value,
                    singer: songAuthor.value,
                    path: fileURL,
                    image: "./assets/img/disc.png",
                })
                _this.songs = usukSingleArray.slice()
                _this.render()
            }else if (national.value == "usuk" && local.value == "playlist"){
                _this.isUsukPlaylistPush = true;
                var inputFiles = musicAddInput.files;
                var fileURL = URL.createObjectURL(inputFiles[0]);
                usukPlaylistArray.push({
                    name: songName.value,
                    singer: songAuthor.value,
                    path: fileURL,
                    image: "./assets/img/disc.png",
                })
                _this.songs = usukPlaylistArray.slice()
                _this.render()
            }else if (national.value == "vn" && local.value == "song"){
                _this.isVnSongPush = true;
                var inputFiles = musicAddInput.files;
                var fileURL = URL.createObjectURL(inputFiles[0]);
                vnSingleArray.push({
                    name: songName.value,
                    singer: songAuthor.value,
                    path: fileURL,
                    image: "./assets/img/disc.png",
                })
                _this.songs = vnSingleArray.slice()
                _this.render()
            }else if (national.value == "vn" && local.value == "playlist"){
                _this.isVnPlaylistPush = true;
                var inputFiles = musicAddInput.files;
                var fileURL = URL.createObjectURL(inputFiles[0]);
                vnPlaylistArray.push({
                    name: songName.value,
                    singer: songAuthor.value,
                    path: fileURL,
                    image: "",
                })
                _this.songs = vnPlaylistArray.slice()
                _this.render()
            }
        });
    },
    volumeAnimation: function(){
        if (audio.volume == 0){
            for (let i=0;i < volumeIcon.length; i++) {
                volumeIcon[i].classList.remove("active");
            };
            volumeOff.classList.add("active");
        }else if(audio.volume>0 && audio.volume<0.34){
            for (let i=0;i < volumeIcon.length; i++) {
                volumeIcon[i].classList.remove("active");
            };
            volumeLow.classList.add("active");
        }else if(audio.volume>=0.34 && audio.volume<0.67){
            for (let i=0;i < volumeIcon.length; i++) {
                volumeIcon[i].classList.remove("active");
            };
            volumeDefault.classList.add("active");
        }else{
            for (let i=0;i < volumeIcon.length; i++) {
                volumeIcon[i].classList.remove("active");
            };
            volumeHigh.classList.add("active");
        };
    },
    loadCurrentSongs: function(){
        audio.setAttribute("src", this.currentSong.path);
    },
    nextSong: function(){
        this.currentIndex++
        if (this.currentIndex >= this.songs.length){
            this.currentIndex = 0;
        };
        this.songActive();
        this.loadCurrentSongs();
    },
    preSong: function(){
        this.currentIndex--
        if (this.currentIndex < 0){
            this.currentIndex = this.songs.length-1;
        };
        this.songActive();
        this.loadCurrentSongs();
    },
    songActive: function(){
        for (let i=0;i < songClass.length; i++) {
            songClass[i].classList.remove("active");
            if(Number(songClass[i].getAttribute("data-index")) == this.currentIndex){
                songClass[i].classList.add("active");
                const songimg = songClass[i].childNodes[1]
                var songAnimated = songimg.animate([{ transform: "rotate(360deg)" }], {
                    duration: 10000, // 10 seconds
                    iterations: Infinity
                });
                songAnimated.pause()
            }
        };
    },
    // loadConfig: function () {
    //     this.isRandom = this.config.isRandom;
    //     this.isRepeat = this.config.isRepeat;
    //     randomBtn.classList.toggle("active", this.isRandom);
    //     repeatBtn.classList.toggle("active", this.isRepeat);
    //   },
    playRandomSong: function(){
        let newIndex;
        do {
          newIndex = Math.floor(Math.random() * this.songs.length);
        } while (newIndex === this.currentIndex);
        this.currentIndex = newIndex;
        this.loadCurrentSongs();
    },
    scrollToActiveSong: function(){
        setTimeout(() => {
            document.querySelector(".song.active").scrollIntoView({
                behavior: "smooth",
                block: "center",
            })
        }, 300);
    },
    start: function(){
        // this.loadConfig()
        this.checkPlaylist();
        this.defineProperties();
        this.handleEvents();
        this.render();
        this.loadCurrentSongs();
    },
}
app.start();
// localStorage.setItem(PLAYER_STORAGE_KEY, JSON.stringify(this.config));

// function handleFiles(event) {
//     var files = event.target.files;
//     $("#src").attr("src", URL.createObjectURL(files[0]));
//     document.getElementById("audio").load();
// }

// document.getElementById("upload").addEventListener("change", handleFiles, false);
// <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
// <input type="file" id="upload" />
// <audio id="audio" controls>
//   <source src="" id="src" />
// </audio>
// Disc rotate
// console.log(   localStorage.getItem("url"))