import React, { useEffect, useState, useRef } from "react";
import { useRouter } from "next/router";
import OutlineButtonWithIcon from "./OutlineButtonWithIcon";
import {
  EmailShareButton,
  EmailIcon,
  FacebookShareButton,
  FacebookIcon,
  LinkedinShareButton,
  LinkedinIcon,
  TwitterShareButton,
  TwitterIcon
} from "react-share";

const ShareDropdown = () => {
  // use router hook to get the current url
  const router = useRouter();
  const THIS_URL = `${process.env.NEXT_PUBLIC_BASE_URL}${router.asPath}`

  // keep track of the visual state for the dropdown
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  // create references to track if a click was within the component or not
  const buttonRef = useRef<HTMLDivElement | null>(null) as React.RefObject<HTMLDivElement>;
  const dropdownListRef = useRef<HTMLDivElement | null>(null) as React.RefObject<HTMLDivElement>;

  // if the button is clicked we toggle the dropdown display accordingly
  const flipExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  const handleClick = (event: MouseEvent) => {
    // if the click is outside both components we close the dropdown menu
    if (!buttonRef?.current?.contains(event.target as HTMLElement) && 
        !dropdownListRef?.current?.contains(event.target as HTMLElement)) {
      setIsExpanded(false);
    }
  };

  // create a listener for any click and automatically check where it was
  useEffect(() => {
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  });

  return (
    <div>
      <div ref={buttonRef}>
        <OutlineButtonWithIcon 
          buttonText="Share"
          src="/share-icon-64px.png"
          size={20}
          alt="Share Template Icon"
          onClick={flipExpanded}
        />
      </div>

      {/* I chose to manually type out the different button components because of the way I had to place the icon
      component inside the button component. Could be mitigated with a better icon library */}
      <div ref={dropdownListRef} className={`share-dropdown-container ${isExpanded ? "visible" : "hidden"}`}>
        <div className="share-dropdown-item">
          <EmailShareButton url={THIS_URL}>
            <EmailIcon round size={32}/>
          </EmailShareButton>
          <p>Email</p>
        </div>
        <div className="share-dropdown-item">
          <FacebookShareButton url={THIS_URL}>
            <FacebookIcon round size={32}/>
          </FacebookShareButton>
          <p>Facebook</p>
        </div>
        <div className="share-dropdown-item">
          <LinkedinShareButton url={THIS_URL} title={THIS_URL}>
            <LinkedinIcon round size={32}/>
          </LinkedinShareButton>
          <p>LinkedIn</p>
        </div>
        <div className="share-dropdown-item">
          <TwitterShareButton url={THIS_URL}>
            <TwitterIcon round size={32}/>
          </TwitterShareButton>
          <p>Twitter/X</p>
        </div>
      </div>
    </div>
  );
};

export default ShareDropdown;
