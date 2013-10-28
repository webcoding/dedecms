var newVer="20120813";
if (parseInt(curVer,10)<parseInt(newVer,10)) {
	if (confirm("当前版本 "+curVer+"\n发现新版 "+newVer+"\n\n是否下载？")) {
		window.location.href="http://www.hemin.cn/jq_manual/downloads/";
	}
	$("#update").html("你当前的版本为 "+curVer+"，发现新版 "+newVer+"<br /><a href='http://www.hemin.cn/jq_manual/downloads/'>下载新版</a> <a href='http://www.hemin.cn/jq_manual/downloads/changelog.txt'>更新日志</a>");
}else {
	alert("当前已是最新版。");
}