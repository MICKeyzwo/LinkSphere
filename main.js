window.addEventListener("load", _ => {
    let target = document.getElementById("target");
    let sphere = new LinkSphere([
        ["google", "https://google.co.jp/"],
        ["yahoo", "https://yahoo.com/"],
        ["youtube", "https://youtube.com/"],
        ["twitter", "https://twitter.com/"],
        ["facebook", "https://hs-jp.facebook.com/"],
        ["instagram", "https://instagram.com/"],
        ["slack", "https://slack.com/"],
        ["discode", "https://discordapp.com/"]
    ]);
    sphere.join(target);
});