

$(function() {
	$('.navbar-nav li').click(function(event) {
		$('.navbar-nav li').removeClass('active');
		$(this).addClass('active');
		var menu = $(this).find('a').html();
		// var s = '<li id="menu">'+ menu + '<a href="#"></a></li>'
		// $(s).insertAfter($('#home'));
		if (menu != 'Home') {
			$('#menu').html(menu).fadeIn();
		}
		return false;
	});
	
	$('.myhome').click(function(){
		$('#main-content').fadeIn();
		$('#sub-content').hide();
	});

	$('.sell').click(function() {
		// $('#myCarousel').hide();
		$('#sub-content').load('index.html', function() {
			$(this).fadeIn();
		});
		$('#main-content').hide();
		$('#menu').html('전체판매').fadeIn();
		return false;
	});

	$('.question').click(function() {
		$('#sub-content').empty().load('main.html', function() {
			$(this).fadeIn();
		});
		$('#main-content').hide();
		return false;
	});
	$('#go-write').click(function() {
		$('#sub-content').empty().load('write.html', function() {
			$(this).fadeIn();
		});
		return false;
	});

	$('#gogogo').click(function(event) {
		$.ajax({
			url : 'server.jsp',
			type : 'post',
			dataType : 'json',
			data : $('.written').serialize(),
			success : successHandler
		});
		return false;
	});

	function successHandler(data) {
		$('#my-bordd').empty();
		$.each(data, function(index, question) {
			
			var num = $('.my-num').length;
			var now = new Date();
			var year = now.getFullYear();
			var month = now.getMonth();
			var day = now.getDay();
			var time = year + '.' + month + '.' + day;
			var num = $('.my-num').length;
			//entry에 배열의 첫번째.. 두번쨰..쭉  데이터가 들어온다
			var html = '<tr><td class="my-num">';
			html += num+1;
			html += '</td><td>';
			html += question.mywriter;
			html += '</td><td>'
			html += question.mytitle;
			html += '</td><td>';
			html += time;
			html += '</td></tr>';

			$('#my-bordd').prepend(html);
		});
	}

	$('#myjoin').click(function() {
//		$(this).effect("shake");
		$('#main-content').hide();
		$('#sub-content').empty().load('join.html', function() {
			$(this).fadeIn();
		});
		return false;
	});

	$('#mylogin').click(function() {
//		$(this).effect("shake");
		$('#main-content').hide();
		$('#sub-content').empty().load('login.html', function() {
			$(this).fadeIn();
		});
		return false;
	});

});