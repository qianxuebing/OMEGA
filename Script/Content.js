var veryDisagree = {
	title: '非常不满意的原因',
	list: [{
			name: "非常不满意1"
		},
		{
			name: "非常不满意2"
		},
	]
};
//	console.log(VeryDisagree.list[0].name)

var disagree = {
	title: '不满意的原因',
	list: [{
			name: "不满意11"
		},
		{
			name: "不满意22"
		},
		{
			name: "不满意33"
		},
		{
			name: "不满意44"
		},
	]
};
var common = {
	title: '一般的原因',
	list: [{
			name: "一般1"
		},
		{
			name: "一般2"
		},
		{
			name: "一般3"
		},
	]
};
var satisfied = {
	title: '满意的原因',
	list: [{
			name: "满意11"
		},
		{
			name: "满意22"
		},
	]
};
var verySatisfied = {
	title: '非常满意的原因',
	list: [{
		name: "非常满意11"
	}, ]
};

$(function() {

	//选择星星 
	for(var i = 0; i < $(".star span").length; i++) {
		$(".star span").eq(i).on("touchstart", function(e) {
			e.preventDefault();
			$(this).addClass("checked").removeClass("un_check").prevAll("span").addClass("checked").removeClass("un_check");
			$(this).nextAll("span").removeClass("checked").addClass("un_check");
		})
	}

	//多选 
	for(var i = 0; i < $(".items li").length; i++) {
		$(".items li").eq(i).on("touchstart", function(e) {
			e.preventDefault();
			if($(this).hasClass("active")) {
				$(this).removeClass("active");
			} else {
				$(this).addClass("active");
			}
		})
	}

	//确认
	$(".btn-confirm").on("touchstart", function(e) {
		e.preventDefault();
		window.location.href = 'End.html';
	})

})