$('.port-item').click(function () {
    $('.collapse').collapse('hide');
});

/////////////////////////////////////////////////


let $heading = $('.heading-1');
let $p = $('.heading-2');
let $bottomLine = $('.bottomLine');


setTimeout(function () {
    $heading.addClass('js-show fadeInUp animated');},
           100
);

setTimeout(function () {
    $p.addClass('js-show fadeIn animated');},
           1100
);

setTimeout(function () {
    $bottomLine.addClass('js-show fadeInUp animated');},
           100
);


let $r2 = $('.section-a');

$r2.waypoint(function () {
	$r2.addClass('js-show fadeInUp animated');
}, { offset: '90%'});


let $icon1 = $('.icon-1');
let $icon2 = $('.icon-2');
let $icon3 = $('.icon-3');

$icon1.waypoint(function () {
	$icon1.addClass('js-show fadeInLeftBig animated');
}, { offset: '90%'});

$icon2.waypoint(function () {
	$icon2.addClass('js-show fadeInUp animated');
}, { offset: '90%'});

$icon3.waypoint(function () {
	$icon3.addClass('js-show fadeInRightBig animated');
}, { offset: '90%'});


let $dataInfo = $('.data-info');
let $dataPic = $('.data-pic');
let $dataInfo2 = $('.data-info-2');

$dataInfo.waypoint(function () {
	$dataInfo.addClass('js-show fadeInLeftBig animated');
}, { offset: '90%'});

$dataPic.waypoint(function () {
	$dataPic.addClass('js-show fadeInRightBig animated');
}, { offset: '90%'});

$dataInfo2.waypoint(function () {
	$dataInfo2.addClass('js-show fadeInUp animated');
}, { offset: '90%'});


let $mapTitle = $('.map-title');
let $map = $('.map')

$mapTitle.waypoint(function () {
	$mapTitle.addClass('js-show fadeInDown animated');
}, { offset: '90%'});

$map.waypoint(function () {
	$map.addClass('js-show fadeIn animated');
}, { offset: '60%'});

let $newsLetter = $('.news-letter');

$newsLetter.waypoint(function () {
	$newsLetter.addClass('js-show fadeInUp animated');
}, { offset: '90%'});


let $sites = $('.sites');

$sites.waypoint(function () {
	$sites.addClass('js-show fadeInUp animated');
}, { offset: '90%'});







