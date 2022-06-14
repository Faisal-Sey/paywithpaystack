/*
 * Change Navbar color while scrolling
*/

$(window).scroll(function(){
	handleTopNavAnimation();
});

$(window).load(function(){
	handleTopNavAnimation();
});

function handleTopNavAnimation() {
	var top=$(window).scrollTop();

	if(top>10){
		$('#site-nav').addClass('navbar-solid'); 
	}
	else{
		$('#site-nav').removeClass('navbar-solid'); 
	}
}

/*
 * Lgin Form
*/

$('#login_form').submit(function(e){
    e.preventDefault();
    
    var postForm = { //Fetch form data
            'username'     : $('#login_form #username').val(),
            'password'     : $('#login_form #password').val(),
    };

    $.ajax({
            type      : 'POST',
            url       : 'http://localhost:3000/login',
            data      : postForm,
            dataType  : 'json',
            success   : function(data) {
                            if (data.success) {
                                alert("success")
                            }
                            else
                            {
                                alert("failed")
                            }
                        }
        });
});

/*
 * SmoothScroll
*/

smoothScroll.init();