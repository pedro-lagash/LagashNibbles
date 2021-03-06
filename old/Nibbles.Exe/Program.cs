﻿using System;
using System.Collections.Generic;

namespace Nibbles
{
    public class Program
    {
        public static void Main(string[] args)
        {
            Console.WriteLine("Nibbles!");
            // Console.Write('\u2190');
            // Console.Write('\u2191');
            // Console.Write('\u2192');
            // Console.Write('\u2193');
            var game = new Game();
            game.SetupRandom(4, new DiegoGBehavior());
            game.MainLoop(true);
        }
    }

    static class Extensions
    {
        public static void ForEach<T>(this IEnumerable<T> list, Action<T> action)
        {
            if (action == null)
            {
                throw new Exception();
            }
            foreach(var item in list)
            {
                action(item);
            }
        }
    }
}
