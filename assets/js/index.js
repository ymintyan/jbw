$(document).ready(function(){

	$("#close_top_panel").click(function(){
		$(".helper").fadeOut('slow');
	});

	var price1 = 10.99;
	var data = {};

	$("#select_level").change(function(){
		var value = $(this).val();
		switch (value) {
			case 'hardcore':
			price1 = 10.99;
			break;
			case 'medium':
			price1 = 8.65;
			break;
			case 'light':
			price1 = 4.57;
			break;
		}
		var number_value = +$("#number").val();
		var price = price1*number_value;
		$("#price span").text(price.toFixed(2));
	});

	
	$(".plus_btn").click(function(){
		var number_value = +$("#number").val();
		if(number_value >= 99) return;
		$("#number").val(++number_value);
		var price = price1*number_value;
		$("#price span").text(price.toFixed(2));
	});

	$(".minus_btn").click(function(){
		var number_value = +$("#number").val();
		if(number_value <= 1) return;
		$("#number").val(--number_value);
		var price = price1*number_value;
		$("#price span").text(price.toFixed(2));
	});

	$("#pop").click(function(e){
		e.preventDefault();
		var number_value = +$("#number").val();
		var price = price1*number_value;
		data.level = $("#select_level").val();
		data.quantity = number_value;
		data.price = price;
		$(".popup").fadeIn();
	});


	var myModal = document.getElementById('user_form');
	
	$(window).click(function(e) {
	    if (e.target == myModal) {
	        $(myModal).fadeOut();
	    }
	});

	$(".close").click(function() {
	    $(myModal).fadeOut();
	});		

	$(".open_list").click(function(){
		$(".selected_country ul").slideToggle();
	});

	$(".selected_country ul li").click(function(){
		$("#phone").val($(this).data('code'));
		$(".selected_country p:first-child").replaceWith('<p class="'+$(this).data('country')+'">');
		$(".selected_country ul").slideToggle();
	});

	function validateEmail(email) {
	    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	    return re.test(String(email).toLowerCase());
	}

	$(".continue").click(function(e){
		e.preventDefault();
		var re_name = /^[а-яА-я0-9\W_]{3,}$/;
		var re_phone = /^\+[0-9]{12,}$/;
		var name = $("#name").val();
		var email = $("#email").val();
		var phone = $("#phone").val();

		if(!validateEmail(email) || !re_name.test(name) || !re_phone.test(phone)) {
			alert('Проверьте ввод!\n·минимум 3 символа в поле Name(только кириллица+символы)\n·валидно заполнено поле Email\n·в поле Your phone минимум 10 цифр(с кодом страны минимум 12 цифр)');
			return;
		}
		else {
			data.name = name;
			data.email = email;
			data.phone = phone;
			$(".popup").fadeOut();
			$(".congrats").fadeIn();
			console.log(JSON.stringify(data));
		}
	});

	$(".close_congrats").click(function() {
	    $(".congrats").fadeOut();
	});

	var location = window.location.href;

	$("#ok").click(function(e){
		e.preventDefault();
		window.location.href = location;
	});
});
