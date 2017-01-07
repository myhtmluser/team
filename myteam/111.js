<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>瀑布流</title>
		<style type="text/css">
			
			#bigDiv{
				width: 900px;
				margin: 0px auto;
				border: 1px red solid;
				overflow: hidden;
			}
			#bigDiv ul{
				float: left;
				width: 300px;
				padding: 0;
			}
			#bigDiv ul li{
				list-style: none;
				margin-bottom: 10px;
			}
			
		</style>
	</head>
	<body>
		
		<div id="bigDiv">
			<ul></ul>		
			<ul></ul>		
			<ul></ul>		
		</div>
		
	</body>
	<script type="text/javascript">
		
		var allUl = document.querySelectorAll("ul");
		//存放20张网络图片
		var allImg = ["http://img.pconline.com.cn/images/upload/upc/tx/itbbs/1610/25/c47/28906783_1477398355944_mthumb.jpg" , "http://image.tianjimedia.com/uploadImages/2013/235/3K652B0WH4M5.jpg" , "http://image50.360doc.com/DownloadImg/2012/03/2213/22524134_22.jpg" , "http://image.tianjimedia.com/uploadImages/2015/083/30/VVJ04M7P71W2.jpg" , "http://img5q.duitang.com/uploads/item/201411/01/20141101112400_JrdMi.jpeg" , "http://pic.yesky.com/uploadImages/2014/315/00/J3U360Y9NYJ2.jpg" , "http://img.pconline.com.cn/images/upload/upc/tx/photoblog/1404/02/c1/32710598_32710598_1396404056265_mthumb.jpg" , "http://cdn.duitang.com/uploads/item/201205/03/20120503154538_G3mue.png" , "http://cdn.duitang.com/uploads/item/201511/19/20151119192810_k5duf.jpeg" , "http://p.ishowx.com/uploads/allimg/161104/290-161104161429.jpg" , "http://www.maitoufa.org/d/file/yule/20161119/gtqju2jwo1t.jpg" , "http://imgsrc.baidu.com/baike/pic/item/8644ebf81a4c510f64b65cfa6559252dd52aa5e4.jpg" , "http://f.hiphotos.baidu.com/imgad/pic/item/b3fb43166d224f4a7d50937e0ef790529922d196.jpg" , "http://f.hiphotos.baidu.com/imgad/pic/item/fcfaaf51f3deb48f397c42b3f71f3a292df57842.jpg" , "http://g.hiphotos.baidu.com/imgad/pic/item/f603918fa0ec08fa9f0b7dd85eee3d6d55fbda42.jpg" , "http://img.qhdxw.com/ykt/uploads/allimg/20161208/3630660-2f6b9b85359d9548b6f8ac3f36ebd429_550x3800x2.jpg" , "http://www.star84.com/userfile/contents/b7/143121501447707.jpg" , "http://www.miexue.com/d/file/2016/11/08/09/qperqr0pwhi26159.jpg" , "http://fun.youth.cn/yl24xs/201611/W020161123577675408882.jpg" , "http://www.people.com.cn/mediafile/pic/20161129/49/8015703597376496941.jpg" , "http://img01.youxiaoshuo.com/portal/201611/24/013618eamp5mym5599qcri.jpg"];
		//ulHeight数组存放各个ul的高度,以便于下面判断最小高度的ul,三个ul默认高度为0
		var ulHeight = [0, 0, 0];
		
		//求最小高度ul的下标
		function minHeight(){
			//一开始设数组的第一个数为min,即最小值
			var min = ulHeight[0]; 
			//变量index存放最小高度ul的下标，默认为0
			var index = 0;
			for(var i = 0; i < ulHeight.length; i++){
				if(ulHeight[i] < min){
					min = ulHeight[i];
				}
			}
			//循环过后,变量min存放的就是该数组中的最小值,接下来利用indexOf来得出最小值对应的下标
			index = ulHeight.indexOf(min);
			//返回这个下标
			return index;
		}
		
		for(var i = 0; i < allImg.length; i++){
			create(i);
		}
		
		//要把这些玩意封装起来
		function create(i){
			var img = document.createElement("img");
			img.src = allImg[i];
			//因为是网络中的图片，所以需要加载时间，这里要用到onload
			img.onload = function(){
				//图片加载完成后，要让图片自适应我规定好的300px宽度，即：
				// 原宽 * 原高 等比转成: 300px * 缩小后的高
				//先求出300px宽和图片实际宽的比例
				var scale = img.width / 300;
				//图片等比例转换
				var theHeight = img.height / scale; 
				img.style.height = theHeight + "px";
				img.style.width = 300 + "px";
				//将调整后的高和宽放入li标签中
				var li = document.createElement("li");
				li.appendChild(this);
				li.style.height = theHeight + "px";
				//这个li应该放到最小高度的ul里，下面调用minHeight函数，得出最小高度ul的下标
				var index = minHeight();
				allUl[index].appendChild(li);
				//放完后,增加ul的高度
				ulHeight[index] += this.height;
			}
		}
		
//		第一次更改
		
	</script>
</html>
