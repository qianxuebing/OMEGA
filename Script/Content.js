var veryDisagree = {
	title: '非常不满意的方面',
	list: ["非常不满意1","非常不满意2"]
};
//	console.log(VeryDisagree.list[0].name)

var disagree = {
	title: '不满意的原因',
	list: ["不满意11","不满意22","不满意33","不满意44"]
};
var common = {
	title: '一般的原因',
	list: [ "一般1","一般2","一般3"]
};
var satisfied = {
	title: '满意的原因',
	list: ["满意11","满意22"]
};
var verySatisfied = {
	title: '非常满意的原因',
	list: ["非常满意11"]
};




$(function() {
	var items=`<p class="aspect-title"></p>
				<div class="aspect-wrap">
					<ul class="items"></ul>			
					<div class="other-opinion">
						<textarea rows="3" cols="" placeholder="其他意见..."></textarea>
					</div>
				</div>`
				
	setTimeout(()=>{
		showLoading(false);
	},500);
	
	//选择星星 
	$.each($(".star span"), function(index,value) {
		$(".star span").eq(index).on("touchstart", function(e) {
			e.preventDefault();
			$(this).addClass("checked").removeClass("un_check").prevAll("span").addClass("checked").removeClass("un_check");
			$(this).nextAll("span").removeClass("checked").addClass("un_check");
			
			var starLength=$(".star span.checked").length;			
			switch (starLength){
				case 1:
					$(".evaluate-wrap .evaluate").text("*非常不满意");
					checkStar(items,veryDisagree);			
					break;
				case 2:
					$(".evaluate-wrap .evaluate").text("*不满意");
					checkStar(items,disagree);	
					break;
				case 3:
					$(".evaluate-wrap .evaluate").text("*一般");	
					checkStar(items,common);					
					break;
				case 4:
					$(".evaluate-wrap .evaluate").text("*满意");	
					checkStar(items,satisfied);
					break;
				case 5:
					$(".evaluate-wrap .evaluate").text("*非常满意");
						checkStar(items,verySatisfied);
					break;
				default:
					break;
			}
		
		})
						
	});
	

	//确认
	$(".btn-confirm").on("touchstart", function(e) {
		e.preventDefault();		
		if ($(".star span.checked").length<1) {
			check("请选择满意度");
		} else{
			if ($(".items li.active").length<1) {
				check("请选择某个方面");
			} else{				
				window.location.href = 'End.html';
			}
		}				
	})
	

})


// 多选
function addEvent(index){
	$(".items li").eq(index).on("touchstart", function(e) {
		e.preventDefault();
		if($(this).hasClass("active")) {
			$(this).removeClass("active");
		} else {
			$(this).addClass("active");
		}
	})
}

// 添加多选项 
function checkStar(item,name){
	if ($(".aspect").html() == "") {
		$(".aspect").append(item);
		$(".aspect .aspect-title").text(name.title);
		$.each(name.list,function(index,value){
			$(".aspect .items").append(`<li>${value}</li>`);
			addEvent(index);	
		});
	} else{
		$(".aspect").html("");
		$(".aspect").append(item);
		$(".aspect .aspect-title").text(name.title);
		$.each(name.list,function(index,value){
			$(".aspect .items").append(`<li>${value}</li>`);
			addEvent(index);
		});
	};	
}

