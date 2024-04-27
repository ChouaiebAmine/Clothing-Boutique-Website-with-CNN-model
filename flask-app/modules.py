import random
def getRandomImageGrid(classes,imgs,imnames):
    for i in range(0, 9):
        randclass = random.randint(0, 5)
        randpic = random.randint(1, 100)
        imgs.append(
            "static/images/"
            + str(classes[randclass])
            + "/"
            + str(classes[randclass])
            + " ("
            + str(randpic)
            + ").jpg"
        )
        imnames.append(str(classes[randclass]) + " (" + str(randpic) + ")")
        return imgs,imnames