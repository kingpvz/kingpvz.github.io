const headertemplate = document.createElement('template');
const footertemplate = document.createElement('template');

headertemplate.innerHTML = `
<div class="header">
  <a href="/"><img src="/global_resources/images/website_logo.png" id="webtitle"></a>
         <div id="titlediv">
            <a target="_blank" style="color: red;" class="titleitem" href="https://youtube.com/@kingpvz">YouTube</a><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
            <a target="_blank" style="color: #FF424D;" class="titleitem" href="https://patreon.com/kingpvz">Patreon</a><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
            <a target="_blank" style="color: #F56040" class="titleitem" href="https://instagram.com/kingpvzyt">Instagram</a><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
            <a target="_blank" style="color: #1DB954;" class="titleitem" href="https://open.spotify.com/artist/0E9m4Xiqd4g7gAnByJ8FZW?si=1m-T9AhcS7-npeM3t_ZHCw">Spotify</a><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
            <a target="_blank" style="color: white;" class="titleitem" href="https://my-store-b3cfd9.creator-spring.com/">Merch</a><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
            <a target="_blank" style="color: #ccf;" class="titleitem" href="https://discord.gg/dSA8SjbkXP">Discord</a>
         </div></div>
`;

footertemplate.innerHTML = `
<div class="footer">
        <p>&copy;2024 Kingpvz</p><p>All rights reserved.</p><p><a target="_blank" class="footerlink" href="https://github.com/kingpvz/kingpvz.github.io/">GitHub Repository</a></p>
     </div>
`;