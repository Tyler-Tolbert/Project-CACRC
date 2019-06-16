let $headingSub = $('.heading-sub');

setTimeout(function () {
        $headingSub.addClass('js-show fadeIn animated');
    },
    100
);


let $firstSection = $('.first-section');

setTimeout(function () {
        $firstSection.addClass('js-show fadeInUp animated');
    },
    500
);

let $storeInfo = $('.store-info');

$storeInfo.waypoint(function () {
    $storeInfo.addClass('js-show fadeInUp animated');
}, {
    offset: '90%'
});


let $thumbsUp = $('.fa-thumbs-up');
let $thumbsDown = $('.fa-thumbs-down');

$thumbsUp.waypoint(function () {
    $thumbsUp.addClass('js-show bounce animated');
}, {
    offset: '60%'
});

$thumbsDown.waypoint(function () {
    $thumbsDown.addClass('js-show shake animated');
}, {
    offset: '60%'
});


let $qehs = $('.qehs');

$qehs.waypoint(function () {
    $qehs.addClass('js-show fadeInUp animated');
}, {
    offset: '70%'
});



let $sites = $('.sites');

$sites.waypoint(function () {
	$sites.addClass('js-show fadeInUp animated');
}, { offset: '90%'});