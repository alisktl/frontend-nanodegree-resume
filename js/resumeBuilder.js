// BIO object

var data = '%data%';
var $header = $('#header');

var bio = {
	'name': 'Alisher Karibzhanov',
	'role': 'Front-End Developer',
	'welcomeMessage': 'Hello, Udacity!',
	'contacts': {
		'mobile': '+77777538583',
		'email': 'alisktl@gmail.com',
		'github': 'alisktl',
		'twitter': '@alisktl',
		'location': 'Almaty, Kazakhstan'
	},
	'skills': [ 'Java', 'HTML', 'CSS', 'JavaScript'],
	'bioPic': 'images/ava.jpg'
};

// function for displaying BIO
bio.display = function () {
    var formattedName = HTMLheaderName.replace(data, bio.name),
        formattedRole = HTMLheaderRole.replace(data, bio.role),
        formattedPhoto = HTMLbioPic.replace(data, bio.bioPic),
        formattedMobile = HTMLmobile.replace(data, bio.contacts.mobile),
        formattedGithub = HTMLgithub.replace(data, '<a class=\'contacts-link\' href=\'' + bio.contacts.githublink + '\' target=\'_blank\'>' + bio.contacts.github + '</a>'),
        formattedEmail = HTMLemail.replace(data, '<a class=\'contacts-link\' href=\'mailto:' + bio.contacts.email + '\'>' + bio.contacts.email + '</a>'),
        formattedLocation = HTMLlocation.replace(data, bio.contacts.location),
        formattedSkill,
        skill,
        HTMLContacts;

    $header.append(formattedName);
    $header.append(formattedRole);
    // contacts
    $header.append(formattedPhoto);
    HTMLContacts = '<dl id=\'topContacts\'></dl>';
    $header.append(HTMLContacts);

    var $topContacts = $('#topContacts');
    $topContacts.append(formattedLocation);
    $topContacts.append(formattedGithub);
    $topContacts.append(formattedEmail);
    $topContacts.append(formattedMobile);

    $header.append(HTMLskillsStart);
    for(var i = 0; i < bio.skills.length; i++) {
		var formattedSkill = HTMLskills.replace(data, bio.skills[i]);
		$('#skills').append(formattedSkill);
	}

	// footer contacts
	$("#footerContacts").append(formattedLocation, formattedGithub, formattedMobile, formattedEmail);

	inName();
};

// education object
var education = {
	'schools': [
		{
			'name': 'Suleyman Demirel University',
			'location': 'Almaty',
			'degree': 'Bachelor\'s',
			'majors': ['CS'],
			'dates': '2009 - 2013',
			'url': 'http://sdu.edu.kz',
		}
	],
	'onlineCourses': [
		{
            'title': 'Intro to HTML and CSS',
            'school': 'Udacity',
            'dates': '2015',
            'url' : 'http://www.udacity.com'
        },
        {
            'title': 'JavaScript basics',
            'school': 'Udacity',
            'dates': '2015',
            'url' : 'http://www.udacity.com'
        },
        {
            'title': 'Front-end developer nanodegree',
            'school': 'Udacity',
            'dates': '2015',
            'url' : 'http://www.udacity.com'
        }
	]
};

// function for displaying education
education.display = function () {
    var formattedHtml, edu;
    if (education.schools.length > 0 || education.onlineCourses.length > 0) {
        $('#education').append('<div id=\'education-foldable-content\'></div>');
        for (var i = 0; i < education.schools.length; i++) {
        	var school = education.schools[i];
            if (education.schools.hasOwnProperty(i)) {
                $('#education-foldable-content').append(HTMLschoolStart);
                formattedHtml = HTMLschoolName.replace(data, school.name);

                var formattedSchoolHtml = HTMLschoolDates.replace(data, school.dates) +
                	formattedHtml +
                	HTMLschoolLocation.replace(data, school.location) +
                	HTMLschoolDegree.replace(data, school.degree) +
                	HTMLschoolMajor.replace(data, school.majors);

                $('.education-entry:last').append(formattedSchoolHtml);
            }
        }
        $('.education-entry:last').append(HTMLonlineClasses);
        for (var i = 0; i < education.onlineCourses.length; i++) {
        	var onlineCourse = education.onlineCourses[i];
            if (education.onlineCourses.hasOwnProperty(i)) {
                formattedHtml = HTMLonlineTitle.replace(data, onlineCourse.title);

                $('.education-entry:last').append(formattedHtml, HTMLonlineSchool.replace(data, onlineCourse.school), HTMLonlineDates.replace(data, onlineCourse.dates));
            }
        }
    }
};

// work object
var work = {
	'jobs': [
		{
			'employer': 'Metaphor',
			'title': 'Metaphor',
			'location': 'Almaty',
			'dates': '01.05.2013 - 01.07.2015',
			'description': 'Metaphor'
		},
		{
			'employer': 'Freedom Finance',
			'title': 'Freedom Finance',
			'location': 'Almaty',
			'dates': '01.08.2015 - Current',
			'description': 'Freedom finance'
		}
	]
};

// function for displaying jobs
work.display = function() {
	for(var i = 0; i < work.jobs.length; i++) {
		var job = work.jobs[i];

		$('#workExperience').append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace(data, job.employer);
		var formattedWorkTitle = HTMLworkTitle.replace(data, job.title);
		var formattedWorkLocation = HTMLworkLocation.replace(data, job.location);
		var formattedWorkDates = HTMLworkDates.replace(data, job.dates);
		var formattedWorkDescription = HTMLworkDescription.replace(data, job.description);

		var formattedHtml = formattedEmployer +
			formattedWorkTitle +
			formattedWorkLocation +
			formattedWorkDates +
			formattedWorkDescription;

		// '.work-entry:last' is used for appending only to the last element with class 'work-entry'
		$('.work-entry:last').append(formattedHtml);
	}
}

// project object
var projects = {
	'projects': [
		{
			'title': 'CRM System',
			'dates': ['12.12.2014 - Current'],
			'description': 'CRM System',
			'images': ['images/project.jpg', 'images/project.jpg']
		}
	]
};

// function for displaying projects
projects.display = function() {
	for(var i = 0; i < projects.projects.length; i++) {
		var project = projects.projects[i];

		$('#projects').append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace(data, project.title);
		var formattedDates = HTMLprojectDates.replace(data, project.dates);
		var formattedDescription = HTMLprojectDescription.replace(data, project.description);

		$('.project-entry:last').append(formattedTitle, formattedDates, formattedDescription);

		if(project.images.length > 0) {
			var images = project.images;
			for(var j = 0; j < images.length; j++) {
				var image = images[j];
				var formattedImage = HTMLprojectImage.replace(data, image);
				$('.project-entry:last').append(formattedImage);
			}
		}
	}
}

// click listener
$(document).click(function(loc){
	var x = loc.pageX;
	var y = loc.pageY;

	logClicks(x, y);
});

// Internationalizes the name
function inName() {
	var name = bio.name.trim().split(' ');
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();

	return name[0] + ' ' + name[1];
}

bio.display();
education.display();
work.display();
projects.display();

$('#main').append(internationalizeButton);
$('#mapDiv').append(googleMap);