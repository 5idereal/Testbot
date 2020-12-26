import requests

url = "https://discord.com/api/v8/applications/715375718309298247/guilds/715373422686765066/commands"

json = {
    "name": "blop",
    "description": "Send a random adorable animal photo",
    "options": [
        {
            "name": "animal",
            "description": "The type of animal",
            "type": 3,
            "required": True,
            "choices": [
                {
                    "name": "Dog",
                    "value": "animal_dog"
                },
                {
                    "name": "Cat",
                    "value": "animal_dog"
                },
                {
                    "name": "Penguin",
                    "value": "animal_penguin"
                }
            ]
        },
        {
            "name": "only_smol",
            "description": "Whether to show only baby animals",
            "type": 5,
            "required": False
        }
    ]
}

headers = {
    "Authorization": "Bot NzE1Mzc1NzE4MzA5Mjk4MjQ3.Xs8Tjg.OWPUDRcINamETPSl0g43t8HOLDo"
}

r = requests.post(url, headers=headers, json=json)
print(r)