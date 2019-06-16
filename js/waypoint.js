var $showcase = $('#showcase .col');

var $A = $('#section-a .content-wrap');
var $Bpic = $('#section-b .p2');
var $Btext = $('#section-b .content-title');
var $C = $('#section-c .content-wrap');
var $D = $('#section-d .content-wrap');
var $Epic = $('#section-e .p9');
var $Ewrap = $('#section-e .wrapper, #section-e .wrapper-2');
var $F = $('#section-f .content-wrap');
var $G = $('#section-g .content-wrap');
var $Gpic = $('#section-g .p13');


// The waypoints

setTimeout(function () {
    $showcaseTitle.show().addClass('js-show fadeIn animated');}, 1000
);

$showcase.waypoint(function () {
	$showcase.addClass('js-show fadeInRightBig animated');
}, { offset: '60%'});

$A.waypoint(function () {
	$A.addClass('js-show fadeInUp animated');
}, {offset: '60%'});

$Bpic.waypoint(function () {
	$Bpic.addClass('js-show fadeInUp animated');
}, {offset: '60%'});

$Btext.waypoint(function () {
	$Btext.addClass('js-show fadeInLeft animated');
}, {offset: '90%'});

$C.waypoint(function () {
	$C.addClass('js-show fadeInUp animated');
}, {offset: '50%'});

$D.waypoint(function () {
	$D.addClass('js-show fadeInUp animated');
}, {offset: '50%'});

$Epic.waypoint(function () {
	$Epic.addClass('js-show fadeInUp animated');
}, {offset: '45%'});

$Ewrap.waypoint(function () {
	$Ewrap.addClass('js-show fadeInRight animated');
}, {offset: '60%'});

$F.waypoint(function () {
	$F.addClass('js-show fadeInUp animated');
}, {offset: '50%'});

$G.waypoint(function () {
	$G.addClass('js-show fadeInLeft animated');
}, {offset: '60%'});

$Gpic.waypoint(function () {
	$Gpic.addClass('js-show fadeInRight animated');
}, {offset: '60%'});










