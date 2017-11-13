$(function(){
	$('.ick').click(function(){
		if($("input[type='checkbox']").prop('checked')){
			$('.chked').css({'background-position':'-33px 0'});
		}else{
			$('.chked').css({'background-position':'0 0'});
	}

	});
})