import React from "react";
import { IonSegment, IonSegmentButton, IonLabel } from "@ionic/react";

const InputControl: React.FC<{ selectedValue: "mkg" | "ftlbs" }> = (props) => {
  return (
    <IonSegment value={props.selectedValue}>
      <IonSegmentButton value="mkg">
        <IonLabel>m/kg</IonLabel>
      </IonSegmentButton>
      <IonSegmentButton value="ftlbs">
        <IonLabel>ft/lbs</IonLabel>
      </IonSegmentButton>
    </IonSegment>
  );
};

export default InputControl;
