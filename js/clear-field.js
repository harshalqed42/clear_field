(function ($, Drupal, drupalSettings) {
    'use strict';
    Drupal.behaviors.clear_field = {
      attach: function (context, settings) {
        var form_text_class = drupalSettings.clear_field.form_text_class;
        var span_class = drupalSettings.clear_field.span_class;
        var classes = '';
          $.map( form_text_class, function(value, index ) {
              if (form_text_class.length && (form_text_class.length - 1) == index) {
                    classes = classes + 'input.' + value;
              }
              if (form_text_class.length && (form_text_class.length - 1) != index) {
                    classes = classes + 'input.' + value + ', ';
              }
          });
          $(classes, context).once(classes).each(function () {
            if ($(this).val()) {
                var parent = $(this).parent();
                parent.append(drupalSettings.clear_field.close_button);
              //clearRemove();
            }
          });

          $(document).on('click', '.' + span_class, function(e) {
            e.preventDefault();
            var parent = $(this).parent().find('input');
            parent.val('');
            $(this).remove();
          });
          $(classes).change(function() {
            var span_element = $(this).parent().find('span');
            if ($(this).val() && !span_element.hasClass(span_class)) {
              // clearRemove();
                var parent = $(this).parent();
                parent.append(drupalSettings.clear_field.close_button);
            }
          });
          $(document).on('keyup', '.'+ classes, function(e) {
            var input_element = $(this).parent().find('input');
            var span_element = $(this).parent().find('span');
            if (!input_element.val()){
              span_element.remove();
            }
          });
      }
    };

    function clearRemove() {
        var parent = $(this).parent();
        parent.append(drupalSettings.clear_field.close_button);
    }

})(jQuery, Drupal, drupalSettings);
