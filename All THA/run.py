import test

class car():
     
    # init method or constructor
    def __init__(ourself, model, color):
        ourself.model = model
        ourself.color = color
         
    def show(ourself):
        print("Model is", ourself.model )
        print("color is", ourself.color )
        print(test.__name__)
         
# both objects have different self which
# contain their attributes
audi = car("audi a4", "blue")
ferrari = car("ferrari 488", "green")
 
audi.show()     # same output as car.show(audi)
ferrari.show()  # same output as car.show(ferrari)

