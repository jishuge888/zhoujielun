// 所有文件夹下的MP3文件列表（补充你的文件）
const allMp3Files = [
    "范特西/周杰伦－忍者.mp3",
    "范特西/周杰伦－简单爱.mp3",
    "七里香/周杰伦－七里香.mp3",
    "七里香/周杰伦－借口.mp3",
    "十一月的萧邦/周杰伦 - 发如雪.mp3",
    "十一月的萧邦/周杰伦 - 漂移.mp3"
];

const showAllBtn = document.getElementById('showAllBtn');
showAllBtn.onclick = function() {
    playlist = [];
    playlist.push(...allMp3Files);
    currentIndex = -1;
    updateSongList();
    status.textContent = "已列出所有MP3文件，请点击歌曲播放";
};
