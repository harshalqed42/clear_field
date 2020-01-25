(function ($, Drupal, drupalSettings) {
    'use strict';
    Drupal.behaviors.clear_field = {
      attach: function (context, settings) {
        var form_text_class = drupalSettings.clear_field.form_text_class;
        var span_class = '.'+ drupalSettings.clear_field.span_class;
        var classes = '';
          $.map( form_text_class, function(value, index ) {
              if (form_text_class.length && (form_text_class.length - 1) == index) {
                    classes = classes + 'input.' + value;
              }
              if (form_text_class.length && (form_text_class.length - 1) != index) {
                    classes = classes + 'input.' + value + ', ';
              }
          });
          $(classes, context).each(function () {
                  if ($(this).val()) {
                      var parent = $(this).parent();
                      parent.append(drupalSettings.clear_field.close_button);
                  }
          });
          $(document).on('click', span_class, function(e) {
            e.preventDefault();
            var parent = $(this).parent().find('input');
            parent.val('');
            $(this).remove();
          });



          $(classes).change(function() {
              var parent = $(this).parent();
                if ($(this).val() && !$(this).parent().find('span').length){
                  parent.append(drupalSettings.clear_field.close_button);
                }
                else {
                  if (!$(this).val()) {
                    var parent = $(this).parent().find('input');
                    parent.val('');
                    parent.find('span').remove();
                  }
                }
          });
      }
    };

    function clearRemove() {
    }

})(jQuery, Drupal, drupalSettings);
