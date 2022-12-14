import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgBuyName } from "./types/nameservice/tx";
import { MsgDeleteName } from "./types/nameservice/tx";
import { MsgSetName } from "./types/nameservice/tx";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/nameservice.nameservice.MsgBuyName", MsgBuyName],
    ["/nameservice.nameservice.MsgDeleteName", MsgDeleteName],
    ["/nameservice.nameservice.MsgSetName", MsgSetName],
    
];

export { msgTypes }