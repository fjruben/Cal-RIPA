﻿using Microsoft.Azure.Cosmos.Table;
using Newtonsoft.Json;
using System;

namespace RIPA.Functions.Domain.Functions.Templates.Models
{
    public class Template : TableEntity
    {
        [JsonProperty(PropertyName = "id")]
        public string Id { get; set; }


        [JsonProperty(PropertyName = "displayName")]
        public string DisplayName { get; set; }

        [JsonProperty(PropertyName = "stop")]
        public string StopTemplate { get; set; }

        [JsonProperty(PropertyName = "deactivationDate")]
        public DateTime? DeactivationDate { get; set; }

    }
}
