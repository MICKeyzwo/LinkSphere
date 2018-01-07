const LinkSphere = function(param) {
    let root = document.createElement("div");
    root.style.width = root.style.height = "250px";
    root.style.position = "relative";
    let len = 0;
    for (len = 1; len * len < param.length; len++);
    let points = [];
    const PI = Math.PI;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            points.push({
                lat: (PI * 2 / len) * i,
                lng: (PI * 2 / len) * j
            });
        }
    }
    let msgs = new Array(param.length);
    for (let i = 0; i < msgs.length; i++) {
        let item = {};
        item.point = points.splice((Math.random() * points.length) | 0, 1)[0];
        item.msg = param[i][0];
        item.link = param[i][1];
        msgs[i] = item;
    };
    console.log(msgs);

    this.root = root;
    this.msgs = msgs;
};
LinkSphere.prototype.join = function(el) {
    el.appendChild(this.root);
}