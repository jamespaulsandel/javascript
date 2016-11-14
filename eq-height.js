/**
 * Plugin to make all rows' height
 * equal, by applying max height to 
 * each child div's panel. 
 * 
 * expects bootstrap structure
 * 
 * .col-md-12 only contains one div, 
 * no change is made 
 * 
 * @param $ jQuery
 */
(function($) {
    $.fn.eqHeight = function() {
        $(this).height('auto');
        $(this).each(function(i, e) {
            var values = [];
            $(this).children('div').each(function(ii, ee) {
                if($(this).is('.col-md-12')) {
                    return true;
                }
                values[ii] = $(this).children('div').outerHeight();       
            });
            var highestCol = Math.max.apply(null, values);
            $(this).children('div').children('div').height(highestCol);
        });
    }
})(jQuery)
	
jQuery('.row').eqHeight();