const horoscopes = {
    aries: {
        underAnd30: "Realize that your inner state of mind is quite apparent to people just by the look on your face, Aries. Don't think you can hide things from others, especially today. You're better off just saying how you feel even if you think someone may be put off by it. Your emotional state should be strong, so use this to your advantage.",
        over30: "Tasks of any kind are all likely to seem like the labors of Hercules today, Aries. Overwork and nerve strain could have you feeling a little bit under the weather today, and it might be a good idea for you to take some time alone to rest. If you can't do that, at least try to take things easy. Some unexpected changes in your community might have your neighbors' tongues wagging. Be sure to check out the facts before jumping to any conclusions."
    },
    taurus: {
        underAnd30: "Your opinions are apt to be strong today and you may feel on top of the world, Taurus. Remember, however, that there are other people who share the world with you, so don't disregard them as you plow though the day. Expressing your thoughts should be no problem, but expressing your emotions could be a whole different matter. Don't push it if it doesn't feel right to share them with others at this time.",
        over30: "Money matters might be weighing on the mind of a close friend or lover and your advice could be sought. A creative project of some kind may require a larger expenditure of money, time, or other resources than you originally thought, and this could have you wondering if you'll be able to continue with it. It might take a little corner cutting on your part, Taurus, but you should be able to complete it as planned."
    },
    gemini: {
        underAnd30: "You might have visitors, Gemini, or even a hot date scheduled for tonight, but by mid-afternoon you might be feeling too tired to go through with it and wondering if you should cancel. It's best to keep your activities low key. Have coffee and snacks at home instead of going out, and get the snacks from the store! Your evening is likely to be full of exciting and stimulating conversations, so you'll be glad you stuck with your plans.",
        over30: "Realize that you may be controlling other people's actions without even consciously knowing it, Gemini. This is one of those days in which emotional outbursts could explode in your face as a result of other people's reactions to your pressure. Don't feel like you need to take on the responsibility of everyone else's actions. You may be having a hard enough time dealing with your own personal issues."
    },
    cancer: {
        underAnd30: "Realize that you may be controlling other people's actions without even consciously knowing it, Gemini. This is one of those days in which emotional outbursts could explode in your face as a result of other people's reactions to your pressure. Don't feel like you need to take on the responsibility of everyone else's actions. You may be having a hard enough time dealing with your own personal issues.",
        over30: "You might have visitors, Gemini, or even a hot date scheduled for tonight, but by mid-afternoon you might be feeling too tired to go through with it and wondering if you should cancel. It's best to keep your activities low key. Have coffee and snacks at home instead of going out, and get the snacks from the store! Your evening is likely to be full of exciting and stimulating conversations, so you'll be glad you stuck with your plans."
    },
    leo: {
        underAnd30: "Some good but surprising news about a group with which you may be affiliated could come your way today, Leo. Perhaps fundraising activities have been more successful than you thought, or perhaps recognition is coming your way. A lot of paperwork may have to be completed before this can be made to work for you, however. Contracts or other legal papers might be involved. In the evening, go out with your friends and celebrate.",
        over30: "ome out of your shell today and try not to be so aloof, Leo. You will never find the exact path you want to be on until you explore the different options. The good news is that you should be feeling quite strong emotionally, giving you the confidence to approach people with authority, thereby earning their respect and faith in whatever project you're involved with now."
    },
    virgo: {
        underAnd30: "You may be wondering why everyone is getting so touchy when you see this as being just a normal day, Virgo. Cut other people some slack when you think they aren't wearing as big a smile as you are. If you want people to trust you, you need to prove that you can bring yourself to the same level that they're on. Show a greater understanding of other people's needs.",
        over30: "Some upsetting news regarding money could throw you into a bit of a dither today, Virgo. Perhaps a check you've been expecting hasn't arrived on time, or maybe the bank has made a computer error regarding your account. It's nothing that can't be straightened out, though it's going to be a pain making all of those phone calls. Basically, all should be going very well for you. This is only a temporary hindrance."
    },
    libra: {
        underAnd30: " A temporary setback with regard to your career might have you feeling a bit disoriented right now, Libra. Modern equipment of some kind might be involved. Don't make yourself crazy; this is only temporary and will be straightened out. Your own determination, efficiency, and practical abilities should have it taken care of in no time. Basically, you're probably feeling quite optimistic for the future and not likely to change that energy any time soon.",
        over30: "It could be that you don't feel as if you can begin your day until you've made it clear to someone that you have an issue that needs to be dealt with, Libra. You have a greater amount of emotional strength than usual, and you'll find that it's important that you hold on to this feeling against all odds. Other people may try to strike you down with their words, but pay attention to what they're saying. Are they really focusing on the facts or just blasting you with their opinions?"
    },
    scorpio: {
        underAnd30: "Don't let another person's small, thoughtless comment ruin your entire day, Scorpio. People may be a bit stingy with everything from money to emotions to time spent with loved ones. The more you tell someone else that they're wrong, the more that person is going to reject your advice. In general, this is a good time to simply stay out of other people's way.",
        over30: "Today may start out being a very frustrating day, Scorpio. Be prepared! Some equipment with which you work might suddenly go out of order and it could take a while to get it fixed. A temporary separation from a romantic partner could also be disappointing. You may have a lot of physical energy for which you have little immediate outlet. Take a long walk. This could not only provide an energy outlet but clear your head as well."
    },
    sagittarius: {
        underAnd30: "Your level of artistic inspiration is very high today, Sagittarius. Dreams or meditation may have brought up some spiritual insights and revelations for you, and you may have promptly forgotten them upon coming out of your dream or meditative state. This could prove very frustrating for you! Try writing them down even if you only remember snatches. This can actually bring them to the surface again. You'll want a record of them anyway.",
        over30: "You may be feeling a bit tired and worn out lately, Sagittarius. Don't push yourself to do things when you know that your body needs rest. It could be extremely tempting to roll with the crowd and participate in all the fun. You don't want to miss out on a single thing going on around you. Resist the temptation to disregard the important messages that are coming from your body. Slow down."
    },
    capricorn: {
        underAnd30: "Don't fritter away your time with a person who isn't going to change his or her mind about something, Capricorn. This is one of those days in which you may end up wasting your time and everyone else's by continuing to insist that things be done a certain way. If you want to do something your way, then do it. If someone else wants to do something his or her way, then let that person do it.",
        over30: "A delivery of some kind that you were expecting to come from far away might be delayed, causing you to wonder if it might have been lost. It hasn't, Capricorn; it's just delayed. Unfortunately, there isn't much you can do but wait. Equipment you use on the job could go out of whack today, necessitating calling in a repairman. This could set your work back some and make you a bit antsy. Try to find something else to do!"
    },
    aquarius: {
        underAnd30: "Today you're likely to be feeling especially passionate, sexy, and desirous of a romantic encounter, Aquarius. You might even have a hot date scheduled. However, don't be surprised if it has to be postponed for reasons beyond the control of either you or your partner. If you can't do otherwise, you might try to sublimate those feelings through creative activities. Engrossing novels and movies could also prove a good outlet, although never as good as the real thing!",
        over30: "More than likely there is a person in your world who desperately wants to get closer to you, Aquarius. Conflict is apt to arise tonight if you don't open up and let this person in a bit closer. It could be that you're quick to snap back with a forceful opinion, but be careful that you don't scare them away entirely. This person wants to share more of an intimate space with you, but perhaps they just don't know how."
    },
    pisces: {
        underAnd30: `It may be easy for you to show up at a party or answer the phone when you know that it's your best friend calling with good news, but where are you when the going gets rough, pisces? Make sure you show your support to people in all situations. Don't be just a fair-weather friend. Your loyalty to others may be tested today when conflict arises and tempers get high.`,
        over30: "A female visitor who might have a few problems might come to your door wanting advice and sympathy, Pisces. She could have some other news that could come as a shock to you. A crisis on the job might make it necessary for you or your partner to spend most of the time today away from home and family. This could be frustrating, particularly if you have to cancel your plans. Hang in there!"
    }
}
