from locationsharinglib import Service
cookies_file = 'D:/Documents/discordbot/commands/cookies.txt'
google_email = 'nelson22768384@gmail.com'
service = Service(cookies_file=cookies_file, authenticating_account=google_email)
for person in service.get_all_people():
    print(person.nickname)
    print(person.latitude)
    print(person.longitude)
    print(person.address)
    