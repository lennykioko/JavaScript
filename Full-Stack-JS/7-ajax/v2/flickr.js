$(document).ready( function() {
    $('form').submit(function(evt) {
        evt.preventDefault();
		var $searchField = $('#search');
		var $submitButton = $('#submit');

		$searchField.prop('disabled', true);
		$submitButton.attr('disabled', true).text('Searching.....');

        var flickrAPI = "https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
        var searchItem = $(this).text();
        var flickrOptions = {
            tags: searchItem,
            format: "json"
        };
        function displayPhotos(data) {
            var photoHTML = '<ul>';
			$.each(data.items, function (i, photo) {
				photoHTML += '<li class="grid-25 tablet-grid-50">';
				photoHTML += '<a href="' + photo.link + '" class="image">';
				photoHTML += '<img src="' + photo.media.m + '"></a></li>';
			});
			photoHTML += '</ul>';
			$('#photos').html(photoHTML);
            $searchField.prop('disabled', false);
            $submitButton.attr('disabled', false).text('Search');
        }
        $.getJSON(flickrAPI, flickrOptions, displayPhotos);
    }); // end submit
}); // end ready