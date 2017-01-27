var constInit = function (c) {
    var constInitDeref = new jQuery.Deferred();

    // Set defaults
    c.scriptName = GM_info.script.name;
    c.scriptVersion = GM_info.script.version;
    c.scriptNameConfig = "GC little helper Config II";
    c.scriptNameSync = "GC little helper Sync II";
    c.scriptShortNameConfig = "GClh Config II";
    c.scriptShortNameSync = "GClh Sync II";
    c.anzCustom = 10;
    c.anzTemplates = 10;
    c.bookmarks_def = new Array(16, 18, 14, 17, 32, 35);
    c.defaultConfigLink = "https://www.geocaching.com/my/default.aspx#GClhShowConfig";
    c.defaultSyncLink = "https://www.geocaching.com/my/default.aspx#GClhShowSync";

    // define bookmarks
    // New Bookmarks under custom_Bookmarks ..
    c.bookmarks = new Array();
    // WICHTIG: Die Reihenfolge darf hier auf keinen Fall geändert werden, weil dadurch eine falsche Zuordnung zu den 
    //          gespeicherten Userdaten erfolgen würde! Weiter unten gibt es noch einen Bereich mit Bookmarks, die quasi
    //          noch hinten dran gehängt werden.
    bookmark("Watchlist", "https://www.geocaching.com/my/watchlist.aspx", c.bookmarks);
    bookmark("Logs Geocaches", "https://www.geocaching.com/my/geocaches.aspx", c.bookmarks);
    bookmark("Own Geocaches", "https://www.geocaching.com/my/owned.aspx", c.bookmarks);
    bookmark("Logs Trackables", "https://www.geocaching.com/my/travelbugs.aspx", c.bookmarks);
    bookmark("Trackables Inventory", "https://www.geocaching.com/my/inventory.aspx", c.bookmarks);
    bookmark("Trackables Collection", "https://www.geocaching.com/my/collection.aspx", c.bookmarks);
    bookmark("Logs Benchmarks", "https://www.geocaching.com/my/benchmarks.aspx", c.bookmarks);
    bookmark("Member Features", "https://www.geocaching.com/my/subscription.aspx", c.bookmarks);
    bookmark("Friends", "https://www.geocaching.com/my/myfriends.aspx", c.bookmarks);
    bookmark("Account Details", "https://www.geocaching.com/account/default.aspx", c.bookmarks);
    bookmark("Public Profile", "https://www.geocaching.com/profile/", c.bookmarks);
    bookmark("Search GC (old adv.)", "https://www.geocaching.com/seek/nearest.aspx", c.bookmarks);
    bookmark("Routes", "https://www.geocaching.com/my/userroutes.aspx#find", c.bookmarks);
    bookmark("Field Notes Upload", "https://www.geocaching.com/my/uploadfieldnotes.aspx", c.bookmarks);
    bookmark("Pocket Queries", "https://www.geocaching.com/pocket/default.aspx", c.bookmarks);
    bookmark("Pocket Queries Saved", "https://www.geocaching.com/pocket/default.aspx#DownloadablePQs", c.bookmarks);
    bookmark("Bookmarks", "https://www.geocaching.com/bookmarks/default.aspx", c.bookmarks);
    bookmark("Notifications", "https://www.geocaching.com/notify/default.aspx", c.bookmarks);
    profileSpecialBookmark("Find Player", "#GClhShowFindPlayer", "lnk_findplayer", c.bookmarks);
    bookmark("E-Mail", "https://www.geocaching.com/email/default.aspx", c.bookmarks);
    bookmark("Statbar", "https://www.geocaching.com/my/statbar.aspx", c.bookmarks);
    bookmark("Guidelines", "https://www.geocaching.com/about/guidelines.aspx", c.bookmarks);
    profileSpecialBookmark(c.scriptShortNameConfig, "https://www.geocaching.com/my/default.aspx#GClhShowConfig", "lnk_gclhconfig", c.bookmarks);
    externalBookmark("Forum", "http://forums.groundspeak.com/", c.bookmarks);
    externalBookmark("Blog", "https://www.geocaching.com/blog/", c.bookmarks);
    bookmark("Feedback", "https://www.geocaching.com/feedback/", c.bookmarks);
    externalBookmark("Geoclub", "http://www.geoclub.de/", c.bookmarks);
    profileSpecialBookmark("Public Profile Geocaches", "https://www.geocaching.com/profile/default.aspx?#gclhpb#ctl00$ContentBody$ProfilePanel1$lnkUserStats", "lnk_profilegeocaches", c.bookmarks);
    profileSpecialBookmark("Public Profile Trackables", "https://www.geocaching.com/profile/default.aspx?#gclhpb#ctl00$ContentBody$ProfilePanel1$lnkCollectibles", "lnk_profiletrackables", c.bookmarks);
    profileSpecialBookmark("Public Profile Gallery", "https://www.geocaching.com/profile/default.aspx?#gclhpb#ctl00$ContentBody$ProfilePanel1$lnkGallery", "lnk_profilegallery", c.bookmarks);
    profileSpecialBookmark("Public Profile Lists", "https://www.geocaching.com/profile/default.aspx?#gclhpb#ctl00$ContentBody$ProfilePanel1$lnkLists", "lnk_profilebookmarks", c.bookmarks);
    bookmark("Profile", "https://www.geocaching.com/my/", c.bookmarks);
    profileSpecialBookmark("Nearest List", "https://www.geocaching.com/seek/nearest.aspx?#gclhpb#errhomecoord", "lnk_nearestlist", c.bookmarks);
    profileSpecialBookmark("Nearest Map", "https://www.geocaching.com/seek/nearest.aspx?#gclhpb#errhomecoord", "lnk_nearestmap", c.bookmarks);
    profileSpecialBookmark("Nearest List (w/o Founds)", "https://www.geocaching.com/seek/nearest.aspx?#gclhpb#errhomecoord", "lnk_nearestlist_wo", c.bookmarks);
    profileSpecialBookmark("Own Trackables", "https://www.geocaching.com/track/search.aspx?#gclhpb#errowntrackables", "lnk_my_trackables", c.bookmarks);

    c.langus =      new Array("Català", "Čeština", "Dansk", "Deutsch", "English", "Ελληνικά", "Eesti", "Español", "Français", "Italiano", "日本語", "한국어", "Latviešu", "Lëtzebuergesch", "Magyar", "Nederlands", "Norsk, Bokmål", "Polski", "Português", "Română", "Русский", "Slovenščina", "Suomi", "Svenska");
    c.langus_code = new Array("ca",     "cs",      "da",    "de",      "en",      "el",       "et",    "es",      "fr",       "it",       "ja",     "ko",    "lv",       "lb",             "hu",     "nl",         "nb",            "pl",     "pt",        "ro",     "ru",      "sl",          "fi",    "sv"     );
    c.langus_flag_url = "https://raw.githubusercontent.com/2Abendsegler/GClh/master/images/flag_##.png";

    c.gclhConfigKeysIgnoreForBackup = {
        "token": true,
        "settings_configsync_configid": true,
        "doPostBack_after_redirect": true,
        "dbToken": true,
        "hide_contribute": true
    };
    c.global_log_it_icon = "data:image/png;base64,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";
    c.global_mail_icon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAKCAYAAAC9vt6cAAAAAXNSR0IArs4c6QAAAAZiS0dEAP8A/wD/oL2nkwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAd0SU1FB9oHHg0gKjtwF3IAAAAZdEVYdENvbW1lbnQAQ3JlYXRlZCB3aXRoIEdJTVBXgQ4XAAABdElEQVQoz4WRMaviUBSEv5s8H8RO0Eq00SiCRMQigoiCYC2I/hhbwd8g1lpZWFioECwl2IqIwT5iGdDCK94tlhf27cK+gWmGYZg5R9i2rUzTpFAooOs6AEIINE1DCPEPv/T3+81yuURMJhNlmiYAtVqNSCTCT7her6zXa6SUaFJKms0m8XicxWLB5XIJjUqpkAD3+53tdovruvT7faSUfHyZi8UiyWQSx3HwfZ96vY4QIgy73W5sNhssy6LRaIRztT+rxWIxer0eUkpms1moe57HfD6n0+lQKpXQdT1s9fH3PqUUmUwG13UZjUaUy2V2ux2WZRGNRlFKfWv2LSAIAlzXJQgCBoMBz+eTw+HAcDjE8zym0ynVapVsNhtOCAOOxyOn04l8Pk+73Qbg8/OTSqWCUopcLkcikWC/33M+n2m1Wr9fPh6PVTqdxjAMbNvGMIwf3+j7Po7j8Hg8EJZlqW63SyqVQtO08Dj/gxCC1+vFarXiF7aOl1qte6kYAAAAAElFTkSuQmCC";
    c.global_gc_icon = "data:image/png;base64,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";
    c.global_message_icon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAKCAMAAABsSeXqAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAq1BMVEX/AAAuLi43NzdERERTU1NcXFyBgYGFhYWIiIiJiYmLi4uMjIyNjY2Ojo6Pj4+QkJCRkZGSkpKTk5OUlJSVlZWYmJiampqcnJyenp6fn5+goKCioqKkpKSpqamqqqqrq6uvr6+xsbG2tra4uLi9vb2/v7/CwsLMzMzQ0NDT09PU1NTZ2dnb29vn5+fp6enu7u7x8fHy8vL09PT19fX29vb6+vr8/Pz+/v7///+lQzgqAAAAAXRSTlMAQObYZgAAAIxJREFUCB01wQcSgjAQBdC1Y28LCrGGIoIKomb//U9mJjO8R053MPK88WQ6my+W682qR06Qpj+0nmFADuN+fAAigia5fJiskhmoThmsl8oNmByGlRyAcvsGhIlIMzMAkUxplRuBMDkM1CJobhCpDZgKzRaKcw1LUMXXhsnxdfpFK1Y+OZ3hPgpb0a7/B4B/GcUl57niAAAAAElFTkSuQmCC";
    c.global_stop_ignore_icon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAmVBMVEX////Nzc3Pzs/S0tLW1tbX19fZ2dnc3Nzf39/h4eHiDRXjGCDkGyPkHiblJCvlKTHmLDPmLzbmMjnnNTznO0HoQEfoQ0npRkzrVFrt7O3uc3jveX7v7+/wgobwhYnx8fHyk5by8vLzmZzznqH0oaT0pKf0p6r2srX4xsj5z9D5+fn61Nb6+vr7+/v8/Pz98fH9/f3+9vf//Py/jJ9UAAAAAXRSTlMAQObYZgAAAK9JREFUGBkFwQlCwjAURdH7yG8NsUyiIloMLWE0kcj+F+c5APReko8AALdGkiS1GYCbkw2ZHE0uAzRSUwCqVwv0MpMVgGoa4ElDMVkBiJqCU6XYZPsLZBlIQLHJ9msVXnYCpwoUW89P17R++8MrAnzOwxHui2+iXAVm5xSOkFbQylcIP6SQuHSQnazPsxOkcBhfgdxK2i3vcAjdCMAwNW2W42X//PEAAOCxf+82I/wDKl0NPPJFCYkAAAAASUVORK5CYII=";
    c.global_restore_icon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAA5FBMVEX////q6uqEhITR0dEfHx9HR0f7+/v8/Pz+/v6vr68LCwtHR0b4+Pj+/v6Dg4MBAQEJCQg0NDR3d3fOzs729vZZWVk/Pz/Pz8/+/v68vLwHBwcGBgajo6P4+Pi/v78WFhYLCwvX19fT09IlJSQmJiZqamokJCSHh4fr6+s5OTlHR0f9/fybm5oHBweCgoL39/dUVFT19fX09PRWVlbExMT+/v6xsbFpaWlDQ0P6+vogICAXFxfj4+OWlpYTExPZ2dktLS3V1dXu7u5wcHDs7Oz8/PzJyckCAgIEBAMEBAQAAAAAAADG7gw5AAAAAXRSTlMAQObYZgAAAIVJREFUGBlVwecOQUEQBtBP+4FEDTdKdC43WkIQvYXZmfd/HxlLsnsOrFgcnkQyBVc6887CkcuTKRRLZfxUmAyxiFQDqFqdDLGoRhOq1SYWxdTpQvX6IoPhiMlQiK/xRCJgOiOew1osIwArljX+NgC2soNnfzjCdToHcF2uN7jujyc8L1gfFdIUEEvB1dMAAAAASUVORK5CYII=";

    constInitDeref.resolve();
    return constInitDeref.promise();
};
