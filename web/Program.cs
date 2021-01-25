using LeanCloud.Engine;

using Microsoft.AspNetCore.Hosting;

using System;

namespace web
{
    class Program
    {
        static void Main(string[] args)
        {
            Cloud cloud = new Cloud().UseLog();
            cloud
                .UseFunction<QiniuService>()
                .UseFunction<BilibiliAPI.LiveInfoService>();
            cloud.Start(args);
        }
    }
}
