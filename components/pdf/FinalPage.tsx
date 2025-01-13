import React from "react";
import ThinLineSignatureField from "@/components/pdf/ThinLineSignatureField";

// The FinalPage displays a simple page that has a final comments field (just a div with a border)
// and another place for the inspector to sign their name, data, etc.
const FinalPage: React.FC = () => {
  return (
    // for custom classes, see styles/globals.css for more details
    <div className={"page mx-auto"}>
      <div className={"w-4/5 mx-auto my-20"}>
        <p className={"subparagraph pl-2"}>Final Supplementary Comments:</p>
        <div className={"additional-comments-border"}></div>
      </div>
      <div className={"mt-32 mx-12"}>
        <p className={"subtitle"}>Acknowledgement</p>
        <p className={"tiny-text"}>I hereby confirm that the inspection was conducted thoroughly and accurately to
          the best of my ability. By signing, I understand that the information provided in this checklist may be used
          as evidence in a court of law if required, and I accept full responsibility for the accuracy and completeness
          of this report. Furthermore, I acknowledge that any negligence or misrepresentation may result in personal
          liability.</p>
      </div>
      <div className={"mt-12 mb-8 flex flex-wrap justify-center"}>
        <ThinLineSignatureField text={"Signature"}/>
        <ThinLineSignatureField text={"Print Name"}/>
        <ThinLineSignatureField text={"Date"}/>
      </div>
    </div>
  );
};

export default FinalPage;
