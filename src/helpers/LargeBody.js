export function bodyEight(id) {
  const body = `{
    "query":{
        "status":{
            "option":"online"
        },
    
    "stats":[{
        "type":"and",
        "filters":[
    
            {"id":"enchant.stat_3086156145","value":{"min":8,"max":8},"disabled":false},
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
  return body;
}

export const bodyTwelve = (id) => `{
    "query":{
        "status":{
            "option":"online"
        },
    
    "stats":[{
        "type":"and",
        "filters":[
    
            {"id":"enchant.stat_3086156145","value":{"min":12,"max":12},"disabled":false},
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
