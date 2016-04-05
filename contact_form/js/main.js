function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

// on form submit
$('form.contact-form').on('submit', function(){
    var $this = $(this);
    var url = $this.attr('action');
    var method = $this.attr('method');
    var data = {};
    
    // loop through each form element by 'name' attribute
    $this.find('[name]').each(function(index, value){
        var $this = $(this);
        var name = $this.attr('name');
        var value = $this.val();
        if(name == 'email'){ 
            // validate if email value is a real email address
            if( !validateEmail( value ) ){
                $this.focus();
                return false;
            } else {
               
                return data[name] = value;
            }
        }       
        // focus on each input if values are missing
        if(!value){
            $this.focus();
            return false;
        }
        data[name] = value;
    });

    $.ajax({
        url: url,
        type: method,
        data: data,
        dataType: 'json',
        success: function(response){
            console.log(response);
            $('#status').html(response); 
        }
    });    
    return false;
});