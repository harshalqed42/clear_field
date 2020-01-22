(function ($, Drupal, drupalSettings) {
    'use strict';
    Drupal.behaviors.clear_field = {
        attach: function (context, settings) {
            var form_text_class = drupalSettings.clear_field.form_text_class;
            var span_class = drupalSettings.clear_field.span_class;
            $('input.'+form_text_class, context).once(form_text_class).each(function () {
                if ($(this).val()) {
                  var parent = $(this).parent();
                  parent.append(drupalSettings.clear_field.close_button);
                }
            });
            $(document).on('click', '.'+span_class, function(e) {
                e.preventDefault();
                var parent = $(this).parent().find('input');
                parent.val('');
                $(this).remove();
            });
            $(document).on('keyup', '.'+form_text_class, function(e) {
                var input_element = $(this).parent().find('input');
                var span_element = $(this).parent().find('span');
                if (!input_element.val()){
                    span_element.remove();
                }
            });
            $('.'+ form_text_class).change(function(){
                var span_element = $(this).parent().find('span');
                if ($(this).val() && !span_element.hasClass(span_class)) {
                    var parent = $(this).parent();
                    parent.append(drupalSettings.clear_field.close_button);
                }
            });


        }
    };
    function clearRemove(span_class) {
       // console.log(parent);
       // parent.append('<span class="'+span_class+'" ><a class="close" href="#" >ENTERS</a></span>');
    }

})(jQuery, Drupal, drupalSettings);
