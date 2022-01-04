$(function(){
    $('#book_form').on('submit', function(e){
      e.preventDefault();
      var $that = $(this),
      formData = new FormData($that.get(0));
      formData.append('date_upl', new Date()); 
      $.ajax({
        url: book-a-table.php,
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