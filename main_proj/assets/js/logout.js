$(function(){
    $('#book_form').on('submit', function(e){
      e.preventDefault();
      
      $.ajax({
        url: logout.php,
        type: $that.attr('method'),
        contentType: false,
        processData: false,
        data: formData,
        dataType: 'json',
        success: function(json){
          if(json){
            $that.replaceWith(json);
          }
        }
      });
    });
  });