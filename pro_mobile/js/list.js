
//搜索事件
$(function(){
	//点击搜索
	$('.search').click(function(){
		$('.search-content').slideDown();
	})
	//点击取消
	$('.cler').click(function(){
		$('.search-content').slideUp();
	})
	//排序栏
	$('.search-head li').mouseenter(function(){
		$(this).addClass('act-color').siblings().removeClass('act-color');
		var index = $(this).index();
		$(this).children('.xiala').addClass('bg-active').parents('li').siblings().children('.xiala').removeClass('bg-active');
		$('.main-search .search-list').eq(index).show().siblings().hide();
	})
	$('.main-search .search-list').mouseleave(function(){
		$('.main-search .search-list').hide();	
	})
	$('.search-list .sch-iner').click(function(){
		$(this).children('.gou').addClass('gou-active').parents().siblings().children('.gou').removeClass('gou-active');
	})
})



//全选样式
//$(function(){
//	$('.ckall').click(function(){
//		if($("input[type='checkbox'][class='sltAll']").prop('checked')){
//			$('.chd').css({'background-position':'0 0'});
//			
//		}else{
//			$('.chd').css({'background-position':'-21px 0'});
//			
//	}
//	});
//})
//单选样式
//$(function(){
//	$('.ick').click(function(){
//		if($(this).children().children('.ckd').prop('checked')){
//			$(this).children('.chked').css({'background-position':'-21px 0'});
//		}else{
//			$(this).children('.chked').css({'background-position':'0 0'});
//	}
//	});
//})
//让全选框影响子框的方法
	$(function(){
				//拿到所有类名为all的，绑定一个点击事件
				$(".ckall").click(function(){
					//拿到当前对象的name属性，
					var name = $(this).prop("id");
					console.log(name);
					//如果当前全选框处于被选择状态  有checked属性
					if ($(this).children().children('.sltAll').prop('checked')) {
						//那就让类名和当前name相同的选择框都变成选择状态
						$("."+name).children().children('.ckd').prop("checked","tl");
						//$("input[type='checkbox'][class='ckd']").prop('checked','tl');
						$("."+name).children('.chked').css({'background-position':'-21px 0'});
						$('.chd').css({'background-position':'0 0'});
					} else{
						//如果全选框处于为未被选中状态，那他的儿子们，都要移除掉checked
						$("."+name).children().children('.ckd').removeProp("checked");
						  //$("input[type='checkbox'][class='ckd']").prop('checked',false);
						  $("."+name).children('.chked').css({'background-position':'0 0'});
						$('.chd').css({'background-position':'-21px 0'});
					}
				})
				
//让子框影响全选框的方法
			$(".ick").bind("click",function(){
				//是否所有子框都被选中了？初始值为 真
				var isChecked = true;
				$(this).children('.chked').css({'background-position':'-21px 0'});
				//拿到所有跟当前类名相同的子框，进行遍历
				$("."+this.className).each(function(){
					//只要有一个子框是未选中状态，那就让isChecked为假
					if(!$(this).children().children('.ckd').prop("checked")){
						isChecked = false;
						$(this).children('.chked').css({'background-position':'0 0'});
						}
				})
				//遍历完毕，判断isChecked,为真则说明所以子框都被选中，那就选中全选框
				if(isChecked){
					$("[name='"+this.className+"']").children().children('.sltAll').prop("checked","tl");
					$('.chd').css({'background-position':'0 0'});
				}else{
					//否则就让全选框处于未选中状态
					$("[name='"+this.className+"']").children().children('.sltAll').removeProp("checked");	
					$('.chd').css({'background-position':'-21px 0'});
				}
			})
			
			
		})	