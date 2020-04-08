/**
 * @author dustdawn
 * @date 2020/4/8 15:12
 * @Description: 读取json文件
 */

window.onload = function () {
    // json文件url
    var url = "data.json"
    var request = new XMLHttpRequest();
    request.open("get", url);
    request.send(null);
    request.onload = function () {
        if (request.readyState == 4) {
            var json = JSON.parse(request.responseText);
            console.log(json);
            if (json.result) {
                var dataList = json.result;
                console.log("资讯列表", dataList)
            }
            // 拼装资讯列表
            var info_div = document.getElementById("info");

            for(let i=0;i<dataList.length;i++) {
                // 资讯展示box
                var news_box = document.createElement("div");
                news_box.className = "news_box";

                // 一、box左半部分
                var box_left = document.createElement("div");
                box_left.className = "box_left";

                // 1.资讯标题
                var box_content = document.createElement("div");
                box_content.className = "box_content";
                var info_title = document.createElement("div");
                info_title.className = "info_title";
                info_title.innerHTML = dataList[i].title;
                box_content.appendChild(info_title);

                // 2.资讯详情信息
                var box_detail = document.createElement("div");
                box_detail.className = "box_detail";
                // 2.1 时间
                var info_time = document.createElement("div");
                info_time.className = "info_time";
                info_time.innerHTML = dataList[i].time;
                // 2.2 作者
                var info_author = document.createElement("div");
                info_author.className = "info_author";
                info_author.innerHTML = dataList[i].author;
                // 2.3 是否已读
                var info_status = document.createElement("div");
                info_status.className = "info_status";
                info_status.innerHTML = dataList[i].status_DISPLAY;
                box_detail.appendChild(info_time);
                box_detail.appendChild(info_author);
                box_detail.appendChild(info_status);
                // 左半部分拼接完成
                box_left.appendChild(box_content);
                box_left.appendChild(box_detail);

                // 二、box右半部分
                var box_right = document.createElement("div");
                box_right.className = "box_right";
                var info_img = document.createElement("div");
                info_img.className = "info_img";
                var img = document.createElement("img");
                img.src = dataList[i].img;
                info_img.appendChild(img);
                // 右半部分拼接完成
                box_right.appendChild(info_img);

                news_box.appendChild(box_left);
                news_box.appendChild(box_right);
                // 组装到info_div上
                info_div.appendChild(news_box);
            }
        }
    }
}

