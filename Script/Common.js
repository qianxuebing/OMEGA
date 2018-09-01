var loadingHtml=`<div class="mask">
					<div class="content-wrapper">
						<span class="iconfont icon-loadingspinner"></span>
						<p>正在加载中...</p>
					</div>
				</div>`

var warnningHtml=`<div class="warnning-alert">
					<div class="content-wrapper">
						<p>请选着满意度</p>
						<div class="btn">
							<button class="button-confirm">确认</button>
						</div>
					</div>
				</div>`



$("body").prepend(loadingHtml);
$("body").prepend(warnningHtml);


function showLoading(open){
	if(open==null){
		open=true;
	}
	if (open) {
		$(".mask").show();
	}else{
		$(".mask").hide();
	}
}


function check(meg){
	$(".warnning-alert p").text(msg);
}

