var manifest =       {
        "version": "1.0",
        "name": "test theme",
        "description": "A test theme",
        "theme": {
          "images" : {
            "theme_frame" : "images/theme_frame_camo.png",
            "theme_toolbar" : "images/theme_toolbar_camo.png",
            "theme_ntp_background" : "images/theme_ntp_background_norepeat.png",
            "theme_ntp_attribution" : "images/attribution.png"
          },
          "colors" : {
            "frame" : [71, 105, 91],
            "toolbar" : [207, 221, 192],
            "ntp_text" : [20, 40, 0],
            "ntp_link" : [36, 70, 0],
            "ntp_section" : [207, 221, 192],
            "button_background" : [255, 255, 255]
          },
          "tints" : {
            "buttons" : [0.33, 0.5, 0.47]
          },
          "properties" : {
            "ntp_background_alignment" : "bottom"
          }
        }
      }
var jsonManifest = JSON.stringify(dict);
var fs = require('fs');
fs.mkdirSync(dir); //create new folder
fs.writeFile("manifest.json", manifest, function(err, result) { //put the manifest in
    if(err) console.log('error', err);
});
