using LeanCloud.Engine;

using Qiniu.Storage;
using Qiniu.Util;

using System;
using System.Collections.Generic;

namespace web
{

    public class QiniuService
    {
        private const string QINIU_ACCESS_KEY = "QINIU_ACCESS_KEY";
        private const string QINIU_SECRET_KEY = "QINIU_SECRET_KEY";
        private const string BUCKET_UPLOAD = "amemachif-upload";

        public static string AccessKey => Environment.GetEnvironmentVariable(QINIU_ACCESS_KEY);

        public static string SecretKey => Environment.GetEnvironmentVariable(QINIU_SECRET_KEY);

        public Dictionary<string, string> MyProperty { get; set; }

        //[EngineFunction("Qiniu_GetUploadToken")]
        public static string GetUploadToken()
        {
            Mac mac = new Mac(AccessKey, SecretKey);
            PutPolicy putPolicy = new PutPolicy();
            putPolicy.Scope = BUCKET_UPLOAD;

            string token = Auth.CreateUploadToken(mac, putPolicy.ToJsonString());

            return token;
        }
    }
}
