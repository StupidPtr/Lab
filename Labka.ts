abstract class Animal
{
    public abstract Accept(visitor: IVisitor): void;
}

interface IVisitor
{
    visitCat(cat: Cat): void;
    visitDog(dog: Dog): void;
    visitBird(bird: Bird): void;
}

class Cat implements Animal
{
    public Accept(visitor: IVisitor):void
    {
        visitor.visitCat(this)
    }
}

class Dog implements Animal
{
    public Accept(visitor: IVisitor): void
    {
        visitor.visitDog(this);
    }
}

class Bird implements Animal
{
    public Accept(visitor: IVisitor): void
    {
        visitor.visitBird(this);
    }
}

class VoiceVisitor implements IVisitor
{
    public visitCat(cat:Cat){
        console.log("Мяу");
    }
    public visitDog(dog:Dog){
        console.log("Гав");
    }
    public visitBird(bird:Bird){
        console.log("Чирик-чирик");
    }
}

class MoveVisitor implements IVisitor
{
    public visitCat(cat:Cat){
        console.log("Крадётся");
    }
    public visitDog(dog:Dog){
        console.log("Побежала");
    }
    public visitBird(bird:Bird){
        console.log("Полетела");
    }
}

class Kiwi implements Bird
{
    public Accept(visitor: IVisitor): void
    {
        visitor.visitBird(this);
    }
}

class UpdateVoiceVisitor extends VoiceVisitor
{
    public visitBird(bird: Bird): void
    {
        if(bird instanceof Kiwi)
        {
            console.log("Киви что-то там...")
        }
        else super.visitBird(bird);
    }
}


var animals:Array<Animal> = [new Cat, new Dog, new Bird];

let voice = new VoiceVisitor();
let move = new MoveVisitor();

for (var i in animals)
{
    console.log(animals[i].Accept(voice))
    console.log(animals[i].Accept(move))
}

console.log("\nupdateVoiceVisitor\n");
animals.push(new Kiwi)

let updateVoiceVisitor = new UpdateVoiceVisitor();
for (var i in animals)
{
    console.log(animals[i].Accept(updateVoiceVisitor))
}