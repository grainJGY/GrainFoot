$(document).ready(function() {
	//初始化时间轴
	Timeline.init();
	
	var imageDescription=$(".image-description");
	hoverEqualClick(imageDescription);
});

//鼠标移上效果和点击效果一样
function hoverEqualClick(currLabel){
	currLabel.on("click", function(){
		$(this).hover();
	});
};
