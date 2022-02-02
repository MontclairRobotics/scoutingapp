var config_data = `
{
  "title":"Scouting PASS",
  "page_title":"Rapid React",
  "elements":{
    "prematch": {
      "Scouter Initials": {
        "code":"s",
        "type":"scouter",
        "size":5,
        "maxSize":5,
        "required":"true"
      },
      "Event":{
        "code":"e",
        "type":"event",
        "defaultValue":"2022 Bridgewater",
        "required":"true",
        "disabled":"true"
      },
      "Match Level":{
        "code":"l",
        "type":"level",
        "choices":{
          "qm":"Quals<br>",
          "ef":"Eighth-Final<br>",
          "qf":"Quarter-Final<br>",
          "sf":"Semi-Final<br>",
          "f":"Final"
        },
        "defaultValue":"qm",
        "required":"true"
      },
      "Match #":{
        "code":"m",
        "type":"match",
        "min":1,
        "max":100,
        "required":"true"
      },
     "Robot": {
        "code":"r",
        "type":"robot",
        "choices":{
          "r1":"Red-1",
          "b1":"Blue-1<br>",
          "r2":"Red-2",
          "b2":"Blue-2<br>",
          "r3":"Red-3",
          "b3":"Blue-3"
        },
        "required":"true"
      },
      "Team #": {
        "code":"t",
        "type":"team",
        "min":1,
        "max":99999
      },
      "Auto Start Position": {
        "code":"as",
        "title": "Auto Start Position",
        "type":"radio",
        "choices":{
          "st":"Top<br>",
          "sm":"Middle<br>",
          "sb":"Bottom"
	},
	"required":"true"
      }
    },
    "auton": {
      "Taxi": {
        "code":"at",
        "title": "Taxied?",
        "type":"bool"
      },
      "Upper Cargo Scored": {
        "code":"au",
        "title": "Uppoer Cargo Scored",
        "type":"counter"
      },
      "Lower Cargo Scored": {
        "code":"al",
        "title": "Lower Cargo Scored",
        "type":"counter"
      },
      "Upper Cargo Attempts": {
        "code":"aca",
        "title": "Upper Cargo Attempts",
        "type":"counter"
      },
	  "Lower Cargo Attempts": {
        "code":"ala",
        "title": "Lower Cargo Attempsts",
        "type":"counter"
      }
    },
    "teleop": {
      "Upper Cargo Scored": {
        "code":"tu",
        "title": "Uppoer Cargo Scored",
        "type":"counter"
      },
      "Lower Cargo Scored": {
        "code":"tl",
        "title": "Lower Cargo Scored",
        "type":"counter"
      },
      "Upper Cargo Attempts": {
        "code":"tua",
        "title": "Uppoer Cargo Missed",
        "type":"counter"
      },
      "Lower Cargo Attempts": {
        "code":"tla",
        "title": "Lower Cargo Missed",
        "type":"counter"
      },
      "Was Defended": {
        "code":"wd",
        "title": "Was Defended",
        "type":"bool"
      },
      "Shooting Spot": {
        "code":"ss",
        "title": "Shooting Spot",
        "type":"radio",
        "choices":{
          "lb":"Launch Bay<br>",
          "tr":"Tarmac<br>",
          "fn":"Fender<br>",
          "ot":"Other"
        }
      }
    },
    "endgame": {
      "Climb": {
        "code":"c",
        "title": "Climb",
        "type":"radio",
        "choices":{
          "0":"Not Attempted<br>",
          "1":"Low<br>",
          "2":"Mid<br>",
          "3":"High<br>",
          "4":"Traversal<br>",
          "f":"Attempted but Failed"
        },
        "defaultValue":"0"
      },
	  "Climb Time (Seconds)": {
		"code":"ct",
		"title":"How quickly robot climbed",
		"type":"number",
		"min":1,
        "max":100
	  }
    },
    "postmatch": {
      "Pushing Capability": {
        "code":"pc",
        "title": "Pushing Capability",
        "type":"radio",
        "choices":{
          "1":"1<br>",
          "2":"2<br>",
          "3":"3<br>",
          "4":"4<br>",
		  "5":"5"
        }
      },
      "Counter-Defense<br>Maneuverability": {
        "code":"cd",
        "title": "Counter-Defense Maneuverability",
        "type":"radio",
        "choices":{
          "1":"1<br>",
          "2":"2<br>",
          "3":"3<br>",
          "4":"4<br>",
		  "5":"5"
        }
      },
      "Offensive<br>Maneuverability": {
        "code":"om",
        "title": "Offensive Maneuverability",
        "type":"radio",
        "choices":{
          "1":"1<br>",
          "2":"2<br>",
          "3":"3<br>",
          "4":"4<br>",
		  "5":"5"
        }
      },
	"Hoarding": {
	  "code":"hd",
	  "title":"Hoarding",
	  "type":"radio",
	  "choices":{
	    "1":"1<br>",
            "2":"2<br>",
            "3":"3"
	}
      },
	"Intake Speed": {
	  "code":"is",
	  "title":"Scaled Intake Speed",
	  "type":"radio",
	  "choices":{
	    "1":"1<br>",
	    "2":"2<br>",
	    "3":"3"
	}
      },
      "Robot Died": {
        "code":"d",
        "title": "Robot Died",
        "type":"bool"
      },
      "Penalties Incurred": {
        "code":"pi",
        "title": "Penalties incurred",
        "type":"text",
		"size":15,
		"maxSize":50
      },
      "# of Penalties Incurred": {
        "code":"np",
	"title": "Number of penalties incurred",
	"type":"counter"
      },
      "Comments": {
        "code":"co",
        "title": "Comments",
        "type":"text",
        "size":15,
        "maxSize":50
      }
    }
  }
}`;
