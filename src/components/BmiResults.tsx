import React from "react";
import { IonRow, IonCol, IonCard, IonCardContent } from "@ionic/react";

const BmiResult: React.FC<{ result: number }> = (props) => {
  return (
    <IonCard>
      <IonCardContent className="ion-text-center">
        <h2>Your body mass Index</h2>
        <h3>{props.result.toFixed(2)}</h3>
      </IonCardContent>
    </IonCard>
  );
};

export default BmiResult;
