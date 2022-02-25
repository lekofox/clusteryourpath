export const bodyFour = (id) => `{
    "query":{
        "status":{
            "option":"online"
        },
    
    "stats":[{
        "type":"and",
        "filters":[
    
            {"id":"enchant.stat_3086156145","value":{"min":4,"max":4},"disabled":false},
            {"id":"enchant.stat_3948993189","value":{"option":${id}},"disabled":false}
    
            ],
    "disabled":false}],
    "filters":{
        "misc_filters":{
            "filters":{
                "ilvl":
                    {"min":80,"max":null}},
                    "disabled":false},
                    "type_filters":{
                        "filters":{
                            "category":{
                                "option":"jewel.cluster"
                                }
                            },
    "disabled":true}}},
    "sort":{
        "price":"asc"}
    }`;

export const bodyFive = (id) => `{
    "query":{
        "status":{
            "option":"online"
        },
    
    "stats":[{
        "type":"and",
        "filters":[
    
            {"id":"enchant.stat_3086156145","value":{"min":5,"max":5},"disabled":false},
            {"id":"enchant.stat_3948993189","value":{"option":${id}},"disabled":false}
    
            ],
    "disabled":false}],
    "filters":{
        "misc_filters":{
            "filters":{
                "ilvl":
                    {"min":80,"max":null}},
                    "disabled":false},
                    "type_filters":{
                        "filters":{
                            "category":{
                                "option":"jewel.cluster"
                                }
                            },
    "disabled":true}}},
    "sort":{
        "price":"asc"}
    }`;
