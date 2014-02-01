using System;
using System.Collections.Generic;
using System.Web;

/// <summary>
/// Summary description for Exercise
/// </summary>
public class Exercise 
{
    ExerciseIface inner;
    Sequencer sequencer;
	public Exercise(string code,int num)
	{
        if (code.Equals("2A"))
        {
            inner = Level2A.createInner(num);
            sequencer = new Sequencer((num - 1) % 10);
        }
        if (code.Equals("A"))
        {
            inner = LevelA.createInner(num,num % 10);
            sequencer = new Sequencer((num - 1) % 10);
        }
	}
    public string getQuestion(int idx)
    {
        return sequencer.getQuestion(idx, inner);
    }
}
public class LevelA
{
    public static ExerciseIface createInner(int levelNum, int seed)
    {
        if (levelNum <= 10)
        {
            return new AddWithMax(10,seed);
        }
        if (levelNum <= 20 && levelNum > 10)
        {
            return new AddWithMax(12, seed);
        }

        if (levelNum <= 30 && levelNum > 20)
        {
            return new AddWithMax(15, seed);
        }
        if (levelNum <= 40 && levelNum > 30)
        {
            return new AddWithMax(18, seed);
        }
        if (levelNum <= 50 && levelNum > 40)
        {
            return new AddWithMax(20, seed);
        }
        return new AddWithMax(28, seed);
    }
}

public class Level2A
{
    public static ExerciseIface createInner(int levelNum)
    {
        if (levelNum <= 20 && levelNum > 10)
        {
            return new AdditionX(4, 12);
        }
        if (levelNum <= 30 && levelNum > 20)
        {
            return new AdditionX(4, 16);
        }
        if (levelNum <= 40 && levelNum > 30)
        {
            return new AdditionX(5, 12);
        }
        if (levelNum <= 50 && levelNum > 40)
        {
            return new AdditionX(5, 15);
        }
        return new AdditionX(4,12);
    }
}
public class Sequencer
{
    int start;
    int stride;
    public Sequencer(int seed)
    {
        if (seed == 0)
        {
            start = 0; stride = 1;
        }
        if (seed == 1)
        {
            start = 0; stride = 7; 
        }
        if (seed == 2)
        {
            start = 1; stride = 2;
        }
        if (seed == 3)
        {
            start = 8; stride = 71;
        }
        if (seed == 4)
        {
            start = 55; stride = 7;
        }
        if (seed == 5)
        {
            start = 10; stride = 13;
        }
        if (seed == 6)
        {
            start = 1; stride = 13;
        }
        if (seed == 7)
        {
            start = 5; stride = 2;
        }
        if (seed == 8)
        {
            start = 5; stride = 9;
        }
        if (seed == 9)
        {
            start = 4; stride = 7;
        }
        if (seed >= 10)
        {
            Random r = new Random(); start = r.Next(10);
            stride = r.Next(9);
        }
    }
    public int getSequence(int idx, ExerciseIface exercise)
    {
        int v = idx * stride + start;
        int max = exercise.questions();
        return v % max;
    }
    public string getQuestion(int idx, ExerciseIface exercise)
    {
        return exercise.question(getSequence(idx, exercise));
    }
}
public interface ExerciseIface
{
     int questions();
     string question(int idx);
}
class AdditionX : ExerciseIface
{
    int x,maxX,off;
    public AdditionX(int xx) : this(xx,12) {
    }
    public AdditionX(int xx, int max)
    {
        x = xx;
        maxX = max;
        off = max - 12;
    }
    public int questions() { return maxX; }
    public string question(int idx)
    {
        return "" + (off+idx) + " + " + x + " = ";
    }
}
class AddWithMax : ExerciseIface
{
    int x, maxX, off;
    Random r;
    public AddWithMax(int max, int seed)
    {
        maxX = max;
        r = new Random(seed * 100 + 14);
    }
    
    public int questions() { return 12; }
    public string question(int idx)
    {
        int firstNum;
        int secNum;
        firstNum = idx + 1;
        if (firstNum >= (maxX)) firstNum = ((firstNum - 1) % (maxX - 1)) + 1;
        secNum = 1 + r.Next(maxX - firstNum - 1);
        return "" + (firstNum) + " + " + secNum + " = ";
    }
}
class SubtractionX : ExerciseIface
{
    int x, maxX;
    public SubtractionX (int xx)
        : this(xx, 12)
    {
    }
    public SubtractionX(int xx, int max)
    {
        x = xx;
        maxX = max;
    }
    public int questions() { return maxX; }
    public string question(int idx)
    {
        return "" + (idx+x) + " - " + x + " = ";
    }
}