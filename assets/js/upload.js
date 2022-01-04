$(document).ready(function(){

    $('#upload_btn').on('click', function(){
  
      var file_data = $('#gallery_photo_file').prop('files')[0];
      var form_data = new FormData();
      form_data.append('file', file_data);
      
  
      $.ajax({
        type: $(this).attr('method'),
        url: '/assets/js/photo_upload.php',
        dataType: 'text',
        contentType: false,
        processData: false,
          data: form_data,                         
          type: 'post',
          success: function(respond, php_script_response){
            var html = '';
            html += "<div class=\"col-lg-3 col-md-4\">" +
            "<div class=\"gallery-item\">"  +
              "<a href=\"assets/img/gallery/" + respond+ "\" class=\"gallery-lightbox\" data-gall=\"gallery-item\">"+
                "<img src=\"assets/img/gallery/" +respond+"\" alt=\"\" class=\"img-fluid\">" +
              "</a></div></div>";
              //$('#gallery_div').attr('src', form_data['path']);
              //alert(php_script_response);
              //alert(file_data);
        },
      });
    });
    
  });