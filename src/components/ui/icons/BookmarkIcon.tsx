import React from "react";
import { FaRegBookmark } from "react-icons/fa";
type Props = {
  className?: string;
};
export default function BookmarkIcon({ className }: Props) {
  return <FaRegBookmark className={className || "w-7 h-7"} />;
}
