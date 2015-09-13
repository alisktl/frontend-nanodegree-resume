// BIO object
var bio = {
	"name": "Alisher Karibzhanov",
	"role": "Front-End Developer",
	"welcomeMessage": "Hello, Udacity!",
	"contacts": {
		"mobile": "+77777538583",
		"email": "alisktl@gmail.com",
		"github": "alisktl",
		"twitter": "@alisktl",
		"location": "Almaty, Kazakhstan"
	},
	"skills": [ "Java", "HTML", "CSS", "JavaScript"],
	"bioPic": "../images/ava.jpg"
};

// function for displaying BIO
bio.display = function () {
    var formattedName = HTMLheaderName.replace("%data%", bio.name),
        formattedRole = HTMLheaderRole.replace("%data%", bio.role),
        formattedPhoto = HTMLbioPic.replace("%data%", bio.bioPic),
        formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile),
        formattedGithub = HTMLgithub.replace("%data%", "<a class=\"contacts-link\" href=\"" + bio.contacts.githublink + "\" target=\"_blank\">" + bio.contacts.github + "</a>"),
        formattedEmail = HTMLemail.replace("%data%", "<a class=\"contacts-link\" href=\"mailto:" + bio.contacts.email + "\">" + bio.contacts.email + "</a>"),
        formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location),
        formattedSkill,
        skill,
        HTMLContacts;

    $("#header").append(formattedName);
    $("#header").append(formattedRole);
    // contacts
    $("#header").append(formattedPhoto);
    HTMLContacts = '<dl id="topContacts"></dl>';
    $("#header").append(HTMLContacts);
    $("#topContacts").append(formattedLocation);
    $("#topContacts").append(formattedGithub);
    $("#topContacts").append(formattedEmail);
    $("#topContacts").append(formattedMobile);

    $("#header").append(HTMLskillsStart);
    for(var i = 0; i < bio.skills.length; i++) {
		var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
		$("#skills").append(formattedSkill);
	}

	inName();
};

// education object
var education = {
	"schools": [
		{
			"name": "Suleyman Demirel University",
			"city": "Almaty",
			"degree": "Bachelor's",
			"majors": ["CS"],
			"dates": "2009 - 2013",
			"url": "http://sdu.edu.kz",
		}
	],
	"onlineCourses": [
		{
            "title": "Intro to HTML and CSS",
            "school": "Udacity",
            "dates": "2015",
            "url" : "http://www.udacity.com"
        },
        {
            "title": "JavaScript basics",
            "school": "Udacity",
            "dates": "2015",
            "url" : "http://www.udacity.com"
        },
        {
            "title": "Front-end developer nanodegree",
            "school": "Udacity",
            "dates": "2015",
            "url" : "http://www.udacity.com"
        }
	]
};

// function for displaying education
education.display = function () {
    var formattedHtml, edu;
    if (education.schools.length > 0 || education.onlineCourses.length > 0) {
        $("#education").append("<div id=\"education-foldable-content\"></div>");
        for (edu in education.schools) {
            if (education.schools.hasOwnProperty(edu)) {
                $("#education-foldable-content").append(HTMLschoolStart);
                formattedHtml = HTMLschoolName.replace("%data%", education.schools[edu].name);
                $(".education-entry:last").append(HTMLschoolDates.replace("%data%", education.schools[edu].dates));
                $(".education-entry:last").append(formattedHtml);
                $(".education-entry:last").append(HTMLschoolLocation.replace("%data%", education.schools[edu].city));
                $(".education-entry:last").append(HTMLschoolDegree.replace("%data%", education.schools[edu].degree));
                $(".education-entry:last").append(HTMLschoolMajor.replace("%data%", education.schools[edu].majors));
            }
        }
        $(".education-entry:last").append(HTMLonlineClasses);
        for (edu in education.onlineCourses) {
            if (education.onlineCourses.hasOwnProperty(edu)) {
                formattedHtml = HTMLonlineTitle.replace("%data%", education.onlineCourses[edu].title);
                $(".education-entry:last").append(formattedHtml);
                $(".education-entry:last").append(HTMLonlineSchool.replace('%data%', education.onlineCourses[edu].school));
                $(".education-entry:last").append(HTMLonlineDates.replace('%data%', education.onlineCourses[edu].dates));
            }
        }
    }
};

// work object
var work = {
	"jobs": [
		{
			"employer": "Metaphor",
			"title": "Metaphor",
			"location": "Almaty",
			"dates": "01.05.2013 - 01.07.2015",
			"description": "Metaphor"
		},
		{
			"employer": "Freedom Finance",
			"title": "Freedom Finance",
			"location": "Almaty",
			"dates": "01.08.2015 - Current",
			"description": "Freedom finance"
		}
	]
};

// function for displaying jobs
work.display = function() {

	for(job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);

		// ".work-entry:last" is used for appending only to the last element with class "work-entry"
		$(".work-entry:last").append(formattedEmployer);
		$(".work-entry:last").append(formattedWorkTitle);
		$(".work-entry:last").append(formattedWorkLocation);
		$(".work-entry:last").append(formattedWorkDates);
		$(".work-entry:last").append(formattedWorkDescription);
	}
}

// project object
var projects = {
	"projects": [
		{
			"title": "CRM System",
			"dates": ["12.12.2014 - Current"],
			"description": "CRM System",
			"images": ["../images/project.jpg", "../images/project.jpg"]
		}
	]
};

// function for displaying projects
projects.display = function() {
	for(project in projects.projects) {
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);

		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);

		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);

		if(projects.projects[project].images.length > 0) {
			for(image in projects.projects[project].images) {
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
				$(".project-entry:last").append(formattedImage);
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
	var name = bio.name.trim().split(" ");
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();

	return name[0] + " " + name[1];
}

bio.display();
education.display();
work.display();
projects.display();

$("#main").append(internationalizeButton);
$("#mapDiv").append(googleMap);