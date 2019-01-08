function long_cats() {

    var long_cat = {
        "category": {
            "sentences": {
                "colour": "#00CFFF",
                "description": "long sentences and paragraphs",
                "rules": {
                    "long_sentence": {
                        "description": "Trim this below 25 words",
                        "js_rules": [
                            {
                                "name": "longSentence",
                                "parameter": 25
                            }
                        ]
                    }

                }
            }
    }
    }

return long_cat

}
