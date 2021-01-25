using LeanCloud.Engine;

using Newtonsoft.Json;

using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;

namespace web.BilibiliAPI
{
    public class LiveInfoService
    {
        [EngineFunction("Bilibili_LiveInfo_GetInfo")]
        public static string GetInfo([EngineFunctionParameter("uid")] int uid)
        {
            using HttpClient client = new HttpClient();

            client.DefaultRequestHeaders.Referrer = new Uri("http://www.bilibili.com");

            string url = $"https://api.live.bilibili.com/live_user/v1/Master/info?uid={uid}";

            var res = client.GetAsync(url)
                .ConfigureAwait(false).GetAwaiter().GetResult();

            var result = res.Content.ReadAsStringAsync()
                .ConfigureAwait(false).GetAwaiter().GetResult();

            if (!res.IsSuccessStatusCode)
            {
                throw new EngineException((int)res.StatusCode, result);
            }

            return new Response<object>(200, JsonConvert.DeserializeObject(result)).ToString();
        }
    }
}
