using Newtonsoft.Json;

namespace web
{
    public class Response<T>
    {
        [JsonProperty("code")]
        public int StatusCode { get; set; }

        [JsonProperty("data")]
        public T Data { get; set; }

        public Response(int statusCode, T data)
        {
            StatusCode = statusCode;
            Data = data;
        }

        public override string ToString()
        {
            return JsonConvert.SerializeObject(this);
        }
    }
}
