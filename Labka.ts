abstract class Animal
{
    public abstract Accept(visitor: IVisitor): void;
}

interface IVisitor
{
    Make(cat: Cat): void;
    Make(dog: Dog): void;
    Make(bird: Bird): void;
}

class Cat implements Animal
{
    public Accept(visitor: IVisitor):void
    {
        visitor.Make(this)
    }
}

class Dog implements Animal
{
    public Accept(visitor: IVisitor): void
    {
        visitor.Make(this);
    }
}

class Bird implements Animal
{
    public Accept(visitor: IVisitor): void
    {
        visitor.Make(this);
    }
}

class VoiceVisitor implements IVisitor
{
    public Make(param: Cat | Dog | Bird)
    {
        if(param instanceof Cat)
        {
            console.log("Мяу");
        }
        if(param instanceof Dog)
        {
            console.log("Гав");
        }
        if(param instanceof Bird)
        {
            console.log("Чирик-Чирик");
        }
    }
}

class MoveVisitor implements IVisitor
{
    public Make(param: Cat | Dog | Bird)
    {
        if(param instanceof Cat)
        {
            console.log("Крадётся");
        }
        if(param instanceof Dog)
        {
            console.log("Побежала");
        }
        if(param instanceof Bird)
        {
            console.log("Полетела");
        }
    }
}

class Kiwi implements Bird
{
    public Accept(visitor: IVisitor): void
    {
        visitor.Make(this);
    }
}

class UpdateVoiceVisitor extends VoiceVisitor
{
    public Make(bird: Bird): void
    {
        if(bird instanceof Kiwi)
        {
            console.log("Киви что-то там...")
        }
        else super.Make(bird);
    }
}

let dog = new Dog();
let cat = new Cat();
let bird = new Bird();

let voice = new VoiceVisitor();
let move = new MoveVisitor();

dog.Accept(voice);
cat.Accept(voice);
bird.Accept(voice);

dog.Accept(move);
cat.Accept(move);
bird.Accept(move);

console.log("\nupdateVoiceVisitor\n");

let updateVoiceVisitor = new UpdateVoiceVisitor();
let kiwi = new Kiwi();

kiwi.Accept(updateVoiceVisitor);

dog.Accept(updateVoiceVisitor);
cat.Accept(updateVoiceVisitor);
bird.Accept(updateVoiceVisitor);