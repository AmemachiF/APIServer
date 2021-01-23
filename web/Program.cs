using LeanCloud.Engine;

using System;

namespace web
{
    class Program
    {
        static void Main(string[] args)
        {
            Cloud cloud = new Cloud().UseLog();

            cloud.Start(args);
        }
    }
}
