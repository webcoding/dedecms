dedecms
=======

dedecms优化版

20:28 2012/4/8更改

关于列表页面调用tag标签
修改了/include/common.func.php以及dedesqli.class.php
支持列表页调用tags标签

更改了网站地图模板路径，以及生产的文件路径
原sitemap模板路径为/templets/plus下的sitemap.htm和rssmap.htm，生成目录在data下
现改为统一的（模板默认风格）路径下的sitemap.htm和rssmap.htm，生成目录为根目录下
修改涉及的文件为：
/dede/makehtml_map.php

同时还把百度新闻生成路径改为生成在根目录
/dede/templets/baidunews.htm

15:04 2012-2-1更新

修改了dedecms 提示信息，
/dede/sys_data_done.php
/include/common.func.php

/include/common.inc.php
//文档的默认命名规则

	$art_shortname = $cfg_df_ext = '.html';
	$cfg_df_namerule = '{typedir}/{Y}/{M}{D}/{aid}'.$cfg_df_ext;

改为

	$cfg_df_namerule = '{typedir}/{aid}'.$cfg_df_ext;


修改了文章表_archives,修改如下sql-dftables.txt

	title 		60-->100
	shorttitle 	36-->40
	keywords	30-->80
	filename	60-->100

_tagindex和_taglist表中的

	tag		12-->30

修改了系统初始配置sql-dfdata.txt
_sysconfig 表 cfg_title_maxlen 60-->100

	('10','cfg_arcdir','文档HTML默认保存路径','1','string','/'),
	('719','cfg_makeindex','发布文章后马上更新网站主页','6','bool','Y'),
	('51','cfg_keyword_like','使用关键词关连文章','6','bool','Y'),

是否启用全文检索？？？？？数据库mysqli

	('752','cfg_mysql_type','数据库类型（支持mysql和mysqli）','2','string','mysqli'),


页面标题使用
文章标题-栏目-网站名

tag关键字输入，将间隔符将中文的，自动变为英文的,
设置dede/templets/article_add.htm   article_edit.htm  archives_add.htm  archives_edit.htm

	onChange="$Obj('keywords').value=this.value;" onkeyup="this.value=this.value.replace(/，/g, ',');"
	value="<?php echo $tags; ?>" onkeyup="this.value=this.value.replace(/，/g, ',');"
 
 (','号分开，单个标签小于30字节)这里修改了tag字段，由原来的12改为30


4、织梦DedeCMS网站地图优化技巧：生成根目录

为避免将data目录内的东西随便外泄，在robots中将data目录屏蔽了，但是dede默认的网站地图却是在data下，屏蔽掉这个文件夹的话搜索引擎就无法抓取到网站地图，这不利于seo优化，那么有没有好的方法呢，让DEDE生成的网站地图放在系统根目录下面？

修改根目录下你的管理员文件夹(默认是dede)下的makehtml_map.php文件

sitemap.class.php 修改map列表样式
arc.rssview.class.php 更新rss文件（路径修改）
如果按以上操作，生成不了，提示如下结果：“DedeTag Engine Create File False”

则修改 include/dedetag.class.php文件，搜索"DedeTag Engine Create File False"，会找到以下代码

	$fp = @fopen($filename,"w") or die("DedeTag Engine Create File False");

修改成

	$fp = @fopen($filename,"w") or die("DedeTag Engine Create File False:$filename");


5、将data搬至根目录外

/include/arc.archives.class.php添加了无觅文件





## 注意事项

### 一些错误的解决方案

部分使用PHP 5.3的主机可能会有下面的提示：

> (PHP 5.3 and above) Please set 'request_order' ini value to include C,G and P (recommended: 'CGP') in php.ini

由于在PHP最新的版本中增加了一个配置项目“request_order”，默认值为“GP”，这个存在一定的安全风险。这里我们建议用户将配置更改为“CGP”

可以在phpinfo中查看对应的php.ini配置目录，找到下面选项：

	request_order = "GP"

更改为

	request_order = "CGP"

重启服务器后即可。

**注意：**由于此选项会影响服务器的安全，请大家务必及时更改。