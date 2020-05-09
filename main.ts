music.setVolume(206)
music.setTempo(61)
WSTouchPiano.TP_PlayMusic(294, music.beat(BeatFraction.Quarter))
WSTouchPiano.TP_PlayMusic(262, music.beat(BeatFraction.Quarter))
WSTouchPiano.TP_PlayMusic(294, music.beat(BeatFraction.Quarter))
WSTouchPiano.TP_PlayMusic(349, music.beat(BeatFraction.Quarter))
WSTouchPiano.TP_PlayMusic(294, music.beat(BeatFraction.Quarter))
basic.forever(function () {
    WSTouchPiano.TP_ShowRGB(
    WSTouchPiano.TP_SetRGB(randint(0, 255), randint(0, 255), randint(0, 255)),
    WSTouchPiano.TP_SetRGB(randint(0, 255), randint(0, 255), randint(0, 255)),
    WSTouchPiano.TP_SetRGB(randint(0, 255), randint(0, 255), randint(0, 255)),
    WSTouchPiano.TP_SetRGB(randint(0, 255), randint(0, 255), randint(0, 255))
    )
})
