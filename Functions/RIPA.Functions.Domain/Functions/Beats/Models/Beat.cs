﻿using Microsoft.Azure.Cosmos.Table;
using Newtonsoft.Json;

namespace RIPA.Functions.Domain.Functions.Beats.Models
{
    public class Beat : TableEntity
    {
        [JsonProperty(PropertyName = "id")]
        public int Id { get; set; }

        [JsonProperty(PropertyName = "community")]
        public string Community { get; set; }

        [JsonProperty(PropertyName = "command")]
        public string Command { get; set; }

        [JsonProperty(PropertyName = "commandAuditGroup")]
        public string CommandAuditGroup { get; set; }

        [JsonProperty(PropertyName = "commandAuditSize")]
        public string CommandAuditSize { get; set; }


    }
}
