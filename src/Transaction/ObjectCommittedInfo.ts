import { Pair } from "./Pair";
import { PropertyChangeInfo } from "./PropertyChangeInfo";

// commit infomation for a single object
export class ObjectCommittedInfo {
    propertiesNew: PropertyChangeInfo[]; // in change time order
    propertiesAdd: Pair<PropertyChangeInfo, PropertyChangeInfo>[]; // in change time order
    propertiesDel: PropertyChangeInfo[]; // in change time order
}