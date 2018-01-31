// 获取用户头像和昵称
$(function () {
	// 获取openid
	var newOpenid = localStorage.getItem("openid");
	var newopenid = newOpenid.replace("\"", "");
	var openid = newopenid.replace("\"", "");
	// alert(newOpenid);
	$.ajax({
		url: "https://andashi.top/yc/api/yicui/v1",
		type: "post",
		async: false,
		data: JSON.stringify({
			"type": "wxOpenId",
			"wxOpenId": openid
		}),
		contentType: "application/json; charset=utf-8",
		dataType: "json",
		success: function (data) {
			//请求成功
			// var data = JSON.stringify(data.data)
			// $(".more2").html(template("tpl",{data:data}));
			$(".more").html(template("tpl1",data));
			$(".more2").html(template("tpl2",data));
		},
		error: function (e) {
		}
	})
})
/*生成canvas图形*/
// 获取按钮id
var savebtn = document.getElementById("savebtn");
// 获取内容id
var more2 = document.getElementById("more2");
var tag = true;
savebtn.onclick = function () {
	aClick();
	setTimeout("bClick()", 1000);
}

function aClick() {
	html2canvas(more2, {
		onrendered: function (canvas) {
			canvas.setAttribute('id', 'thecanvas');
			// 把canvas加到页面img里
			document.getElementById('images').innerHTML = '';
			document.getElementById('images').appendChild(canvas);
		}
	});
}
var saveFile = function (data, filename) {
	var save_link = document.createElementNS('http://www.w3.org/1999/xhtml', 'a');
	save_link.href = data;
	// 下载
	save_link.download = filename;
	var event = document.createEvent('MouseEvents');
	event.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
	save_link.dispatchEvent(event);
};
function bClick() {
	var oCanvas = document.getElementById("thecanvas");
	// 获取图片资源，自动保存为png
	var img_data1 = Canvas2Image.saveAsPNG(oCanvas, true).getAttribute('src');
	saveFile(img_data1, 'richer.png');
	// 控制弹出框显示
	document.getElementById('box').style.display = "block";
	// base64 编码的 dataURL
	document.getElementById('end').src = img_data1;
}

// 点击关闭弹出框
var box = document.getElementById("box");
box.onclick = function () {
	document.getElementById('box').style.display = "none";
}
// 跳到艺萃文章详情页
var jump = document.getElementById("jump");
jump.onclick = function () {
	window.location.href = 'http://mp.weixin.qq.com/s/wI8QTJfuYDt_hw8-JClu9A';
}